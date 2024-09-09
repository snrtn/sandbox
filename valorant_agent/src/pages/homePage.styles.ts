import { styled, keyframes } from '@mui/material/styles';
import { Box } from '@mui/material';
const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
`;

const reverseScrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(33.333%); }
`;

export const StyledHomePageContainer = styled(Box)(({ theme }) => ({
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	alignItems: 'center',
	overflow: 'hidden',
	backgroundColor: theme.palette.primary.main,
	position: 'relative',
}));

export const ContainerWrapper = styled(Box)({
	width: '100%',
	overflow: 'hidden',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	opacity: 0.8,
	position: 'relative',
});

export const ImageContainer = styled(Box)({
	display: 'flex',
	whiteSpace: 'nowrap',
	animation: `${scrollAnimation} 200s linear infinite`,
});

export const ReverseImageContainer = styled(Box)({
	display: 'flex',
	whiteSpace: 'nowrap',
	animation: `${reverseScrollAnimation} 200s linear infinite`,
});

export const Image = styled('img')({
	width: '200px',
	height: 'auto',
	margin: '0 10px',
	opacity: 0.4,
});

export const CenterText = styled('button')`
	color: transparent;
	text-decoration: none;
	outline: none;
	border: none;
	z-index: 10;
	font-size: 8em;
	font-weight: 600;
	-webkit-text-stroke: 2px #fff;
	position: absolute;
	top: 40%;
	transition: 0.3s;
	background-color: transparent;
	cursor: pointer;
	&::before,
	&::after {
		content: attr(data-text);
		-webkit-text-stroke: 1px transparent;
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(0%, 0%);
		transition: 0.3s;
		opacity: 0;
	}

	&::before {
		color: #1d1d1f;
	}

	&::after {
		color: #fd4655;
	}

	&:hover {
		color: #fff;

		&::before {
			opacity: 1;
			transform: translate(10px, -10px);
		}

		&::after {
			opacity: 1;
			transform: translate(20px, -20px);
		}
	}
`;
