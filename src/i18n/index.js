import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Якщо у тебе файли перекладів мають розширення .json, а ти імпортуєш без .json, то Vite не розпізнає:
import en from "./locales/en/translation.json";
import uk from "./locales/uk/translation.json";
import ru from "./locales/ru/translation.json";

i18n
  .use(LanguageDetector) // автоматичне визначення мови браузера
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
      ru: { translation: ru },
    },
    lng: "uk", // мова по дефолту
    fallbackLng: "uk",
    detection: {
      // 👇 ось ці налаштування додають підтримку localStorage
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"], // зберігає в localStorage
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
