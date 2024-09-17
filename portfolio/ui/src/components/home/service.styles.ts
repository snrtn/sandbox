import { styled, Box } from "@mui/material";
import { media } from "../common";

export const ServiceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#fff",
}));

export const ServiceWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  maxWidth: "1200px",
  textAlign: "center",
  flexWrap: "wrap",
  margin: "5rem 0",
  gap: "100px",
  justifyContent: "space-between",
  ...media.desktopLarge({
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
  }),
  ...media.tabletMedium({
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
  }),
}));
