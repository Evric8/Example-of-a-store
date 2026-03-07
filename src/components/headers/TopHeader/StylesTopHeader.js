import { Box, styled } from "@mui/material";

export const StyledButton = styled(Box)({
  padding: "1px 6px",
  textAlign: "center",
  "&:hover": {},
});

// then change display
export const Root = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("950")]: {
    // backgroundColor: "var(--orange-color)",
    display: "none",
  },
}));

export const styles = {
  mainBox: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    m: "0 auto",
    maxWidth: "1152px",
  },

  displayFlex:{ display: "flex", gap: 2 },

  cityBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&:hover": {
      color: "var(--blue-color)",
      transition: "0.5s linear",
      cursor: "pointer",
    },
  },

  linkBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    typography: "body1",
    // color: "#d31653",
    "& > :not(style) ~ :not(style)": {
      ml: 2,
    },
  },
  
  linkCallIcon: {
    height: "0.75em",
    position: "relative",
    top: "3px",
    mr: 0.3,
  },
};
