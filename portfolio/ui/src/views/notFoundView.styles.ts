import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const NotFoundContainer = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	text-align: center;
	max-height: 90vh;
`;

export const NotFoundImage = styled('img')`
	max-width: 100%;
	height: auto;
`;
