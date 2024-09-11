import { deleteFromDropbox } from '../../utils/deleteFromDropbox';
import { AuthenticatedRequest } from '../../interfaces/authenticatedRequest';
import { Response } from 'express';
import BlogPost from '../../models/blogPost';
import { uploadToDropbox } from '../../utils/uploadToDropbox';
import upload from '../../middlewares/multer';

export const updatePost = async (req: AuthenticatedRequest, res: Response) => {
	upload.single('image')(req, res, async (err) => {
		if (err) {
			console.error('Image upload error:', err);
			return res.status(400).json({ message: 'Image upload failed.' });
		}

		const { id } = req.params;
		const { title, content, tags, author } = req.body;

		console.log('Request Body:', req.body); // Debugging log

		if (!title || !content || !tags || !author) {
			return res.status(400).json({ message: 'All fields are required.' });
		}

		try {
			const blogPost = await BlogPost.findById(id);
			if (!blogPost) {
				console.error('Blog post not found:', id);
				return res.status(404).json({ message: 'Blog post not found.' });
			}

			if (req.file) {
				console.log('Old image path:', blogPost.image);
				const oldImagePath = blogPost.image.split('/').pop();
				if (oldImagePath) {
					await deleteFromDropbox(`/${oldImagePath}`);
					console.log('Old image deleted from Dropbox:', oldImagePath);
				}

				const newImageUrl = await uploadToDropbox(req.file.originalname, req.file.buffer);
				blogPost.image = newImageUrl;
				console.log('New image uploaded to Dropbox:', newImageUrl);
			}

			blogPost.title = title;
			blogPost.content = content;
			blogPost.tags = tags.split(',');
			blogPost.author = author;
			blogPost.updatedAt = new Date();

			await blogPost.save();
			console.log('Blog post updated:', blogPost);
			res.status(200).json({ message: 'Blog post updated successfully.', blogPost });
		} catch (error) {
			console.error('Error updating blog post:', error);
			res.status(500).json({ message: 'Server Error' });
		}
	});
};
