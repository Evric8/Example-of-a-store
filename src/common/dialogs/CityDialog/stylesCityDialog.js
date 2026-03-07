import { minHeight } from "@mui/system";

const styles = {
  transition: {
    timeout: 800,
    direction: "down",
  },

  paper: {
    position: "absolute",
    top: 0,
    // backgroundColor: "var(--white-color)",
    backgroundColor: "#fff",
    //+
    width: "100%", // тепер реально працює
    maxWidth: "1200px", // щоб не розтягувалось надто
    // minWidth: "940px",
    margin: "auto", // по центру
  },

  title: { m: 0, p: 2 },

  closeIcon: {
    position: "absolute",
    right: 8,
    top: 8,
  },

  content: {
    // minHeight: 310,
    // borderColor: "var(--light-grey-color)",
    borderColor: "#ccc",
    borderStyle: "solid",
    borderWidth: "8px 15px",
  },

  mb: { mb: 2 },

  boxCities: { display: { xs: "none", minMd: "flex" }, gap: 2, mb: 1 },

  boxCity: {
    border: "solid 1px #ccc",
    borderRadius: "15px",
    p: 0.6,
    cursor: "pointer",
    "&:hover": {
      border: "solid 1px  #3a3a3ade",
    },
  },

  ol: {
    listStyleType: "none",
    pl: 0,
    columnCount: 5, // кількість колонок
    columnGap: 6, // відступ між колонками
  },

  li: {
    display: { xs: "none", minMd: "flex" },
    "&:hover": {
      cursor: "pointer",
      color: "#ed6c02",
      // color: "var(--warning-color)",
      textDecoration: "underline",
    },
  },
};
export default styles;

/*// Box — це div, а він сам по собі ніколи не отримує фокус, фокус отримує внутрішній InputBase. Але якщо застосувати &:focus-within, то коли будь-який дочірній елемент отримує фокус (в нашому випадку InputBase), стилі застосуються до батька (Box).
"&:focus-within": {
  border: "solid 1px  #1d64ffde",
},  */
