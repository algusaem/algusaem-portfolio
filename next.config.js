/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n,
};

module.exports = nextConfig;
