import { Request, Response } from 'express';
import BlogPost from '../../models/blogPost';

export const getPosts = async (req: Request, res: Response) => {
	try {
		const blogPosts = await BlogPost.find().populate('author', 'username');
		res.status(200).json(blogPosts);
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};
