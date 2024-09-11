import { AuthenticatedRequest } from '../../interfaces/authenticatedRequest';
import { Response } from 'express';
import BlogPost from '../../models/blogPost';
import { deleteFromDropbox } from '../../utils/deleteFromDropbox';

export const deletePost = async (req: AuthenticatedRequest, res: Response) => {
	const { id } = req.params;

	try {
		const blogPost = await BlogPost.findByIdAndDelete(id);

		if (!blogPost) {
			console.error('Blog post not found:', id);
			return res.status(404).json({ message: 'Blog post not found.' });
		}

		const oldImagePath = blogPost.image.split('/').pop();
		console.log('Deleting file from Dropbox:', `/${oldImagePath}`);
		await deleteFromDropbox(`/${oldImagePath}`);
		console.log('File deleted from Dropbox:', `/${oldImagePath}`);
		res.status(200).json({ message: 'Blog post deleted successfully.' });
	} catch (error) {
		console.error('Error deleting blog post:', error);
		res.status(500).json({ message: 'Server Error' });
	}
};
