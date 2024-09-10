import PropTypes from "prop-types";
import ProductCard from "@common/ProductCard";
import infiniteView from "../../home/infiniteView.styles";
import { useTranslation } from "react-i18next";

const SuggestionDropdown = ({ searchTerm, suggestions, onClear }) => {
  const { t } = useTranslation();

  const renderSuggestions = () => {
    if (!searchTerm.trim() || suggestions.length === 0) {
      return (
        <div className="flex h-[80vh] w-full items-center justify-center bg-bgWhite">
          <p className="text-body-sm font-weight-md leading-body-sm">
            {t("text.dropdown.noMatche")}
            <span className="text-title-xs font-weight-lg leading-title-xs ml-1">
              &quot;{searchTerm}&quot;.
            </span>
          </p>
        </div>
      );
    }

    return (
      <div
        className={`${infiniteView.container} h-[70vh] tablet-lg:h-[80vh] overflow-x-auto`}
      >
        <div className={infiniteView.grid}>
          {suggestions.map((suggestion) => (
            <div key={suggestion.product_id} className="flex-shrink-0">
              <ProductCard product={suggestion} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 top-10 tablet-lg:top-0 z-40">
      <div
        className="fixed inset-0 h-full cursor-pointer bg-bgBlack bg-opacity-30"
        onClick={onClear}
      ></div>
      <div className="absolute top-16 left-0 right-0 z-50">
        {renderSuggestions()}
        <div
          className={`section-padding flex ${
            suggestions.length > 1 ? "h-16" : "h-8"
          } w-full items-center justify-end bg-white`}
        >
          {suggestions.length > 1 && (
            <button className="rounded-main bg-cBlue p-pd-sm text-cWhite">
              {t("button.searchall")}
              <span className="ml-1" />({suggestions.length})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

SuggestionDropdown.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  suggestions: PropTypes.array.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default SuggestionDropdown;
