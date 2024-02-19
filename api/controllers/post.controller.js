import Post from "../models/post.model.js";

export const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
}
export const getListings = async (req, res, next) => {
  try {
    const posts = await Post.find();

    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(errorHandler(404, 'Post not found!'));
  }

  if (req.user.id !== post.userRef) {
    return next(errorHandler(401, 'You can only delete your own posts!'));
  }

  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json('Post has been deleted!');
  } catch (error) {
    next(error);
  }
};