import jwt from 'jsonwebtoken';

const { SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

if (!SECRET_KEY) {
	throw new Error('SECRET_KEY is not defined in environment variables');
}

if (!REFRESH_SECRET_KEY) {
	throw new Error('REFRESH_SECRET_KEY is not defined in environment variables');
}

const generateAccessToken = (userId: string): string => {
	const payload = { userId };
	const options = {
		expiresIn: process.env.TOKEN_EXPIRATION || '1h',
	};

	try {
		return jwt.sign(payload, SECRET_KEY, options);
	} catch (error) {
		throw new Error('Error generating access token');
	}
};

const generateRefreshToken = (userId: string): string => {
	const payload = { userId };
	const options = {
		expiresIn: '7d',
	};

	try {
		return jwt.sign(payload, REFRESH_SECRET_KEY, options);
	} catch (error) {
		throw new Error('Error generating refresh token');
	}
};

export { generateAccessToken, generateRefreshToken };
