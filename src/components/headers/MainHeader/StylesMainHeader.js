export const styles = {
  box: { flexGrow: 1, mb: 2, ml: { xs: 2, sm: 0 } },

  appBar: {
    backgroundColor: "inherit",
    p: 0,
    m: 0,
    boxShadow: "none",
  },

  toolBar: {
    maxWidth: "1199px",
    m: { lg: "0 auto" },
    p: 0,
  },

  iconButton: {
    mr: 1,
    backgroundColor: "var(--blue-color)",
    borderRadius: "32px",
    p: "3px",
    ":hover": {
      backgroundColor: "var(--blue-color-hover)",
    },
  },

  brightness1Icon: { color: "var(--red-color)", ml: "3px" },

  buttonCatalog: {
    backgroundColor: "var(--blue-color)",
    color: "var(--white-color)",
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: 0.2,
    pr: 2.5,
    minWidth: "90px",
    ":hover": {
      backgroundColor: "var(--blue-color-hover)",
    },
  },

  boxNav: {
    display: "flex",
    gap: 2,
    flexGrow: 1,
  },

  searchWrapper: {
    position: "relative",
    display: "flex",
    flexGrow: 1,
    width: "100%",
    mr: 2,
    ml: 1.3,
    border: "1px solid var(--blue-color)",
    borderRadius: 1,
    color: "var(--dark-color)",
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  searchIconWrapper: {
    position: "absolute",
    pl: 1,
    pt: 0.8,
    pointerEvents: "none",
  },

  displayCenter: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    mr: 9,
  },

  searchInput: {
    color: "inherit",
    flexGrow: 1,
    "& .MuiInputBase-input": {
      pl: 4.5,
      // transition: "width 0.3s",
      width: "100%",
    },
  },

  widht: {
    width: 28,
    cursor: "pointer",
    mr: 0.5,
    mt: 0.8,
  },

  searchButton: {
    position: "absolute",
    right: 0,
    height: "100%",
    p: "10px 8px",
    color: "var(--white-color)",
    backgroundColor: "var(--blue-color)",
    "&:hover": {
      backgroundColor: "var(--blue-color-hover)",
    },
  },

  boxIcon: {
    display: { xs: "none", sm: "flex" },
    gap: 2,
    color: "var(--dark-color)",
    alignItems: "center",
  },

  display: { display: { xs: "none", mdButton: "flex" },gap:1 },

  typographyIcon: { display: { xs: "none", lg: "block" } },

  boxBasket: {
    alignSelf: "center",
    display: "flex",
    gap: 2,
    backgroundColor: "var(--light-grey-color)",
    borderRadius: "8px",
    paddingLeft: "6px",
    "&:hover": {
      color: "var(--blue-color-hover)",
      transition: "0.3s linear",
      backgroundColor: "var(--light-grey-color-hover)",
    },
  },

  textAlign: { textAlign: "center" },

  font: { fontSize: "10px" },

  boxSum: {
    display: "flex",
    justifyContent: "space-between",
  },

  attachMoneyIcon: {
    height: "0.5em",
    position: "relative",
    top: "7px",
  },
};

//  Налаштування брейкпоінтів (за необхідності)
//  Можна налаштувати брейкпоінти в темі, щоб змінити їх стандартні значення:

// jsx
// Копировать
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,   // додаткова точка зупину (за замовчуванням 0)
//       sm: 600, // додаткова точка зупину
//       md: 960, // додаткова точка зупину
//       lg: 1280, // додаткова точка зупину
//       xl: 1920, // додаткова точка зупину
//     },
//   },
// });

// export default function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <ResponsiveComponent />
//     </ThemeProvider>
//   );
// }
//  Тепер компонент буде реагувати на різні ширини екрана, використовуючи налаштовані брейкпоінти.
