export const styles = {
  box: {
    borderRadius: "20px",
    backgroundColor: "var(--light-grey-color)",
    padding: "1px 6px",
    fontSize: "1rem",
    textAlign: "end",
    border: "none",
    "&:hover": {
      backgroundColor: "var(--light-grey-color-hover)",
    },
  },
  select: {
    IconComponent: "",
    pr: 0,
    border: "none",
    backgroundColor: "transparent",
    "& .MuiSelect-select": {
      padding: 0,
    },
    "& fieldset": {
      border: "none",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  span: {
    display: "inline-block",
    "&:hover": {
      textDecoration: "line-through",
      color: "var(--red-color)",
    },
  },
};
