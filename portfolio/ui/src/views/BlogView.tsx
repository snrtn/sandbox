import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination, Typography } from '@mui/material';
import { BlogContainer, BlogContentContainer } from './blogView.styles';
import { BlogCard, BlogLayout } from '../components';
import { useBlog } from '../hooks';
import { Post } from '../interfaces';

const BlogView: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 8;
	const navigate = useNavigate();
	const { posts, fetchPosts, status, error } = useBlog();

	useEffect(() => {
		fetchPosts.refetch();
	}, [fetchPosts]);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value);
	};

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
			<BlogContentContainer>
				<BlogLayout>
					{currentPosts.map((post, index) => (
						<BlogCard
							key={index}
							title={post.title}
							imgSrc={post.image}
							tags={post.tags}
							onClick={() => handleCardClick(post)}
						/>
					))}
				</BlogLayout>
			</BlogContentContainer>
			<Pagination
				count={Math.ceil(posts.length / postsPerPage)}
				page={currentPage}
				onChange={handlePageChange}
				sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
			/>
		</BlogContainer>
	);
};

export default BlogView;
