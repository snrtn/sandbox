import { Post } from '../index';

export const formatDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};

export const paginatePosts = (posts: Post[], page: number, postsPerPage: number): Post[] => {
	const startIndex = (page - 1) * postsPerPage;
	const endIndex = startIndex + postsPerPage;
	return posts.slice(startIndex, endIndex);
};

export const summarizeContent = (content: string, maxLength: number): string => {
	if (content.length <= maxLength) {
		return content;
	}
	return content.slice(0, maxLength) + '...';
};
