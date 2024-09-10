import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menus from "./menu/navMenu.data";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CustomIconLink from "@common/CustomIconLink";
import useMediaQuery from "@hooks/useMediaQuery";

const techStack = [
  {
    category: "Development",
    items: [
      "React",
      "Next",
      "TypeScript",
      "React-query",
      "Redux",
      "Node",
      "Express",
      "Salesforce",
      "Apex",
      "LWC",
    ],
  },
  {
    category: "Database",
    items: ["AWS", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Styles",
    items: ["Sass", "Tailwind", "Styled-Components", "Material-UI"],
  },
];

const Footer = () => {
  const { t } = useTranslation();
  const isLargeScreen = useMediaQuery(1024);
  const [openSections, setOpenSections] = useState({
    KIM: true,
    About: true,
    SHOP: true,
    TechStack: true,
  });

  useEffect(() => {
    if (!isLargeScreen) {
      setOpenSections({
        KIM: true,
        About: true,
        SHOP: true,
        TechStack: true,
      });
    } else {
      setOpenSections({
        KIM: false,
        About: false,
        SHOP: false,
        TechStack: false,
      });
    }
  }, [isLargeScreen]);

  const toggleSection = (section) => {
    if (isLargeScreen) {
      setOpenSections((prevState) => ({
        ...prevState,
        [section]: !prevState[section],
      }));
    }
  };

  return (
    <div className="h-full bg-bgGrayWhite py-24 section-padding">
      <div className="flex flex-col tablet-lg:flex-row gap-20">
        <div className="flex flex-col flex-1 gap-8">
          <h1
            className="font-medium cursor-pointer font-roboto"
            onClick={() => toggleSection("KIM")}
          >
            KIM
          </h1>
          {openSections.KIM && (
            <div className="flex flex-col gap-1 h-full">
              <p>
                Développement full stack avec Lightning Web Components, Aura
                Components, Visualforce et Apex, Conception de Modèle de
                Données, la conception de flows
                <br />
                <br />
                Développement front end avec React et TypeScript, gestion
                d&apos;état avec Redux Développement d&apos;UI avec
                styled-components et MUI
                <br />
                <br />
                J&apos;ai obtenu des certifications en développement logiciel
                chez OpenClassrooms et de l&apos;expérience en JavaScript,
                React, et Node.js.
              </p>
              <div className="flex mt-8 gap-4">
                <CustomIconLink
                  to="https://github.com/snrtn?tab=repositories"
                  bgColor="#1d1d1f"
                  icon={FaGithub}
                />
                <CustomIconLink
                  to="https://www.linkedin.com/in/hanjun-kim-1b1741171/"
                  bgColor="#0066CC"
                  icon={FaLinkedin}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col tablet-lg:flex-row flex-[4] gap-20">
          <div className="flex flex-col gap-8 flex-1">
            <h1
              className="font-medium cursor-pointer font-roboto"
              onClick={() => toggleSection("About")}
            >
              About
            </h1>
            {openSections.About && (
              <div className="flex flex-col gap-2">
                <Link
                  to="https://portfront-six.vercel.app/"
                  className=" text-cLightBlack hover:text-cBlack"
                >
                  Portfolio
                </Link>
                <Link
                  to="https://www.linkedin.com/in/hanjun-kim-1b1741171/"
                  className=" text-cLightBlack hover:text-cBlack"
                >
                  Linkdin
                </Link>
                <Link
                  to="https://github.com/snrtn?tab=repositories"
                  className=" text-cLightBlack hover:text-cBlack"
                >
                  Repository
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-8 flex-[4]">
            <h1
              className="font-medium cursor-pointer font-roboto"
              onClick={() => toggleSection("SHOP")}
            >
              SHOP
            </h1>
            {openSections.SHOP && (
              <div className="grid gap-2 grid-cols-3">
                {Object.keys(menus).map((menuKey) => (
                  <div key={menuKey}>
                    <h2 className="font-roboto">
                      {t(`menu.${menuKey}.label`)}
                    </h2>
                    <ul className="py-2">
                      {menus[menuKey].sections.map((section) =>
                        section.items.map((item) => (
                          <li key={item.label} className="py-1">
                            <Link
                              to={item.href}
                              className="text-cLightBlack hover:text-cBlack"
                            >
                              {t(`menu.${menuKey}.items.${item.label}`)}
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-8 flex-[4]">
            <h1
              className="font-medium cursor-pointer font-roboto"
              onClick={() => toggleSection("TechStack")}
            >
              Tech Stack
            </h1>
            {openSections.TechStack && (
              <div className="grid grid-cols-3">
                {techStack.map((stack) => (
                  <div key={stack.category}>
                    <h2 className="font-roboto">{stack.category}</h2>
                    <ul className="py-2">
                      {stack.items.map((item) => (
                        <li key={item} className="py-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
