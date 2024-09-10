import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { setCurrency, getCurrency } from "@translate/i18n";

const LanguageDropdown = ({
  isOpen,
  languageOptions,
  currencyOptions,
  changeLanguage,
  toggleDropdown,
}) => {
  const { i18n } = useTranslation();
  const currentCurrency = getCurrency();

  if (!isOpen) return null;

  const handleCurrencyChange = (currency) => {
    setCurrency(currency);
    window.dispatchEvent(new Event("storage"));
    toggleDropdown();
  };

  const handleLanguageChange = (lang) => {
    toggleDropdown();
    changeLanguage(lang);
  };

  return (
    <div className="fixed inset-0 top-10 flex flex-col justify-center items-center tablet-lg:top-0 z-30">
      <div
        className="glassmorphismlight w-full h-full absolute inset-0 cursor-pointer"
        onClick={toggleDropdown}
      ></div>

      <div className="relative z-20">
        <div className="w-[200px] mb-8">
          <h2 className="text-cWhite text-xl">Current Language</h2>
          <div className="flex justify-start w-32 items-center gap-2 mb-2">
            <span className="text-gray-400">
              {languageOptions[i18n.language]?.label || "Unknown"}
            </span>
          </div>

          <h2 className="text-cWhite text-xl">Select Language</h2>
          <div className="max-h-[20vh] mb-4 overflow-y-auto">
            {Object.keys(languageOptions)
              .filter((lang) => lang !== i18n.language)
              .map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className="flex justify-start w-32 gap-2 text-cWhite text-left items-center"
                >
                  <span className="text-cWhite">
                    {languageOptions[lang].label}
                  </span>
                </button>
              ))}
          </div>
        </div>

        <div className="w-[200px]">
          <h2 className="text-cWhite text-xl">Current Currency</h2>
          <div className="flex justify-start w-32 items-center gap-2 mb-2">
            <span className="text-gray-400">
              {currencyOptions[currentCurrency]?.label || "Unknown"}
            </span>
          </div>

          <h2 className="text-cWhite text-xl">Select Currency</h2>
          <div className="max-h-[20vh] overflow-y-auto">
            {Object.keys(currencyOptions)
              .filter((currency) => currency !== currentCurrency)
              .map((currency) => (
                <button
                  key={currency}
                  onClick={() => handleCurrencyChange(currency)}
                  className="flex justify-start w-32 gap-2 text-cWhite text-left items-center"
                >
                  <span className="text-cWhite">
                    {currencyOptions[currency].label}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

LanguageDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  languageOptions: PropTypes.object.isRequired,
  currencyOptions: PropTypes.object.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default LanguageDropdown;
