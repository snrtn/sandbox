import { styled } from '@mui/material/styles';

export const AgentBotterContainer = styled('div')(({ theme }) => ({
	position: 'fixed',
	bottom: 0,
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	zIndex: 1000,
	justifyContent: 'space-between',
	background: theme.palette.black.main,
}));

export const AgentBotterSlider = styled('div')({
	display: 'flex',
	overflow: 'hidden',
	scrollBehavior: 'smooth',
	justifyContent: 'center',
	width: 'calc(100% - 100px)',
	padding: '10px 0',
});

export const NavButton = styled('button')<{ isDisabled: boolean }>(({ isDisabled, theme }) => ({
	backgroundColor: 'transparent',
	border: 'none',
	fontSize: '24px',
	cursor: isDisabled ? 'not-allowed' : 'pointer',
	padding: '0 10px',
	color: isDisabled ? theme.palette.grey[500] : 'white',
	'&.left': {
		margin: '0 10px',
	},
	'&.right': {
		margin: '0 10px',
	},
}));

export const TouchNavIcon = styled('div')(({ theme }) => ({
	fontSize: '36px',
	color: 'white',
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '0 10px',
}));

export const AgentItem = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	textAlign: 'center',
	width: '90%',
	padding: '5px',
	textDecoration: 'none',
	color: theme.palette.white.main,
	cursor: 'pointer',
	'&.active': {
		backgroundColor: theme.palette.red.main,
		borderRadius: '8px',
	},
	h2: {
		fontSize: '14px',
		margin: '5px 0 0 0',
	},
}));
