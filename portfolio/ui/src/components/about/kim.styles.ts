import { styled, Box } from '@mui/material';
import { media } from '../common';

interface SectionProps {
	backgroundColor: string;
	index: number;
	language: string;
}

interface SectionContentProps {
	visible: boolean;
}

interface SectionSVGProps {
	visible: boolean;
}

interface KimScrollContainerProps {
	scrollEnabled: string;
}

export const KimScrollContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'scrollEnabled',
})<KimScrollContainerProps>(({ scrollEnabled }) => ({
	width: '100%',
	height: scrollEnabled ? '100vh' : '100%',
	overflowY: scrollEnabled ? 'scroll' : 'hidden',
	position: 'relative',
	overflowStyle: 'none',
	scrollbarWidth: 'none',
	boxSizing: 'border-box',
}));

export const KimSection = styled(Box)<SectionProps>(({ backgroundColor, index, language }) => ({
	width: '100%',
	height: '90vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'start',
	paddingTop: '200px',
	boxSizing: 'border-box',
	backgroundColor,
	position: 'relative',
	overflow: 'hidden',
	color: 'white',
	...media.desktopMedium({
		paddingTop: '140px',
		height: '100vh',
	}),
	...media.laptopLarge({
		paddingTop: '100px',
		height: '90vh',
	}),
	...media.laptopMedium({
		paddingTop: '150px',
	}),
	...media.tabletLarge({
		paddingTop: '180px',
		height: '85vh',
	}),
	...media.mobileLarge({
		paddingTop: '100px',
		height: '120vh',
	}),
}));

export const KimSectionContent = styled('div')<SectionContentProps>(({ visible }) => ({
	opacity: visible ? 1 : 0,
	transition: 'opacity 0.5s ease-in-out',
	zIndex: 1,
	textAlign: 'center',
	padding: '0 30rem',
	boxSizing: 'border-box',
	...media.desktopSmall({
		padding: '0 20rem',
	}),
	...media.laptopLarge({
		padding: '0 10rem',
	}),
	...media.mobileLarge({
		textAlign: 'left',
		padding: '0 2rem',
	}),
}));

export const KimSectionSVG = styled('img')<SectionSVGProps>(({ visible }) => ({
	width: '350px',
	height: '350px',
	position: 'absolute',
	right: visible ? '50%' : '-150px',
	transform: 'translateX(50%)',
	transition: 'right 0.5s ease-in-out',
	display: 'block',
}));
