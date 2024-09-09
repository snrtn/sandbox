import { styled, keyframes } from '@mui/material/styles';
import { Box, Tabs, Tab, IconButton } from '@mui/material';

export const StyledBox = styled(Box)({
	display: 'flex',
	padding: '10px',
});

export const DrawerContainer = styled(Box)({
	width: '100%',
	padding: '10px',
});

export const StyledTabs = styled(Tabs)({
	width: '20vh',
	display: 'flex',
	flexDirection: 'column',
	'& .MuiTabs-indicator': {
		display: 'none',
	},
});

export const StyledTab = styled(Tab)(({ theme }) => ({
	minHeight: '10vh',
	color: theme.palette.white.main,
	'&.Mui-selected': {
		backgroundColor: theme.palette.red.main,
		color: theme.palette.white.main,
		borderRadius: '8px',
	},
}));

const arrowAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const AnimatedIconButton = styled(IconButton)(({ theme }) => ({
	position: 'fixed',
	top: '50%',
	right: 0,
	zIndex: 1100,
	transform: 'translateY(-50%)',
	animation: `${arrowAnimation} 1s infinite ease-in-out`,
	color: theme.palette.white.main,
	opacity: 0.6,
	fontSize: '3rem',
}));
