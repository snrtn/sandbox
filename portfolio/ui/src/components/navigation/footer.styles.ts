import { styled, Box } from '@mui/material';

export const FooterSnsSection = styled(Box)`
	border-radius: 10px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.13);
	display: flex;
	justify-content: center;
	gap: 1rem;
`;

export const FooterWrapper = styled(Box)({
	backgroundColor: '#1D1D1F',
	color: '#F9F9F9',
	height: '50vh',
	textAlign: 'center',

	width: '100%',
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
});
