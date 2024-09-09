import { styled } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';

export const SliderContainer = styled('div')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '90vh',
	overflow: 'hidden',
	background: '#181818',
	[theme.breakpoints.down('sm')]: {},
}));

export const SliderWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	width: '100%',
	height: '100%',
	transition: 'transform 0.5s ease',
	position: 'absolute',
	right: '-10%',
	top: '-15%',
	[theme.breakpoints.down('sm')]: {
		right: '0',
		top: '0',
	},
}));

export const Slide = styled('div')(({ theme }) => ({
	minWidth: '100%',
	boxSizing: 'border-box',
	img: {
		width: '100%',
		height: '200%',
		objectFit: 'cover !important',
		[theme.breakpoints.down('sm')]: {
			height: '100%',
		},
	},
}));

export const TextOverlay = styled('div')(({ theme }) => ({
	position: 'absolute',
	top: '40%',
	left: '15%',
	color: 'white',
	textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
	h1: {
		fontSize: '3rem',
		margin: '0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		},
	},
	h2: {
		fontSize: '2rem',
		margin: '10px 0 0 0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		},
	},
	p: {
		fontSize: '1rem',
		margin: '10px 0 0 0',
		maxWidth: '400px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.875rem',
		},
	},
	button: {
		marginTop: '20px',
		padding: '10px 20px',
		fontSize: '1rem',
		backgroundColor: '#fd4655',
		border: 'none',
		cursor: 'pointer',
		color: 'white',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.875rem',
			padding: '8px 16px',
		},
	},

	[theme.breakpoints.down('sm')]: {
		left: '5%',
		paddingRight: '15px',
	},
}));

export const NavButton = styled('button')<{ left?: boolean }>(({ theme, left }) => ({
	backgroundColor: 'transparent !important',
	border: 'none',
	fontSize: '2rem',
	cursor: 'pointer',
	zIndex: 1,
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.5rem',
	},
}));

export const PauseButton = styled('button')(({ theme }) => ({
	zIndex: 1,
	backgroundColor: 'transparent !important',
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.5rem',
	},
}));

export const ProgressBarContainer = styled(Box)(({ theme }) => ({
	position: 'absolute',
	display: 'flex',
	justifyContent: 'center',
	marginTop: '3rem',
	gap: '5px',
	[theme.breakpoints.down('sm')]: {
		marginTop: '2rem',
	},
}));

export const TooltipContent = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	img: {
		width: '40px',
		height: '40px',
		marginRight: '10px',
		[theme.breakpoints.down('sm')]: {
			width: '30px',
			height: '30px',
		},
	},
}));

export const ProgressBar = styled(LinearProgress)(({ theme }) => ({
	width: '15px',
	height: '8px',
	cursor: 'pointer',
	'& .MuiLinearProgress-bar': {
		backgroundColor: '#fd4655',
	},
	'&.MuiLinearProgress-root': {
		backgroundColor: '#333',
	},

	[theme.breakpoints.down('sm')]: {
		width: '8px',
	},
}));
