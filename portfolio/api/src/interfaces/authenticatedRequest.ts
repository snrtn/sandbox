import { Request } from 'express';
import { IUserDocument } from './iUser';

export interface AuthenticatedRequest extends Request {
	user?: Omit<IUserDocument, '_id'> & { _id: string };
}
