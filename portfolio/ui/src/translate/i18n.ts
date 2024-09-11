import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import fr from './fr.json';
import ko from './ko.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: en,
			},
			fr: {
				translation: fr,
			},
			ko: {
				translation: ko,
			},
		},
		fallbackLng: 'fr',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
