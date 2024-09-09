import { styled, Box as MuiBox, TextField as MuiTextField } from '@mui/material';

export const HeadContainer = styled(MuiBox)`
	width: 100%;
	height: 5rem;
	position: fixed;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;
`;

export const HeadSearchBox = styled(MuiBox)`
	width: 100%;
	max-width: 600px;
	position: relative;
	padding: 0 20px;
`;

export const HeadDropdown = styled(MuiBox)`
	position: absolute;
	width: 100%;
	background-color: white;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	margin-top: 8px;
	z-index: 1000;
`;

export const HeadHamburgerIcon = styled(MuiBox)`
	display: none;
	color: white;
	z-index: 2;
	cursor: pointer;

	@media (max-width: 600px) {
		display: block;
	}
`;

export const HeadSearchInput = styled(MuiTextField)`
	width: 100%;

	& .MuiInputBase-input::placeholder {
		color: transparent;
	}
	& .MuiInputBase-input:focus::placeholder {
		color: white;
	}
`;
