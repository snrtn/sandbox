import { Box, styled } from '@mui/material';

export const AgentContainer = styled(Box)(({ theme }) => ({
	background: theme.palette.primary.main,
	width: '100vw',
	maxWidth: '100%',
}));
