import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Paper, ListItem, IconButton, Dialog } from '@mui/material';

export const NavLink = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
	color: 'inherit',
	margin: '0 10px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	[theme.breakpoints.down('sm')]: {
		margin: '0 5px',
	},
}));

export const Logo = styled('img')(({ theme }) => ({
	height: '30px',
	marginRight: '20px',
	[theme.breakpoints.down('sm')]: {
		height: '20px',
		marginRight: '10px',
	},
}));

export const SearchBox = styled(Box)(({ theme }) => ({
	position: 'relative',
	display: 'inline-block',
	marginLeft: 'auto',
	[theme.breakpoints.down('sm')]: {
		marginLeft: '5px',
	},
}));

export const Dropdown = styled(Paper)(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	zIndex: 1000,
	maxHeight: '100%',
	overflowY: 'auto',
	backgroundColor: theme.palette.drak.main,
	color: theme.palette.white.main,
}));

export const FullScreenSearchContainer = styled(Dialog)(({ theme }) => ({
	color: `${theme.palette.white.main} !important`,
	'& .MuiPaper-root': {
		backgroundColor: theme.palette.drak.main,
		position: 'relative',
	},
}));

export const ListItemStyled = styled(ListItem)(({ theme }) => ({
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: theme.palette.red.main,
	},
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
	position: 'absolute',
	top: 10,
	color: theme.palette.white.main,
	right: 10,
	zIndex: 1,
}));
