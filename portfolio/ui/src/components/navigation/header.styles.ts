import styled from 'styled-components';
import { AppBar, Toolbar, Typography, ListItem, ListItemText, Drawer } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';
import { media } from '../common';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled(AppBar)(({ theme }) => ({
	backgroundColor: '#1D1D1F !important',
	boxSizing: 'border-box',
	...media.mobileLarge({
		padding: '0 20px',
	}),
}));

export const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	maxWidth: '1200px',
	width: '100%',
	margin: '0 auto',
	boxSizing: 'border-box',
}));

export const HeaderLogoWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
}));

export const HeaderLogoImage = styled('img')(({ theme }) => ({
	width: '100px',
	height: '100px',
	display: 'block',
}));

export const HeaderLogoText = styled(Typography)(({ theme }) => ({
	fontWeight: 400,
	fontFamily: '"Great Vibes", cursive !important',
	fontStyle: 'normal',
	color: '#F5F5F7',
	cursor: 'pointer',
}));

export const HeaderNav = styled('nav')(({ theme }) => ({
	ul: {
		display: 'flex',
		listStyle: 'none',
		padding: 0,
		margin: 0,
		li: {
			marginRight: '20px',
			position: 'relative',
			a: {
				color: '#F5F5F7',
				textDecoration: 'none',
				'&:hover': {
					textDecoration: 'underline',
				},
			},
		},
	},
	...media.mobileLarge({
		display: 'none',
	}),
}));

export const HeaderDropdownMenu = styled('ul')(({ theme }) => ({
	position: 'fixed',
	top: '50px',
	left: 0,
	width: '100vw',
	height: '20vh',
	backgroundColor: '#1D1D1F',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	listStyle: 'none',
	padding: 0,
	margin: 0,
	overflowY: 'auto',
	li: {
		padding: '10px 20px',
		a: {
			color: '#F5F5F7',
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
	},
	zIndex: 999,
}));

export const HeaderOverlay = styled.div(({ theme }) => ({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100vw',
	height: '100vh',
}));

export const HeaderLanguageSwitcher = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	'.MuiInputBase-root': {
		color: '#F5F5F7',
		'&:hover': {
			backgroundColor: 'transparent',
		},
		'&::before, &::after': {
			borderBottom: 'none !important',
		},
	},
	'.MuiSvgIcon-root': {
		color: '#F5F5F7',
	},
	'.MuiSelect-select': {
		padding: '8px 24px 8px 8px',
	},
	'.MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},
}));

export const HeaderStyledReactCountryFlag = styled(ReactCountryFlag)`
	width: 1.4rem !important;
	height: 1.4rem !important;
`;

export const HeaderHamburgerMenu = styled('div')(({ theme }) => ({
	display: 'none',
	...media.mobileLarge({
		display: 'block',
	}),
}));

export const HeaderSidebar = styled('div')(({ theme }) => ({
	width: 250,
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '20px 0 ',
}));

export const HeaderStyledDrawer = styled(Drawer)(({ theme }) => ({
	'.MuiPaper-root': {
		backgroundColor: '#1D1D1F',
		color: '#F5F5F7',
	},
}));

export const HeaderStyledListItem = styled(ListItem)(({ theme }) => ({
	color: '#F5F5F7',
	'.MuiListItemText-root': {
		marginTop: '20px',
	},
}));

export const HeaderStyledListItemText = styled(ListItemText)(({ theme }) => ({
	textAlign: 'center',
}));

export const HeaderCustomLink = styled(Link)(({ theme }) => ({
	position: 'relative',
	zIndex: 1,
	color: '#F5F5F7',
	padding: '4px 6px',
	textDecoration: 'none !important',
	'&::before': {
		content: '""',
		position: 'absolute',
		zIndex: -1,
		top: 0,
		bottom: 0,
		left: '-0.25em',
		right: '-0.25em',
		backgroundColor: '#F5F5F7',
		transformOrigin: 'center right',
		transform: 'scaleX(0)',
		transition: 'transform 0.2s ease-in-out',
		borderRadius: '0.2rem',
	},
	'&:hover': {
		color: '#1D1D1F',
	},
	'&:hover::before': {
		transform: 'scaleX(1)',
		transformOrigin: 'center left',
	},
}));
