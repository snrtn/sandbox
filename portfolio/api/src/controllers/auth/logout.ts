import { Response } from 'express';
import redisClient from '../../config/redis';
import { AuthenticatedRequest } from '../../interfaces/authenticatedRequest';

export const logout = async (req: AuthenticatedRequest, res: Response) => {
	const refreshToken = req.cookies.refreshToken;
	const accessToken = req.cookies.accessToken;

	if (!refreshToken || !accessToken) {
		return res.status(400).json({ message: 'No tokens provided' });
	}

	try {
		await redisClient.del(`accessToken:${req.user?._id}`);
		await redisClient.del(`refreshToken:${req.user?._id}`);

		await redisClient.set(`blacklist:${refreshToken}`, 'blacklisted', { EX: 3600 });
		await redisClient.set(`blacklist:${accessToken}`, 'blacklisted', { EX: 3600 });

		res.clearCookie('refreshToken', {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'none',
		});

		res.clearCookie('accessToken', {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'none',
		});

		res.status(200).json({ message: 'Logged out' });
	} catch (error) {
		console.error('Server error during logout:', error);
		res.status(500).json({ message: 'Server error' });
	}
};
