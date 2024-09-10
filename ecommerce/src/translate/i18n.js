import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as en from "./en";
import * as fr from "./fr";

const currencyMap = {
  en: "USD",
  fr: "EUR",
};

const CURRENCY_KEY = "selectedCurrency";
const LANGUAGE_KEY = "i18nextLng";

const initCurrency = () => {
  const savedCurrency = localStorage.getItem(CURRENCY_KEY);
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY) || i18n.language;

  if (!savedCurrency) {
    const initialCurrency = currencyMap[savedLanguage] || "USD";
    localStorage.setItem(CURRENCY_KEY, initialCurrency);
  }
};

export const getCurrencySymbol = (currencyCode) => {
  switch (currencyCode) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    default:
      return "€";
  }
};

export const getCurrency = () => {
  return localStorage.getItem(CURRENCY_KEY) || currencyMap[i18n.language];
};

export const setCurrency = (currency) => {
  localStorage.setItem(CURRENCY_KEY, currency);
};

export const setLanguage = (language) => {
  i18n.changeLanguage(language);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...en.button,
          ...en.card,
          ...en.form,
          ...en.navigation,
          ...en.page,
          ...en.text,
        },
      },
      fr: {
        translation: {
          ...fr.button,
          ...fr.card,
          ...fr.form,
          ...fr.navigation,
          ...fr.page,
          ...fr.text,
        },
      },
      // Add more languages as needed
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    lng: localStorage.getItem(LANGUAGE_KEY) || "en",
  });

// Initialize currency on startup
initCurrency();

export default i18n;
