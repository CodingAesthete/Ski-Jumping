import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import postRouter from './routes/post.route.js'
import messageRouter from './routes/messages.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cron from 'node-cron';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const __dirname = path.resolve();

const app = express();
app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.get('/ping', (req, res) => {
  res.send('Ping successful');
});

cron.schedule('*/5 * * * *', () => {
  axios.get('http://localhost:5000/ping')
    .then(response => {
      console.log('Ping sent');
    })
    .catch(error => {
      console.error('Error sending ping:', error);
    });
});


const server = app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);
app.use('/api/post', postRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  console.log('New client connected');

  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      io.to(sendUserSocket).emit("msg-receive", { msg: data.msg, to: data.to });
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    // Remove the disconnected user from the onlineUsers map
    onlineUsers.forEach((value, key) => {
      if (value === socket.id) {
        onlineUsers.delete(key);
      }
    });
  });
});
