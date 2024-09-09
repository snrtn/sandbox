import React from 'react';
import { NotFoundContainer, NotFoundLink, NotFoundText } from './notFoundView.styles';

const NotFoundView: React.FC = () => {
	return (
		<NotFoundContainer>
			<NotFoundText variant='h1' gutterBottom>
				404
			</NotFoundText>
			<NotFoundText variant='h5' gutterBottom>
				Page Not Found
			</NotFoundText>
			<NotFoundText variant='body1'>The page you are looking for doesn't exist or an error occurred.</NotFoundText>
			<NotFoundLink to='/'>Go back to Home</NotFoundLink>
		</NotFoundContainer>
	);
};

export default NotFoundView;
