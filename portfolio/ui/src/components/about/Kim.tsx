import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  KimScrollContainer,
  KimSection,
  KimSectionContent,
  KimSectionSVG,
} from "./kim.styles";

const sectionsData = [
  {
    titleKey: "about.kim.title2",
    descriptionKey: "about.kim.description2",
    backgroundColor: "#006266",
    svgSrc: "./assets/about/front.svg",
  },
  {
    titleKey: "about.kim.title3",
    descriptionKey: "about.kim.description3",
    backgroundColor: "#2980b9",
    svgSrc: "./assets/about/team.svg",
  },
  {
    titleKey: "about.kim.title4",
    descriptionKey: "about.kim.description4",
    backgroundColor: "#8854d0",
    svgSrc: "./assets/about/up.svg",
  },
];

interface KimProps {
  scrollEnabled: boolean;
  onScrollToEnd: () => void;
}

const Kim: React.FC<KimProps> = ({ scrollEnabled, onScrollToEnd }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<boolean[]>(
    new Array(sectionsData.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index !== -1 && entry.isIntersecting && !visibleSections[index]) {
            // 한 번 보이게 되면 상태를 업데이트하고 다시는 false로 변경되지 않음
            setVisibleSections((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = true;
              return newVisibility;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = sectionRefs.current;
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [visibleSections]);

  return (
    <KimScrollContainer>
      {sectionsData.map((section, index) => (
        <KimSection
          key={index}
          ref={(el) => {
            sectionRefs.current[index] = el as HTMLDivElement;
          }}
          backgroundColor={section.backgroundColor}
          index={index}
          language={language}
          style={{
            transform: visibleSections[index]
              ? "translateY(0)"
              : "translateY(100px)", // 스르륵 중앙으로 배치
            opacity: visibleSections[index] ? 1 : 0, // 페이드 인 효과
            transition: "transform 0.6s ease-out, opacity 0.6s ease-out", // 부드러운 애니메이션
          }}
        >
          <KimSectionContent visible={visibleSections[index]}>
            <h1>{t(section.titleKey) as string}</h1>
            <div style={{ marginTop: "1rem" }}>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.1px",
                }}
              >
                {t(section.descriptionKey)
                  .split("\n") // 줄바꿈 문자를 기준으로 텍스트를 나눕니다.
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br /> {/* 줄바꿈을 추가합니다. */}
                      <br /> {/* 줄바꿈을 추가합니다. */}
                    </span>
                  ))}
              </p>
            </div>
            <KimSectionSVG
              src={section.svgSrc}
              alt={`Section ${index + 1} Icon`}
              visible={visibleSections[index]}
            />
          </KimSectionContent>
        </KimSection>
      ))}
    </KimScrollContainer>
  );
};

export default Kim;
