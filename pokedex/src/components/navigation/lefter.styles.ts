import { styled } from '@mui/material/styles';
import { Box as MuiBox, Button as MuiButton } from '@mui/material';

export const LeftContainer = styled(MuiBox)`
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: end;
`;

export const LeftStyledButton = styled(MuiButton)`
	color: white;
	margin-bottom: 40px;

	&:hover {
		background-color: transparent;
	}
`;

export const LeftUpButton = styled(LeftStyledButton)`
	margin-bottom: 64px;
`;

export const LeftDownButton = styled(LeftStyledButton)`
	margin-bottom: 80px;
`;
