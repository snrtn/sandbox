import styled, { keyframes } from 'styled-components';
import { Box, Button, Typography, TextField } from '@mui/material';

export const ContactOuterContainer = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
`;

export const ContactFormContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3rem;
	box-sizing: border-box;
	height: 600px;
	width: 450px;
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;

export const ContactTextField = styled(TextField)`
	margin-bottom: 1rem !important;
	width: 100%;
`;

export const ContactButton = styled(Button)`
	color: #000 !important;
	margin-top: 1rem !important;
`;

export const ContactTitle = styled(Typography)`
	margin-bottom: 2rem !important;
	text-align: center;
`;

export const ContactLoaderContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 90vh;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ContactSpinner = styled.div`
	border: 8px solid #f3f3f3;
	border-top: 8px solid #4caf50;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	animation: ${spin} 2s linear infinite;
`;

export const ContactStyledImage = styled.img`
	width: 100%;
	height: 90vh;
`;
