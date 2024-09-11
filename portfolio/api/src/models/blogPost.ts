import { Schema, model } from 'mongoose';
import { IBlogPost } from '../interfaces/iBlogPost';

const BlogPostSchema = new Schema<IBlogPost>({
	title: { type: String, required: true },
	content: { type: String, required: true },
	tags: { type: [String], required: true },
	image: { type: String, required: true },
	author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const BlogPost = model<IBlogPost>('BlogPost', BlogPostSchema);
export default BlogPost;
