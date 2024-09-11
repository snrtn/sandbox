import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(process.env.MONGODB_URI!, {
			dbName: 'portfolio',
		} as mongoose.ConnectOptions);
	} catch (error) {
		let errorMessage = 'Failed';
		if (error instanceof Error) {
			errorMessage = error.message;
		}
		console.error(`Error: ${errorMessage}`);
		process.exit(1);
	}
};

export default connectDB;
