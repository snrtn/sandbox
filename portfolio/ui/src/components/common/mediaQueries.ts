import { CSSObject } from '@mui/system';

const sizes = {
	desktopLarge: 1500,
	desktopMedium: 1400,
	desktopSmall: 1300,
	laptopLarge: 1200,
	laptopMedium: 1100,
	laptopSmall: 1000,
	tabletLarge: 900,
	tabletMedium: 800,
	tabletSmall: 700,
	mobileLarge: 600,
	mobileMedium: 500,
	mobileSmall: 400,
};

const media = {
	desktopLarge: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.desktopLarge}px)`]: styles,
	}),
	desktopMedium: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.desktopMedium}px)`]: styles,
	}),
	desktopSmall: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.desktopSmall}px)`]: styles,
	}),
	laptopLarge: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.laptopLarge}px)`]: styles,
	}),
	laptopMedium: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.laptopMedium}px)`]: styles,
	}),
	laptopSmall: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.laptopSmall}px)`]: styles,
	}),
	tabletLarge: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.tabletLarge}px)`]: styles,
	}),
	tabletMedium: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.tabletMedium}px)`]: styles,
	}),
	tabletSmall: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.tabletSmall}px)`]: styles,
	}),
	mobileLarge: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.mobileLarge}px)`]: styles,
	}),
	mobileMedium: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.mobileMedium}px)`]: styles,
	}),
	mobileSmall: (styles: CSSObject) => ({
		[`@media (max-width: ${sizes.mobileSmall}px)`]: styles,
	}),
};

export default media;
