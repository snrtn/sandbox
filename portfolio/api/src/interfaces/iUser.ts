import { Document, ObjectId } from 'mongoose';

export interface IUser {
	[x: string]: any;
	username: string;
	password: string;
}

export interface IUserDocument extends IUser, Document {
	_id: ObjectId;
}
