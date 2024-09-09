import { styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';

export const HomeWrapper = styled(MuiBox)`
	background-image: url('./assets/newBarkTown.png');
	background-repeat: no-repeat;
	background-size: cover;
`;

export const HomeContainer = styled(MuiBox)<{ backgroundColors: string[] }>`
	display: flex;
	height: 100vh;
	background: ${({ backgroundColors }) =>
		`linear-gradient(to bottom right, ${backgroundColors[0]}, ${backgroundColors[1]})`};
	position: relative;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const HomeContentBox = styled(MuiBox)`
	flex-grow: 1;
	padding: 16px;
	color: white;
	z-index: 1;
	position: relative;
	width: 100%;

	@media (max-width: 600px) {
		width: calc(100% - 40px);
		margin: auto;
	}
`;

export const HamburgerIcon = styled(MuiBox)`
	display: none;
	position: absolute;
	top: 10px;
	right: 10px;
	color: white;
	z-index: 2;
	cursor: pointer;

	@media (max-width: 600px) {
		display: block;
	}
`;

export const HomeMenuContainer = styled(MuiBox)<{ menuOpen: boolean }>`
	display: flex;
	transition: transform 0.3s ease-in-out;
	transform: ${({ menuOpen }) => (menuOpen ? 'translateX(0)' : 'translateX(-100%)')};
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 300px;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 100;

	@media (min-width: 601px) {
		transform: none;
		position: relative;
		width: auto;
		background-color: transparent;
	}
`;
