import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

import navSide from "./navSide.styles";
import menus from "../menu/navMenu.data";

const NavSide = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSections, setActiveSections] = useState({});

  useEffect(() => {
    if (!isOpen) {
      setActiveMenu(null);
      setActiveSections({});
    }
  }, [isOpen]);

  const handleMenuToggle = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    setActiveSections({}); // 다른 메뉴의 하위 메뉴를 모두 닫기 위해 초기화
  };

  const handleSectionToggle = (section) => {
    setActiveSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className={navSide.container}>
      <div className={navSide.overlay} onClick={onClose}>
        <div className={navSide.closeButton} onClick={onClose}>
          <IoMdClose size={30} color="white" />
        </div>
      </div>

      <div className={navSide.sidebar}>
        <div className={navSide.content}>
          <div className={navSide.welcome}>
            <h1 className={navSide.msg}>{t("side.welcome")},</h1>
          </div>

          <div className={navSide.itemCont}>
            {Object.keys(menus).map((menuKey) => (
              <div key={menuKey}>
                <div
                  className={navSide.itemBtn}
                  onClick={() => handleMenuToggle(menuKey)}
                >
                  <span className={navSide.itemText}>
                    {t(`menu.${menuKey}.label`)}
                  </span>
                  {activeMenu === menuKey ? (
                    <FaChevronDown className={navSide.faChevron} />
                  ) : (
                    <FaChevronRight className={navSide.faChevron} />
                  )}
                </div>
                {activeMenu === menuKey && (
                  <div className="active">
                    {menus[menuKey].sections.map((section) => (
                      <div key={section.title}>
                        <div
                          className={navSide.itemBtn}
                          onClick={() => handleSectionToggle(section.title)}
                        >
                          <div className={navSide.itemTextWrap}>
                            <span className={navSide.itemText}>
                              {t(`menu.${menuKey}.sections.${section.title}`)}
                            </span>
                          </div>
                          {activeSections[section.title] ? (
                            <FaChevronDown className={navSide.faChevron} />
                          ) : (
                            <FaChevronRight className={navSide.faChevron} />
                          )}
                        </div>
                        {activeSections[section.title] && (
                          <>
                            {section.items.map((item) => (
                              <div key={item.label} className={navSide.itemBtn}>
                                <Link
                                  to={item.href}
                                  className={navSide.itemSubText}
                                >
                                  {t(`menu.${menuKey}.items.${item.label}`)}
                                </Link>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

NavSide.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavSide;
