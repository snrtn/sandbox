import { createClient } from 'redis';

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
	throw new Error('REDIS_URL is not defined in environment variables');
}

const redisClient = createClient({
	url: redisUrl,
});

redisClient.on('error', (err: Error) => console.error('Redis Client Error', err));

const connectWithTimeout = (client: { connect: () => Promise<any> }, timeout: number | undefined) => {
	return new Promise<void>((resolve, reject) => {
		const timer = setTimeout(() => {
			reject(new Error('Redis connection timeout'));
		}, timeout);

		client
			.connect()
			.then(() => {
				clearTimeout(timer);
				resolve();
			})
			.catch((err: any) => {
				clearTimeout(timer);
				reject(err);
			});
	});
};

(async () => {
	try {
		await connectWithTimeout(redisClient, 5000);
		console.log('Redis connected');
	} catch (error) {
		console.error('Redis connection error', error);
	}
})();

export default redisClient;
