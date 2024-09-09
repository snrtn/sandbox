import React from 'react';
import { styled, Container, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import theme from '../theme';

const CenteredContainer = styled(Container)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '80vh',
	textAlign: 'center',
});

const NotFoundPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<CenteredContainer>
			<Typography variant='h1' component='h1' style={{ color: theme.palette.red.main }}>
				404
			</Typography>
			<Typography variant='h4' component='h2'>
				Page Not Found
			</Typography>
			<Typography variant='body1' component='p'>
				The page you are looking for does not exist or has been moved to a different URL.
			</Typography>
			<Link to='/' style={{ textDecoration: 'none', marginTop: '20px' }}>
				<Button variant='contained' color='primary'>
					Go to Home
				</Button>
			</Link>
			<Button variant='outlined' onClick={() => navigate(-1)} style={{ marginTop: '10px' }}>
				Go Back
			</Button>
		</CenteredContainer>
	);
};

export default NotFoundPage;
