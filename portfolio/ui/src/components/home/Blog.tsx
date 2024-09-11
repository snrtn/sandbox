import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BlogContainer, BlogHeader, BlogMoreButton, BlogContent } from './blog.styles';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useBlog } from '../../hooks';
import BlogCard from '../blog/BlogCard';
import { Post } from '../../interfaces';

const Blog: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { posts, fetchPosts, status, error } = useBlog();

	useEffect(() => {
		fetchPosts.refetch();
	}, [fetchPosts]);

	const handleCardClick = (post: Post) => {
		navigate(`/blog/${post._id}`, { state: { post } });
	};

	if (status === 'loading') {
		return <Typography>Loading...</Typography>;
	}

	if (status === 'failed') {
		return <Typography color='error'>{error}</Typography>;
	}

	return (
		<BlogContainer>
			<BlogHeader>
				<div>
					<Typography variant='h5' sx={{ fontWeight: 500 }}>
						{t('home.blog.title') as string}
					</Typography>
					<Typography variant='body2'>{t('home.blog.description') as string}</Typography>
				</div>
				<Link to='blog'>
					<BlogMoreButton variant='outlined' endIcon={<RiArrowRightSLine />}>
						{t('home.blog.button') as string}
					</BlogMoreButton>
				</Link>
			</BlogHeader>
			<BlogContent>
				{posts.map((post, index) => (
					<BlogCard
						key={index}
						title={post.title}
						imgSrc={post.image}
						tags={post.tags}
						onClick={() => handleCardClick(post)}
					/>
				))}
			</BlogContent>
		</BlogContainer>
	);
};

export default Blog;
