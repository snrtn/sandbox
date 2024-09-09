import axios from 'axios';

const fetchAgent = async (endpoint: string) => {
	const response = await axios.get(`https://valorant-api.com/v1/${endpoint}`);
	return response.data.data;
};

export default fetchAgent;
