import axios from 'axios';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const fetchVideo = async (query: string): Promise<string | null> => {
	try {
		console.log('Fetching video for query:', query);
		const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
			params: {
				part: 'snippet',
				q: query,
				type: 'video',
				key: YOUTUBE_API_KEY,
				maxResults: 1,
			},
		});

		console.log('API Response:', response.data);

		if (response.data.items && response.data.items.length > 0) {
			console.log('Video found:', response.data.items[0].id.videoId);
			return response.data.items[0].id.videoId;
		} else {
			console.log('No video found for query:', query);
			return null;
		}
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status !== 403) {
				console.error('Axios error fetching video:', error.message, error.response?.data);
			}
		} else {
			console.error('Error fetching video:', error.message);
		}
		return null;
	}
};

export default fetchVideo;
