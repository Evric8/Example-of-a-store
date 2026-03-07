import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      //+
      smMax:700,
      minMd:800,
      //-
      md: 900,
      mdButton: 950,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Крок 3: Налаштування брейкпоінтів (за необхідності)
// Ви можете налаштувати брейкпоінти в темі, щоб змінити їх стандартні значення:

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
// Тепер ваш компонент буде реагувати на різні ширини екрана, використовуючи налаштовані брейкпоінти.
