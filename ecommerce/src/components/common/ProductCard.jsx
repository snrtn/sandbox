import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getCurrency, getCurrencySymbol } from "@translate/i18n";

const ProductCard = ({ product }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [currentCurrency, setCurrentCurrency] = useState(getCurrency());

  useEffect(() => {
    const handleCurrencyChange = () => {
      setCurrentCurrency(getCurrency());
    };

    window.addEventListener("storage", handleCurrencyChange);

    return () => {
      window.removeEventListener("storage", handleCurrencyChange);
    };
  }, []);

  const translation =
    product.translations.find((t) => t.language_code === currentLanguage) ||
    product.translations[0];

  const color = product.colors[0];
  const priceObj = color.prices.find(
    (p) => p.currency_code === currentCurrency
  );

  const currencySymbol = getCurrencySymbol(currentCurrency);

  const [isHovered, setIsHovered] = useState(false);
  const [mainImage, setMainImage] = useState(product.images?.[0] || "");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsLargeScreen(window.innerWidth > 884);
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMainImage(product.images?.[0] || "");
  };

  return (
    <Link to={`/product/${product.product_id}`}>
      <div
        className="relative box-border cursor-pointer text-left"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="h-65 relative mb-1 w-full">
          <img
            src={mainImage}
            alt={translation.name}
            className="object-cover"
            loading="lazy"
            width={400}
            height={600}
          />
        </div>
        {isHovered && isLargeScreen ? (
          <div className="bg-bgWhite p-4">
            <div className="no-scrollbar mb-2 flex gap-2 no-scroll-y">
              {product.images.slice(1, 5).map((image, idx) => (
                <div key={idx} className="relative h-12 w-12">
                  <img
                    src={image}
                    alt={`${translation.name} ${idx}`}
                    className="cursor-pointer object-cover"
                    onMouseOver={() => setMainImage(image)}
                    loading="lazy"
                    width={400}
                    height={600}
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm font-medium">
              {currencySymbol} {priceObj.amount.toFixed(2)}
            </p>
          </div>
        ) : (
          <div className="p-2 md:p-4">
            <p className="text-sm font-medium">{translation.name}</p>
            <p className="mt-1 text-xs text-gray-500">
              {product.colors.length} colors
            </p>
            <p className="mt-6 text-sm font-medium">
              {currencySymbol} {priceObj.amount.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    translations: PropTypes.arrayOf(
      PropTypes.shape({
        language_code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
      })
    ).isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        translations: PropTypes.arrayOf(
          PropTypes.shape({
            language_code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
          })
        ).isRequired,
        prices: PropTypes.arrayOf(
          PropTypes.shape({
            currency_code: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            discount: PropTypes.number.isRequired,
          })
        ).isRequired,
        sizes: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            stock: PropTypes.number.isRequired,
            country_variants: PropTypes.arrayOf(
              PropTypes.shape({
                country_code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
              })
            ).isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ProductCard;
