import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
	height: '7rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	boxShadow: 'none',
	background: theme.palette.black.main,
	backdropFilter: 'blur(5px)',
	webkitBackdropFilter: 'blur(5px)',
}));

export default CustomAppBar;
