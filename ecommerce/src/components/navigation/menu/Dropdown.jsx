import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import navMenu from "./navMenu.styles";
import { useEffect, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";

const Dropdown = ({ menuKey, data, isActive, setActiveDropdown }) => {
  const { t } = useTranslation();
  const [dropdownTop, setDropdownTop] = useState(107);
  const isTabletScreen = useMediaQuery(1024);
  const responsive = isTabletScreen ? 600 : 760;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const newTop = position < responsive ? 107 : 43;
      const oldTop = position > responsive ? 107 : 43;
      setDropdownTop(newTop);

      if (position >= 2600) {
        setDropdownTop(oldTop);
      }

      if (isTabletScreen) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTabletScreen, responsive, setActiveDropdown]);

  if (!isActive) return null;

  return (
    <div
      onMouseEnter={() => setActiveDropdown(menuKey)}
      onMouseLeave={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setActiveDropdown(null);
        }
      }}
      style={{ top: `${dropdownTop}px`, position: "fixed", zIndex: 50 }}
      className={navMenu.drop}
    >
      <div className={navMenu.dropContent}>
        {data[menuKey].sections.map((section) => (
          <div key={section.title}>
            <h4 className={navMenu.secTitle}>
              {t(`menu.${menuKey}.sections.${section.title}`)}
            </h4>
            <ul className="py-4">
              {section.items.map((item) => (
                <Link key={item.label} to={item.href}>
                  <li className={navMenu.listItem}>
                    {t(`menu.${menuKey}.items.${item.label}`)}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  menuKey: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActiveDropdown: PropTypes.func.isRequired,
};

export default Dropdown;
