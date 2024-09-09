// theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		black: Palette['primary'];
		white: Palette['primary'];
		red: Palette['primary'];
		drak: Palette['primary'];
	}

	interface PaletteOptions {
		black?: PaletteOptions['primary'];
		white?: PaletteOptions['primary'];
		red?: PaletteOptions['primary'];
		drak?: PaletteOptions['primary'];
	}
}

const themeOptions: ThemeOptions = {
	palette: {
		primary: {
			main: '#0E1822',
		},
		red: {
			main: '#FD4655',
		},
		drak: {
			main: '#000',
		},
		black: {
			main: '#1D1D1F',
		},
		white: {
			main: '#F5F5F7',
		},
	},
};

const theme = createTheme(themeOptions);

export default theme;
