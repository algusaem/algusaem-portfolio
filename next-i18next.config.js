/** @type {import('next-i18next').UserConfig} */
const nextI18NextConfig = {
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    localeDetection: false,
  },
  localePath: "./locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

module.exports = nextI18NextConfig;
