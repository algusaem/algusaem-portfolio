export const checkLanguage = () => {
  try {
    const lang = localStorage.getItem("lang");
    return lang ? lang : "es";
  } catch (error) {
    return "en";
  }
};
