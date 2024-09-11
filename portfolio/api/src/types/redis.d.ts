declare module 'redis' {
	import { RedisClientType } from '@node-redis/client';

	export function createClient(options: { url: string }): RedisClientType;
}
