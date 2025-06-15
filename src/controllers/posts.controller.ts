import { Request, Response, NextFunction } from 'express';

import Post from '../models/post.model';
import { NotFoundError, BadRequestError } from '../utils/errors';

class PostsController {
    static async getAllPosts(
        _: Request,
        res: Response,
        next: NextFunction) {
        try {
            const posts = await Post.find().sort({ createdAt: -1 });
            res.json(posts);
        } catch (err) {
            next(err);
        }
    }

    static async getPostById(
        req: Request,
        res: Response,
        next: NextFunction) {
        try {
            const post = await Post.findById(req.params.id);
            if (!post) throw new NotFoundError('Post not found');
            res.json(post);
        } catch (err) {
            next(err);
        }
    }

    static async createPost(
        req: Request,
        res: Response,
        next: NextFunction) {
        try {
            const { title, content } = req.body;

            if (!title || !content) {
            throw new BadRequestError('Title and content are required.');
            }

            const post = await Post.create({ title, content });
            res.status(201).json(post);
        } catch (err) {
            next(err);
        }
    }

    static async deletePost(
        req: Request,
        res: Response,
        next: NextFunction) {
        try {
            const deleted = await Post.findByIdAndDelete(req.params.id);
            if (!deleted) throw new NotFoundError('Post not found');
            res.json({ message: 'Post deleted successfully' });
        } catch (err) {
            next(err);
        }
    }
}

export default PostsController;