const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  pwa: {
    disable: false,
    dest: "public",
    runtimeCaching,
  },
});
