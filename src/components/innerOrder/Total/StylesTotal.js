export const styles = {
  section: {
    border: "1px dashed grey",
    mt:2,
    mb: 2,
    borderRadius: 2,
    width: "100%",
  },

  stackFooter: { maxWidth: "auto",  p: 2 },

  boxFooter: { display: "flex", justifyContent: "space-between" },

  footerTypography: { display: "flex", alignItems: "center" },

  footerAttachMoneyIcon: { fontSize: "medium", pt: 0.4 },

  boxDiscount: { mb: 2, display: "flex", justifyContent: "space-between" },

  discount: { display: "flex", alignItems: "center" },

  discountBackground: {
    backgroundColor: "var(--warning-color)",
    color: "var(--white-color)",
    borderRadius: "2rem",
    pl: 0.3,
    pr: 0.3,
    mr: 1,
  },

  moneyIcon: { fontSize: "medium", pt: 0.5 },

  typographyBold: { display: "flex", alignItems: "center", fontWeight: "bold" },

  botton: {
    mb: 1,
    width: "100%",
    backgroundColor: "var(--blue-color)",
    color: "var(--white-color)",
    ":hover": {
      backgroundColor: "var(--blue-color-hover)",
    },
  },
};
