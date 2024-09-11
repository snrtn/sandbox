import { styled, Box } from "@mui/material";
import { media } from "../common";

export const BlogLayoutContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  height: "90vh",
  ...media.desktopMedium({
    height: "100%",
    padding: "100px 0",
  }),
}));
