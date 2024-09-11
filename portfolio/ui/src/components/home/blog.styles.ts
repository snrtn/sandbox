import { styled, Box, Button } from '@mui/material';
import { media } from '../common';

export const BlogContainer = styled(Box)(({ theme }) => ({
	padding: theme.spacing(4),
	maxWidth: '1200px',
	margin: '0 auto',
	height: '100vh',
	width: '80%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	...media.desktopMedium({
		padding: '100px 20px',
	}),
	...media.mobileLarge({
		height: '100%',
		fontSize: '1rem !important',
	}),
}));

export const BlogHeader = styled(Box)(({ theme }) => ({
	display: 'flex',
	width: '100%',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	marginBottom: theme.spacing(4),
}));

export const BlogMoreButton = styled(Button)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	textTransform: 'none',
	border: '1px solid transparent',
	color: '#1D1D1F',
	'&:hover': {
		border: '1px solid transparent',
	},
}));

export const BlogContent = styled(Box)(({ theme }) => ({
	display: 'grid',
	width: '100%',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gap: theme.spacing(2),
	[theme.breakpoints.down('md')]: {
		gridTemplateColumns: 'repeat(3, 1fr)',
	},
	[theme.breakpoints.down('sm')]: {
		gridTemplateColumns: 'repeat(1, 1fr)',
	},
}));

export const BlogCard = styled(Box)(({ theme }) => ({
	backgroundColor: '#fff',
	borderRadius: theme.shape.borderRadius,
	cursor: 'pointer',
	transition: 'transform 0.3s, filter 0.3s',
	transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
	filter: 'brightness(1) contrast(1)',
	position: 'relative',
	overflow: 'hidden',
	height: '18rem',
	display: 'flex',
	flexDirection: 'column',
	'& img': {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		marginBottom: theme.spacing(2),
	},
	'& > div': {
		padding: '10px 20px 0px 20px',
		...media.mobileLarge({
			padding: '10px',
		}),
	},

	'& h6': {
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		...media.mobileLarge({
			fontSize: '1rem !important',
		}),
	},

	'&:before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1))',
		mixBlendMode: 'overlay',
		transition: 'opacity 0.3s',
		opacity: 0,
	},
	'&:hover': {
		filter: 'brightness(1.1) contrast(1.1)',
		boxShadow: theme.shadows[6],
		'&:before': {
			opacity: 1,
		},
	},
}));

export const BlogTags = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.spacing(1),
	marginTop: theme.spacing(1),
}));

export const BlogTag = styled(Box)(({ theme }) => ({
	backgroundColor: 'orange',
	color: theme.palette.primary.contrastText,
	borderRadius: theme.shape.borderRadius,
	padding: theme.spacing(0.5, 1),
	fontSize: '0.875rem',
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
}));
