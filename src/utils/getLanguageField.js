const getLanguageField = (lang) => {
  const langMap = {
    ru: "descriptionRu",
    uk: "description",
    en: "descriptionEn",
  };
  return langMap[lang] || "description";
};

export default getLanguageField;
