import { styled, Box } from "@mui/material";
import { media } from "../components";

export const BlogPageOverlayContainer = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100%",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
  color: "#000",
  padding: "20px",
  boxSizing: "border-box",
  ...media.mobileLarge({
    maxWidth: "100% !important",
    width: "100% !important",
    height: "120vh",
    padding: "30px",
  }),
});

export const BlogPageBackButtonContainer = styled(Box)({
  width: "600px",
  marginBottom: "100px",
  ...media.mobileLarge({
    maxWidth: "100% !important",
    width: "100% !important",
    marginBottom: "50px",
  }),
});

export const BlogPageContentContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  textAlign: "left",
  maxWidth: "600px",
  margin: "0 auto",
  ...media.mobileLarge({
    maxWidth: "100% !important",
    width: "100% !important",
  }),
});

export const BlogPageImageContainer = styled(Box)({
  width: "100%",
});
