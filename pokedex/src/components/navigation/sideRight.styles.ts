import { styled } from '@mui/material/styles';
import { Box as MuiBox, Button as MuiButton } from '@mui/material';

export const SideRightContainer = styled(MuiBox)`
	width: 200px;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	justify-content: center;

	@media (max-width: 600px) {
		width: 100%;
		height: 5rem;
		flex-direction: row;
		justify-content: space-around;
	}
`;

export const SideRightButton = styled(MuiButton)<{ selectedMenu: boolean; backgroundColor: string }>`
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	color: white;
	background-color: ${(props) => (props.selectedMenu ? props.backgroundColor : 'transparent')};
	width: 100%;
	height: calc(100vh / 3);
	position: relative;
	border: 1px solid transparent;

	&:hover {
		background-color: ${(props) => props.backgroundColor};
		border-color: lightgrey;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 600px) {
		width: calc(100% / 3);
		height: 100%;
		font-size: 0.6em;
		writing-mode: horizontal-tb;
		transform: rotate(0);
	}
`;
