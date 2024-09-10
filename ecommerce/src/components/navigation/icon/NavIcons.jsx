import PropTypes from "prop-types";
import {
  CiUser,
  CiTimer,
  CiShoppingCart,
  CiDeliveryTruck,
} from "react-icons/ci";
import { Link } from "react-router-dom";
import navIcons from "./navIcons.styles";
import { useTranslation } from "react-i18next";

const NavIcons = ({
  openSideMenu,
  handleCartMouseEnter,
  handleCartMouseLeave,
  toggleDropdown,
}) => {
  const { i18n } = useTranslation();

  const getLanguageText = () => {
    if (i18n.language === "en") {
      return "EN";
    } else if (i18n.language === "fr") {
      return "FR";
    }
    return "Language";
  };

  return (
    <div className={navIcons.container}>
      <Link to="/user" className={navIcons.iconContainer}>
        <CiUser className={navIcons.icon} />
      </Link>

      <Link to="/shipping" className={navIcons.iconContainer}>
        <CiDeliveryTruck className={navIcons.icon} />
      </Link>

      <Link
        to="/cart"
        className={navIcons.iconContainer}
        onMouseEnter={handleCartMouseEnter}
        onMouseLeave={handleCartMouseLeave}
      >
        <CiShoppingCart className={navIcons.icon} />
      </Link>

      <button onClick={openSideMenu} className={navIcons.iconContainer}>
        <CiTimer className={navIcons.icon} />
      </button>

      <button
        onClick={toggleDropdown}
        className="flex items-center ml-2 px-0 tablet-lg:px-2"
      >
        {getLanguageText()}
      </button>
    </div>
  );
};

NavIcons.propTypes = {
  openSideMenu: PropTypes.func.isRequired,
  handleCartMouseEnter: PropTypes.func.isRequired,
  handleCartMouseLeave: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default NavIcons;
