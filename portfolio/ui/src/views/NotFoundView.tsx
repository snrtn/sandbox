import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NotFoundContainer, NotFoundImage } from './notFoundView.styles';

const NotFoundView: React.FC = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<NotFoundContainer>
			<NotFoundImage src='./assets/notFound.svg' alt='Page not found' />
			<Typography variant='h4' component='h2' mt={2}>
				{t('notFound.title') as string}
			</Typography>
		</NotFoundContainer>
	);
};

export default NotFoundView;
