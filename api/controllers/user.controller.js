import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import Post from '../models/post.model.js';

export const test = (req, res) => {
  res.json({
    message: 'Api route is working!'
  })
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can only update your own profile!'));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    //extract the username
    User.findById(req.params.id)
      .then(user => {
        const username = user.username;
        console.log(username);
      })
      .catch(err => {
        console.error(err);
      });
    User.find({}, 'username')
      .then(users => {
        const usernames = users.map(user => user.username);
        console.log(usernames);
      })
      .catch(err => {
        console.error(err);
      });

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar
        }
      },
      { new: true }
    )
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (err) {
    next(err);
  }
}

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You cannot delete this account.'))
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie('access_token');
    res.status(200).json('User has been deleted!');
  } catch (err) {
    next(err);
  }
}

export const getUserPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({ userRef: req.params.id });
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};