import { styled, Box, Typography } from '@mui/material';
import { media } from '../common';

export const ContactContainer = styled(Box)(({ theme }) => ({
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	background: '#F5F5F7',
	...media.laptopLarge({
		height: '100%',
		padding: '100px 0',
	}),
	'& > div': {
		...media.laptopLarge({
			width: '90%',
			flexWrap: 'wrap',
		}),
		...media.mobileLarge({
			flexDirection: 'column',
		}),
	},
}));

export const ContactTitle = styled(Typography)(({ theme }) => ({
	marginBottom: '2rem',
	textAlign: 'center',
	fontWeight: 500,
	...media.mobileLarge({
		marginBottom: '7rem',
	}),
}));

export const ContactMapSection = styled(Box)(({ theme }) => ({
	flex: 1,
	height: '400px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	...media.mobileLarge({
		paddingBottom: '100px',
	}),
}));

export const ContactSectionImage = styled('img')({
	height: '12rem',
	objectFit: 'cover',
	display: 'block',
});
