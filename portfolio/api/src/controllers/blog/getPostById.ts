import { Request, Response } from 'express';
import BlogPost from '../../models/blogPost';

export const getPostById = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const blogPost = await BlogPost.findById(id).populate('author', 'username');

		if (!blogPost) {
			return res.status(404).json({ message: 'Blog post not found.' });
		}

		res.status(200).json(blogPost);
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};
