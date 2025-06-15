import { Router } from 'express';
import PostsController from '../controllers/posts.controller';

const router = Router();

// GET - Fetch all posts
router.get('/', PostsController.getAllPosts);

// GET - Fetch a post by ID
router.get('/:id', PostsController.getPostById);

// POST - Create a new post
router.post('/', PostsController.createPost);

// DELETE - Delete a post by ID
router.delete('/:id', PostsController.deletePost);

export default router;