import { styled, Box } from '@mui/material';
import { media } from '../components';

export const BlogContainer = styled(Box)({
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundSize: 'cover',
	justifyContent: 'space-between',
	...media.desktopLarge({
		height: '100vh',
	}),
	...media.laptopLarge({
		height: '100%',
		padding: '0px 50px 20px 50px',
	}),
});

export const BlogContentContainer = styled(Box)({
	flexGrow: 1,
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	...media.laptopSmall({
		height: '100%',
	}),
});
