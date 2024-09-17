import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  IconButton,
  List,
  Collapse,
} from "@mui/material";
import { RiMenuFill } from "react-icons/ri";
import { PiSignInBold } from "react-icons/pi";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useAuth } from "../../hooks";
import {
  HeaderContainer,
  HeaderToolbar,
  HeaderLogoWrapper,
  HeaderLogoText,
  HeaderLogoImage,
  HeaderNav,
  HeaderLanguageSwitcher,
  HeaderHamburgerMenu,
  HeaderSidebar,
  HeaderStyledReactCountryFlag,
  HeaderStyledDrawer,
  HeaderStyledListItem,
  HeaderStyledListItemText,
  HeaderCustomLink,
  HeaderDropdownMenu,
  HeaderOverlay,
} from "./header.styles";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { token, logout } = useAuth();
  const [language, setLanguage] = useState("fr");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const currentLanguage = i18n.language || "fr";
    setLanguage(currentLanguage);
  }, [i18n.language]);

  const changeLanguage = (event: SelectChangeEvent<string>) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const handleMouseEnter = (menu: string) => {
    if (activeMenu !== menu) {
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleItemClick = (menu: string) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setActiveMenu(null);
  };

  return (
    <HeaderContainer position="fixed">
      <HeaderToolbar>
        <HeaderHamburgerMenu>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <RiMenuFill />
          </IconButton>
        </HeaderHamburgerMenu>
        <HeaderLogoWrapper>
          <Link to="/">
            <HeaderLogoText variant="h5">JunFolio</HeaderLogoText>
          </Link>
        </HeaderLogoWrapper>
        <HeaderNav onMouseLeave={handleMouseLeave}>
          <ul>
            {/* <li onMouseEnter={() => handleMouseEnter("home")}>
              <HeaderCustomLink to="/">{t("navigation.home")}</HeaderCustomLink>
            </li> */}
            <li onMouseEnter={() => handleMouseEnter("about")}>
              <HeaderCustomLink to="#">
                {t("navigation.about")}
              </HeaderCustomLink>
              {activeMenu === "about" && (
                <HeaderOverlay onClick={() => setActiveMenu(null)} />
              )}
              <Collapse
                in={activeMenu === "about"}
                timeout="auto"
                unmountOnExit
              >
                <HeaderDropdownMenu>
                  <li>
                    <HeaderCustomLink
                      to="/about"
                      onClick={() => setActiveMenu(null)}
                    >
                      {t("navigation.experience")}
                    </HeaderCustomLink>
                  </li>
                  {/* <li>
                    <HeaderCustomLink
                      to="/experience"
                      onClick={() => setActiveMenu(null)}
                    >
                      {t("navigation.kim")}
                    </HeaderCustomLink>
                  </li> */}
                </HeaderDropdownMenu>
              </Collapse>
            </li>
            {/* <li onMouseEnter={() => handleMouseEnter("blog")}>
              <HeaderCustomLink to="/blog">
                {t("navigation.blog")}
              </HeaderCustomLink>
            </li>
            <li onMouseEnter={() => handleMouseEnter("contact")}>
              <HeaderCustomLink to="/contact">
                {t("navigation.contact")}
              </HeaderCustomLink>
            </li>
            {token && (
              <li>
                <HeaderCustomLink to="/dashboard">
                  {t("navigation.dashboard")}
                </HeaderCustomLink>
              </li>
            )} */}
          </ul>
        </HeaderNav>
        <HeaderLanguageSwitcher>
          <Select
            value={language}
            onChange={changeLanguage}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="fr">
              <HeaderStyledReactCountryFlag countryCode="FR" svg />
            </MenuItem>
            <MenuItem value="ko">
              <HeaderStyledReactCountryFlag countryCode="KR" svg />
            </MenuItem>
          </Select>
          {/* {token ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="Logout"
                onClick={logout}
              >
                <VscDebugDisconnect />
              </IconButton>
            </>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="Login"
              component={Link}
              to="/auth"
            >
              <PiSignInBold />
            </IconButton>
          )} */}
        </HeaderLanguageSwitcher>
      </HeaderToolbar>
      <HeaderStyledDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <HeaderSidebar role="presentation" onKeyDown={toggleDrawer(false)}>
          <HeaderLogoWrapper>
            <Link to="/" onClick={closeDrawer}>
              <HeaderLogoImage src="./assets/header/logo.png" alt="Logo" />
            </Link>
          </HeaderLogoWrapper>
          <List>
            {/* <HeaderStyledListItem as={Link} to="/" onClick={closeDrawer}>
              <HeaderStyledListItemText primary={t("navigation.home")} />
            </HeaderStyledListItem> */}
            <HeaderStyledListItem onClick={() => handleItemClick("about")}>
              <HeaderStyledListItemText primary={t("navigation.about")} />
            </HeaderStyledListItem>
            <Collapse in={activeMenu === "about"} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <HeaderStyledListItem
                  as={Link}
                  to="/about"
                  onClick={closeDrawer}
                >
                  <HeaderStyledListItemText
                    primary={t("navigation.experience")}
                  />
                </HeaderStyledListItem>
                {/* <HeaderStyledListItem
                  as={Link}
                  to="/experience"
                  onClick={closeDrawer}
                >
                  <HeaderStyledListItemText primary={t("navigation.kim")} />
                </HeaderStyledListItem> */}
              </List>
            </Collapse>
            {/* <HeaderStyledListItem as={Link} to="/blog" onClick={closeDrawer}>
              <HeaderStyledListItemText primary={t("navigation.blog")} />
            </HeaderStyledListItem>
            <HeaderStyledListItem as={Link} to="/contact" onClick={closeDrawer}>
              <HeaderStyledListItemText primary={t("navigation.contact")} />
            </HeaderStyledListItem>
            {token && (
              <HeaderStyledListItem
                as={Link}
                to="/dashboard"
                onClick={closeDrawer}
              >
                <HeaderStyledListItemText primary={t("navigation.dashboard")} />
              </HeaderStyledListItem>
            )} */}
          </List>
        </HeaderSidebar>
      </HeaderStyledDrawer>
    </HeaderContainer>
  );
};

export default Header;
