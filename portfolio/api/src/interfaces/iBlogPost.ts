import { Document, Schema } from 'mongoose';

export interface IBlogPost extends Document {
	title: string;
	content: string;
	tags: string[];
	image: string;
	author: Schema.Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}
