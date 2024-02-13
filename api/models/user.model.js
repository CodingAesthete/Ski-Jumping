import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: "https://i.pinimg.com/originals/34/65/33/346533ceb521f0ff1fb31dda668af017.jpg"
    }
  }, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;