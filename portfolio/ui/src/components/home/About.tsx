import React from "react";
import {
  AboutContainer,
  AboutContentContainer,
  AboutLeftContainer,
  AboutRightContainer,
  AboutTitle,
  AboutDescription,
  AboutProfileImage,
} from "./about.styles";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <AboutContainer>
      <AboutContentContainer>
        <AboutLeftContainer>
          <AboutTitle>{t("home.about.title") as string}</AboutTitle>
          <AboutDescription>
            {t("home.about.description") as string}
          </AboutDescription>
        </AboutLeftContainer>
        <AboutRightContainer>
          <AboutProfileImage
            src="./assets/home/about/scrum.svg"
            alt="scrum Image"
          />
        </AboutRightContainer>
      </AboutContentContainer>
    </AboutContainer>
  );
};

export default About;
