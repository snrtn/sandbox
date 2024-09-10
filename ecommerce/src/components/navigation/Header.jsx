import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import header from "./header.styles";
import useMediaQuery from "@hooks/useMediaQuery";
import { FaBars } from "react-icons/fa";
import PropTypes from "prop-types";
import NavMenu from "./menu/NavMenu";
import NavSearch from "./search/NavSearch";
import NavIcons from "./icon/NavIcons";

const Header = ({
  onMenuToggle,
  hoveredMenu,
  setHoveredMenu,
  activeDropdown,
  setActiveDropdown,
  openSideMenu,
  handleCartMouseEnter,
  handleCartMouseLeave,
  onSearchChange,
  onClear,
  toggleDropdown,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const isTabletScreen = useMediaQuery(1024);

  const lastScrollTop = useRef(0);

  useEffect(() => {
    const headerElement = document.querySelector(".header-container");
    if (headerElement) {
      const newHeight = headerElement.clientHeight;
      setHeaderHeight(newHeight);
    }
  }, []);

  useEffect(() => {
    if (!isTabletScreen) {
      const handleScroll = () => {
        const position = window.scrollY;
        const headerElement = document.querySelector(".header-container");

        if (headerElement) {
          const newHeight = headerElement.clientHeight;
          if (newHeight !== headerHeight) {
            setHeaderHeight(newHeight);
          }
        }

        if (position <= 2600) {
          setIsVisible(position < 600);
          setIsMenuVisible(position < 2600);
        } else {
          if (
            position < lastScrollTop.current &&
            Math.abs(lastScrollTop.current - position) > 0
          ) {
            setIsVisible(true);
            setIsMenuVisible(true);
          } else if (
            position > lastScrollTop.current &&
            Math.abs(lastScrollTop.current - position) > 0
          ) {
            setIsVisible(false);
            setIsMenuVisible(false);
            setActiveDropdown(null);
            handleCartMouseLeave();
          }
        }

        lastScrollTop.current = position <= 0 ? 0 : position;
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isTabletScreen, handleCartMouseLeave, setActiveDropdown, headerHeight]);

  const handleMouseEnter = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div
        className={`header-container ${header.headerContainer} ${
          isVisible ? header.headerVisible : header.hidden
        } fixed`}
        onMouseEnter={handleMouseEnter}
        // ${isTabletScreen ? "absolute" : "fixed"}
      >
        <div className={header.wrapper}>
          <div className={header.left}>
            <button className={header.icon} onClick={onMenuToggle}>
              <FaBars />
            </button>
            <Link to="/">
              <h1 className={header.logoText}>KIM</h1>
            </Link>
          </div>
          <div className={header.center}>
            <NavSearch onSearchChange={onSearchChange} onClear={onClear} />
          </div>
          <div className={header.right}>
            <NavIcons
              openSideMenu={openSideMenu}
              handleCartMouseEnter={handleCartMouseEnter}
              handleCartMouseLeave={handleCartMouseLeave}
              toggleDropdown={toggleDropdown}
            />
          </div>
        </div>
      </div>
      {!isTabletScreen && (
        <div
          style={{
            top: isVisible ? `${headerHeight}px` : "0px",
          }}
          className={`${header.menuContainer} ${
            isMenuVisible ? header.menuVisible : header.hidden
          }`}
        >
          <div className={header.menuWrapper}>
            <NavMenu
              hoveredMenu={hoveredMenu}
              setHoveredMenu={setHoveredMenu}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
          </div>
        </div>
      )}
    </>
  );
};

Header.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  hoveredMenu: PropTypes.string,
  setHoveredMenu: PropTypes.func.isRequired,
  activeDropdown: PropTypes.string,
  setActiveDropdown: PropTypes.func.isRequired,
  openSideMenu: PropTypes.func.isRequired,
  handleCartMouseEnter: PropTypes.func.isRequired,
  handleCartMouseLeave: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default Header;
