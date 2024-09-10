import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import data from "./navMenu.data";
import navMenu from "./navMenu.styles";

const NavMenu = ({
  hoveredMenu,
  setHoveredMenu,
  activeDropdown,
  setActiveDropdown,
}) => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseEnter = (menuKey) => {
    setHoveredMenu(menuKey);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <div className={`${isLoaded ? "tablet-lg:flex" : "hidden"} relative`}>
      <div className={navMenu.wrap}>
        <div className={navMenu.dropCont}>
          {Object.keys(data).map((menuKey) => (
            <div
              key={menuKey}
              onMouseEnter={() => handleMouseEnter(menuKey)}
              onMouseLeave={handleMouseLeave}
              className={navMenu.menuItem}
            >
              <span
                className={
                  activeDropdown === menuKey || hoveredMenu === menuKey
                    ? navMenu.activeline
                    : navMenu.deactiveline
                }
              >
                {t(`menu.${menuKey}.label`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

NavMenu.propTypes = {
  hoveredMenu: PropTypes.string,
  setHoveredMenu: PropTypes.func.isRequired,
  activeDropdown: PropTypes.string,
  setActiveDropdown: PropTypes.func.isRequired,
};

export default NavMenu;
