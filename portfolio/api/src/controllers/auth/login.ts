import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../../models/user';
import { generateAccessToken, generateRefreshToken } from '../../utils/generateToken';
import redisClient from '../../config/redis';

export const login = async (req: Request, res: Response) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).json({ message: 'Username and password are required.' });
	}

	try {
		console.log(`Attempting to log in user: ${username}`);
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: 'Invalid credentials' });
		}

		const accessToken = generateAccessToken(user._id.toString());
		const refreshToken = generateRefreshToken(user._id.toString());

		await redisClient.set(`accessToken:${user._id.toString()}`, accessToken, { EX: 3600 });
		await redisClient.set(`refreshToken:${user._id.toString()}`, refreshToken, { EX: 7 * 24 * 60 * 60 });

		res.cookie('accessToken', accessToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'none',
			maxAge: 3600000,
		});

		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'none',
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		res.json({ message: 'Login successful', accessToken, refreshToken });
	} catch (error) {
		console.error('Server Error:', error);
		res.status(500).json({ message: 'Server Error' });
	}
};
