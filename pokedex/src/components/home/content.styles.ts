import { styled } from '@mui/material/styles';

export const ContentContainer = styled('div')`
	font-size: 2em;
	padding-top: 5rem;
	height: 100%;
	box-sizing: border-box;
`;

export const ContentTitle = styled('h1')`
	font-size: 1.2em;
	margin-bottom: 30px;
	@media (max-width: 600px) {
		font-size: 0.8em;
	}
`;

export const ContentImage = styled('img')`
	width: 500px;
	height: 500px;

	@media (max-width: 600px) {
		width: 350px;
		height: 350px;
	}
`;

export const ContentInfoText = styled('p')`
	font-size: 0.8em;
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`;

export const ContentAbilityList = styled('ul')`
	font-size: 0.8em;
	list-style-type: none;
	padding: 0;
	padding-bottom: 30px;
`;

export const ContentAbilityItem = styled('li')`
	font-size: 0.8em;
	padding-top: 30px;
`;
