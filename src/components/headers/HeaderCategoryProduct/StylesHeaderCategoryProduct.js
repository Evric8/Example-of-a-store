export const styles = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    mb: 1,
    backgroundColor: "#bfb6b6",
    alignItems: "center",
  },

  box: { display: { xs: "flex",sm:'block', smMax: "flex" }, justifyContent: "start", gap: 1, ml: 1, mr: 1 },

  bold: { fontWeight: "bold" },

  opacity: { opacity: 0.5 },

  alignItems: { display: "flex", gap: 1, alignItems: "center" },

  SyncAltIcon: {
    transform: "rotate(90deg)",
    border: "1px solid",
    opacity: 0.5,
    "&:hover": { opacity: 0.8 },
  },
};
