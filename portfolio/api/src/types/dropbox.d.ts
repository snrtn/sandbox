import { Dropbox } from 'dropbox';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN, fetch: fetch as any });

export const uploadToDropbox = async (filename: string, fileBuffer: Buffer): Promise<string> => {
	try {
		console.log(`Uploading file to Dropbox: ${filename}`);
		const response = await dbx.filesUpload({ path: `/${filename}`, contents: fileBuffer });
		const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({ path: response.result.path_lower! });
		return sharedLink.result.url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error uploading to Dropbox:', error.message);
			throw new Error(`Failed to upload image to Dropbox: ${error.message}`);
		} else {
			console.error('Unknown error uploading to Dropbox:', error);
			throw new Error('Failed to upload image to Dropbox');
		}
	}
};

export const deleteFromDropbox = async (path: string): Promise<void> => {
	try {
		await dbx.filesDeleteV2({ path });
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error deleting from Dropbox:', error.message);
			throw new Error(`Failed to delete image from Dropbox: ${error.message}`);
		} else {
			console.error('Unknown error deleting from Dropbox:', error);
			throw new Error('Failed to delete image from Dropbox');
		}
	}
};

export const validateToken = async (): Promise<void> => {
	try {
		const response = await dbx.usersGetCurrentAccount();
		console.log('Dropbox token is valid for user:', response.result.email);
	} catch (error) {
		if (error instanceof Error) {
			console.error('Dropbox token validation failed:', error.message);
		} else {
			console.error('Unknown error during Dropbox token validation:', error);
		}
	}
};
