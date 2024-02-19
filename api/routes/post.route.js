import express from 'express';
import { createPost, deletePost, getListings } from '../controllers/post.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();
router.post('/create', verifyToken, createPost);
router.get('/get', getListings);
router.delete('/delete/:id', verifyToken, deletePost);

export default router;