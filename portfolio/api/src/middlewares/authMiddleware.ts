import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest } from '../interfaces/authenticatedRequest';
import redisClient from '../config/redis';
import User from '../models/user';

const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	const token = req.cookies.accessToken || req.headers.authorization?.split(' ')[1];
	if (!token) {
		return res.status(401).json({ message: 'Access denied. No token provided.' });
	}

	try {
		const isBlacklisted = await redisClient.get(`blacklist:${token}`);
		if (isBlacklisted) {
			return res.status(401).json({ message: 'Invalid token.' });
		}

		const decoded = jwt.verify(token, process.env.SECRET_KEY!) as { userId: string };
		const user = await User.findById(decoded.userId).select('-password');
		if (!user) {
			return res.status(404).json({ message: 'User not found.' });
		}

		req.user = {
			...user.toObject(),
			_id: user._id.toString(),
		};
		next();
	} catch (error) {
		res.status(400).json({ message: 'Invalid token.' });
	}
};

export default authMiddleware;
