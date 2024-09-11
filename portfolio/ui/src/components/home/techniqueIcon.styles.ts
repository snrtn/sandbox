import { styled, Box, Typography } from '@mui/material';
import { media } from '../common';

export const TechniqueSectionContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
	width: '100%',
	padding: '50px 0',
	backgroundColor: '#F5F5F7',
	...media.laptopMedium({
		height: '90vh',
	}),
	...media.tabletLarge({
		height: '80vh',
		padding: '4rem 0',
	}),
	...media.mobileLarge({
		padding: '2rem 0',
		height: '90vh',
	}),
	...media.mobileSmall({
		height: '100vh',
	}),
}));

export const TechniqueInnerContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	width: '1350px',
	height: '100%',
	marginLeft: '-150px',
	...media.desktopMedium({
		width: '1200px',
		marginLeft: '-100px',
	}),
	...media.desktopSmall({
		width: '1100px',
		marginLeft: '-50px',
	}),
	...media.tabletLarge({
		flexDirection: 'column-reverse',
		marginLeft: '0px',
	}),
}));

export const TechniqueLeftContainer = styled(Box)(({ theme }) => ({
	width: '750px',
	position: 'relative',
	overflow: 'hidden',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	...media.tabletLarge({
		width: '100%',
		height: '100%',
	}),
	...media.tabletSmall({
		marginTop: '2rem',
	}),
	...media.mobileLarge({
		width: '100%',
		height: '50vh',
	}),
	...media.mobileSmall({
		width: '100%',
		height: '50vh',
		paddingBottom: '80px',
	}),
}));

export const TechniqueSlide = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100%',
	position: 'absolute',
	transition: 'opacity 0.5s ease-in-out',
	opacity: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	'&.active': {
		opacity: 1,
	},
	img: {
		width: '100%',
		height: '100%',
		...media.desktopLarge({
			width: '80%',
		}),
		...media.desktopMedium({
			height: '60vh',
		}),
		...media.laptopMedium({
			marginRight: '-2rem',
		}),
		...media.tabletLarge({
			marginRight: '0rem',
			width: '50%',
		}),
		...media.tabletMedium({
			marginRight: '0rem',
		}),
		...media.mobileLarge({
			width: '80%',
		}),
		...media.mobileSmall({
			width: '80%',
		}),
	},
}));

export const TechniqueRightContainer = styled(Box)(({ theme }) => ({
	width: '600px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '20px',
	marginLeft: '2rem',
	boxSizing: 'border-box',
	color: '#1D1D1F',
	...media.desktopSmall({
		marginLeft: '0rem',
		padding: '20px 0',
	}),
	...media.laptopMedium({
		padding: '0px 60px',
	}),
	...media.tabletLarge({
		width: '100%',
		height: '100%',
	}),
	...media.mobileLarge({
		height: '50vh',
		paddingTop: '80px',
	}),
	...media.mobileSmall({
		padding: '20px',
	}),
}));

export const TechniqueTitle = styled(Typography)(({ theme }) => ({
	fontSize: '2rem',
	marginBottom: '3rem',
	fontWeight: '500',
	...media.mobileLarge({
		fontSize: '1.5rem',
		marginBottom: '2rem',
	}),
}));

export const TechniqueIconsContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	gap: '13px',
	fontSize: '2rem',
	flexWrap: 'wrap',
	...media.mobileLarge({
		gap: '5px',
		fontSize: '1.5rem',
	}),
}));
