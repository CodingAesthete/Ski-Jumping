import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js'
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => { console.log('Connected to MongoDB!'); })
  .catch((err) => { console.log(err); })

const app = express();

app.use('/api/user', userRouter);

app.listen(3000, () => {
  console.log('Port: 3000...');
})