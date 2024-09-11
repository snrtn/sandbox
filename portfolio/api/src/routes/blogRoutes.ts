import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { createPost } from '../controllers/blog/createPost';
import { updatePost } from '../controllers/blog/updatePost';
import { deletePost } from '../controllers/blog/deletePost';
import { getPosts } from '../controllers/blog/getPosts';
import { getPostById } from '../controllers/blog/getPostById';

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', authMiddleware, createPost);
router.put('/:id', authMiddleware, updatePost);
router.delete('/:id', authMiddleware, deletePost);

export default router;
