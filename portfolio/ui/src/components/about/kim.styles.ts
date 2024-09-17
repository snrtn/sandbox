import { styled, Box } from "@mui/material";
import { media } from "../common";

interface SectionProps {
  backgroundColor: string;
  index: number;
  language: string;
}

interface SectionContentProps {
  visible: boolean;
}

interface SectionSVGProps {
  visible: boolean;
}

export const KimScrollContainer = styled(Box)(() => ({
  width: "100%",
  position: "relative",
  overflowStyle: "none",
  scrollbarWidth: "none",
  boxSizing: "border-box",
}));

export const KimSection = styled(Box)<SectionProps>(
  ({ backgroundColor, index, language }) => ({
    width: "100%",
    height: "100vh", // 기본적으로 높이를 100vh로 설정
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    backgroundColor,
    position: "relative",
    overflow: "hidden",
    color: "white",
    // 모바일 크기부터 섹션의 높이와 패딩 조정
    ...media.mobileLarge({
      height: "120vh", // 큰 모바일 화면에서는 높이를 80vh로 설정
      padding: "20px", // 큰 모바일에서 패딩을 더 넓힘
    }),
    ...media.mobileMedium({
      height: "150vh", // 모바일 중간 화면에서는 높이를 70vh로 설정
      padding: "15px", // 모바일에서 패딩을 살짝 늘림
    }),
    ...media.mobileSmall({
      height: "180vh", // 모바일 작은 화면에서는 높이를 60vh로 설정
      padding: "10px", // 작은 모바일에서 패딩
    }),
  })
);

export const KimSectionContent = styled("div")<SectionContentProps>(
  ({ visible }) => ({
    display: "flex",
    flexDirection: "column", // 텍스트가 위, 이미지가 아래로 배치
    justifyContent: "center", // 수직 중앙 정렬
    alignItems: "center", // 수평 중앙 정렬
    opacity: visible ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    zIndex: 1,
    textAlign: "center",
    padding: "0 45rem",
    height: "100vh",
    boxSizing: "border-box",
    ...media.desktopSmall({
      padding: "0 20rem",
    }),
    ...media.laptopLarge({
      padding: "0 10rem",
    }),
    ...media.tabletSmall({
      textAlign: "left",
      padding: "0 2rem",
    }),
  })
);

export const KimSectionSVG = styled("img")<SectionSVGProps>(({ visible }) => ({
  width: "350px",
  height: "350px",
  marginTop: "2rem", // 텍스트와 이미지 사이에 간격 추가
  position: "relative", // absolute 대신 relative 사용하여 겹침 방지
  transform: "translateX(0)", // 중앙 배치를 위해 translateX 제거
  transition: "opacity 0.5s ease-in-out", // 부드러운 전환 효과
  display: visible ? "block" : "none", // 이미지 가시성 제어
}));
