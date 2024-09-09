import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled(Box)`
	text-align: center;
	margin-top: 5rem;
`;

export const NotFoundText = styled(Typography)`
	margin-bottom: 1rem;
`;

export const NotFoundLink = styled(Link)`
	color: blue;
	text-decoration: none;
	font-weight: bold;
	margin-top: 3rem;
	display: block;

	&:hover {
		text-decoration: underline;
	}
`;
