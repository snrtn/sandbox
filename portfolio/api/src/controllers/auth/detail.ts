import { Response } from 'express';
import { AuthenticatedRequest } from '../../interfaces/authenticatedRequest';

export const detail = (req: AuthenticatedRequest, res: Response) => {
	if (!req.user) {
		console.log('User not authenticated');
		return res.status(401).json({ message: 'User not authenticated' });
	}
	console.log('Returning user:', req.user);
	res.json({ user: req.user });
};
