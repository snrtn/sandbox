import { styled, keyframes } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import theme from '../theme';

const loadingAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

export const StyledLoadingContainer = styled(Box)(({ theme }) => ({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: theme.palette.primary.main,
	zIndex: 1000,
	overflow: 'hidden',
	color: '#fff',
}));

export const LoadingText = styled(Typography)({
	fontSize: '2rem',
	marginBottom: '20px',
});

export const ProgressBarContainer = styled(Box)(({ theme }) => ({
	width: '80%',
	height: '30px',
	backgroundColor: '#000',
	border: `2px solid ${theme.palette.red.main}`,
	borderRadius: '5px',
	overflow: 'hidden',
}));

export const ProgressBar = styled(Box)(({ theme }) => ({
	height: '100%',
	backgroundColor: theme.palette.red.main,
	animation: `${loadingAnimation} 3s infinite`,
}));
