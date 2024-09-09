import { GlobalStyles } from '@mui/material';

const globalStyles = {
	html: {
		fontSize: '62.5%',
		// 1rem = 10px
		// 128px = 12.8rem, 4px = 0.4rem
	},
	'h1, h2, h3, h4, h5, h6': {
		fontFamily: "'Bebas Neue', sans-serif !important",
	},
	body: {
		paddingTop: '70px',
		margin: '0%',
		fontFamily: "'Open Sans', sans-serif !important",
	},
};

const NormalizeStyles = () => <GlobalStyles styles={globalStyles} />;
export default NormalizeStyles;
