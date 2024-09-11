import { Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../../models/user';
import { IUser } from '../../interfaces/iUser';
import validatePassword from '../../utils/validatePassword';
import { AuthenticatedRequest } from '../../interfaces/authenticatedRequest';

export const signup = async (req: AuthenticatedRequest, res: Response) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).json({ message: 'Username and password are required.' });
	}

	if (!validatePassword(password)) {
		return res.status(400).json({
			message:
				'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
		});
	}

	try {
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ message: 'Username is already taken.' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const user: IUser = new User({ username, password: hashedPassword });
		await user.save();
		res.status(201).json({ message: 'User created successfully.' });
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};
