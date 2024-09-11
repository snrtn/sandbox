import { Request, Response } from 'express';
import BlogPost from '../../models/blogPost';
import { IBlogPost } from '../../interfaces/iBlogPost';
import upload from '../../middlewares/multer';
import { uploadToDropbox } from '../../utils/uploadToDropbox';

export const createPost = async (req: Request, res: Response) => {
	upload.single('image')(req, res, async (err) => {
		if (err) {
			console.error('Image upload failed:', err);
			return res.status(400).json({ message: 'Image upload failed.' });
		}

		console.log('Request Body:', req.body);
		const { title, content, tags, author } = req.body;

		if (!title || !content || !tags || !author) {
			console.error('All fields are required.');
			return res.status(400).json({ message: 'All fields are required.' });
		}

		try {
			let imageUrl = '';
			if (req.file) {
				console.log('Uploading image to Dropbox...');
				imageUrl = await uploadToDropbox(req.file.originalname, req.file.buffer);
				console.log('Image URL:', imageUrl);
			}

			const blogPost: IBlogPost = new BlogPost({
				title,
				content,
				tags: tags.split(','),
				image: imageUrl,
				author,
				createdAt: new Date(),
				updatedAt: new Date(),
			});

			console.log('Blog post data before save:', blogPost);
			await blogPost.save();
			console.log('Blog post saved to MongoDB:', blogPost);
			res.status(201).json({ message: 'Blog post created successfully.', blogPost });
		} catch (error) {
			console.error('Error creating blog post:', error);
			res.status(500).json({ message: 'Server Error' });
		}
	});
};
