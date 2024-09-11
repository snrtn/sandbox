/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { RiArrowLeftLine } from 'react-icons/ri';
import { useNavigate, useLocation } from 'react-router-dom';
import {
	BlogPageOverlayContainer,
	BlogPageBackButtonContainer,
	BlogPageContentContainer,
	BlogPageImageContainer,
} from './blogPageView.styles';
import { LocationState } from '../interfaces'; // Adjust import path if necessary

const BlogPageView: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const state = location.state as LocationState; // Type assertion here
	const post = state?.post;

	if (!post) {
		navigate('/notfound');
		return null;
	}

	const { title, tags, image, content } = post;

	return (
		<BlogPageOverlayContainer>
			<BlogPageBackButtonContainer>
				<IconButton onClick={() => navigate(-1)} color='inherit'>
					<RiArrowLeftLine size={24} />
				</IconButton>
			</BlogPageBackButtonContainer>
			<BlogPageContentContainer>
				<Typography variant='body1' gutterBottom>
					{tags.join(', ')}
				</Typography>
				<Typography variant='h4' component='h1' gutterBottom>
					{title}
				</Typography>
				<Typography variant='body1' gutterBottom dangerouslySetInnerHTML={{ __html: content }} />
				<BlogPageImageContainer>
					<img src={image} alt={title} style={{ maxWidth: '100%', maxHeight: '400px' }} />
				</BlogPageImageContainer>
			</BlogPageContentContainer>
		</BlogPageOverlayContainer>
	);
};

export default BlogPageView;
