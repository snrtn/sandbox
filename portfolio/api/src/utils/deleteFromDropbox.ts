import { Dropbox } from 'dropbox';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN, fetch: fetch as any });

export const deleteFromDropbox = async (path: string): Promise<void> => {
	try {
		const cleanedPath = decodeURIComponent(path.split('?')[0]);
		console.log('Deleting file from Dropbox:', cleanedPath);
		await dbx.filesDeleteV2({ path: cleanedPath });
		console.log('File deleted from Dropbox:', cleanedPath);
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error deleting from Dropbox:', error.message);
			throw new Error('Failed to delete image from Dropbox');
		} else {
			console.error('Unknown error deleting from Dropbox:', error);
			throw new Error('Failed to delete image from Dropbox');
		}
	}
};
