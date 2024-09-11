import { Dropbox } from 'dropbox';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN, fetch: fetch as any });

export const uploadToDropbox = async (filename: string, fileBuffer: Buffer): Promise<string> => {
	try {
		console.log('Uploading file to Dropbox:', filename);
		const response = await dbx.filesUpload({ path: `/${filename}`, contents: fileBuffer });
		console.log('File uploaded to Dropbox:', response.result.path_lower);

		const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({ path: response.result.path_lower! });
		console.log('Shared link created:', sharedLink.result.url);

		return sharedLink.result.url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error uploading to Dropbox:', error.message);
			throw new Error('Failed to upload image to Dropbox');
		} else {
			console.error('Unknown error uploading to Dropbox:', error);
			throw new Error('Failed to upload image to Dropbox');
		}
	}
};
