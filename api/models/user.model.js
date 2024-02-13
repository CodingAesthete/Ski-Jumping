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
      default: "https://us.123rf.com/450wm/tsapenkosveta/tsapenkosveta2201/tsapenkosveta220100029/180859577-polar-bear-ice-skating-training-funny-cartoon-winter-sport-mascot.jpg"
    }
  }, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;