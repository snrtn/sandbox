import { styled, TextField, Box, Button, Typography, Container } from '@mui/material';
import { media } from '../components';

export const AuthFormContainer = styled(Container)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '90vh',
	backgroundColor: theme.palette.background.default,
}));

export const AuthWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: theme.palette.background.default,
	height: '600px',
	width: '450px',
	borderRadius: '8px',
	boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
	padding: '3rem',
	boxSizing: 'border-box',
	...media.mobileLarge({
		padding: '0px 5.5rem',
	}),
}));

export const AuthTextField = styled(TextField)(({ theme }) => ({
	marginBottom: theme.spacing(2),
	width: '100%',
}));

export const AuthButton = styled(Button)(({ theme }) => ({
	marginTop: theme.spacing(2),
	width: '100%',
	padding: theme.spacing(1.5),
	color: 'black',
}));

export const AuthTitle = styled(Typography)(({ theme }) => ({
	marginBottom: theme.spacing(4),
	fontWeight: 'bold',
}));
