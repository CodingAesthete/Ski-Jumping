import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      require: true
    },
    image: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    userRef: {
      type: String,
      required: true
    }
  }, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

export default Post;