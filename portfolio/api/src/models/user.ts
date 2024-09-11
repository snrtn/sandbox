import { Schema, model } from 'mongoose';
import { IUserDocument } from '../interfaces/iUser';

const UserSchema = new Schema<IUserDocument>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

const User = model<IUserDocument>('User', UserSchema);
export default User;
