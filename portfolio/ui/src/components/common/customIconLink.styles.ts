import { styled } from '@mui/material/styles';
import { media } from '../common';

export const CustomIconLinkContainer = styled('div')<{ bgColor: string }>(({ bgColor }) => ({
	display: 'inline-block',
	border: '0.1rem solid #1D1D1F30',
	width: '55px',
	height: '55px',
	borderRadius: '50%',
	backgroundColor: '#fff',
	textAlign: 'center',
	lineHeight: '1.55em',
	fontSize: '2.4rem',
	margin: '0 10px',
	position: 'relative',
	overflow: 'hidden',
	cursor: 'pointer',
	...media.mobileLarge({
		width: '45px',
		height: '45px',
		lineHeight: '1.15em',
	}),
	'&:before': {
		content: '""',
		position: 'absolute',
		width: '100%',
		height: '0',
		bottom: '0',
		left: '0',
		transition: '0.5s',
		backgroundColor: bgColor,
	},
	'&:hover:before': {
		height: '100%',
	},
	'& .fa': {
		position: 'relative',
		transition: '0.5s',
		fontSize: '32px',
		color: '#000',
		...media.mobileLarge({
			fontSize: '25px',
		}),
	},
	'&:hover .fa': {
		transform: 'rotateY(360deg)',
		color: '#fff',
	},
}));
