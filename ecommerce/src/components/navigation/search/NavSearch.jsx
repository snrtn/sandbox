/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import productsData from "@mock/products.data";

const NavSearch = ({ onSearchChange, onClear }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const trimmedTerm = searchTerm.trim();

  useEffect(() => {
    if (trimmedTerm.length >= 3) {
      const results = productsData.filter((product) =>
        product.translations.some((translation) =>
          translation.name.toLowerCase().includes(trimmedTerm.toLowerCase())
        )
      );
      onSearchChange(results, trimmedTerm);
    } else {
      onClear();
    }
  }, [trimmedTerm]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") handleClear();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (inputRef.current) {
        inputRef.current.blur();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClear = () => {
    setSearchTerm("");
    onClear();
  };

  return (
    <div className="relative flex h-full w-full items-start tablet-lg:items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-bgWhite flex w-full gap-4 rounded-main p-btn h-8 tablet-lg:h-full items-center"
      >
        <button type="submit">
          <IoIosSearch className="text-cDarkWhite" />
        </button>
        <div className="relative w-full">
          <input
            type="text"
            name="search"
            value={searchTerm}
            ref={inputRef}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
            placeholder={t("navigation.search")}
            className="w-full text-base"
          />
          {trimmedTerm.length >= 1 && trimmedTerm.length < 3 && (
            <span className="absolute right-1 top-1/2 -translate-y-1/2 transform text-cRed">
              {trimmedTerm.length}/3
            </span>
          )}
        </div>
        {searchTerm && (
          <button type="button" onClick={handleClear}>
            <RiDeleteBack2Fill className="text-cBlack" />
          </button>
        )}
      </form>
    </div>
  );
};

NavSearch.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default NavSearch;
