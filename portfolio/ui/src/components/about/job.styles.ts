import { styled, Box, Button } from '@mui/material';
import { media } from '../common';

interface SectionProps {
	background: string;
}

export const JobSection = styled(Box)<SectionProps>(({ background }) => ({
	width: '100%',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
	background: `${background}`,
	color: 'white',
	textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
	transition: 'transform 0.5s ease-in-out',
	zIndex: 0,
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		zIndex: -1,
	},
	'& div': {
		width: '50%',
		padding: '10rem',
		boxSizing: 'border-box',
		textAlign: 'left',
		...media.laptopLarge({
			padding: '0rem',
		}),
		...media.mobileLarge({
			width: '100%',
			paddingRight: '50px',
			paddingLeft: '15px',
		}),
	},
}));

export const JobController = styled(Box)({
	position: 'fixed',
	right: '20px',
	top: '50%',
	transform: 'translateY(-50%)',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '10px',
	color: 'white',
});

export const JobIconButton = styled(Button)({
	minWidth: '40px',
	minHeight: '40px',
	borderRadius: '50%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: 0,
	color: 'white',
	fontSize: '40px',
});
