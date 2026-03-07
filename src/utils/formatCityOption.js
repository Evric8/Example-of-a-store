export const formatCityOption = (option) => {
  const [before, after] = option.split("(");
  return {
    main: before.trim(),
    details: after?.replace(")", "").trim() || "",
  };
};