const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    disable: true,
    dest: "public",
    runtimeCaching,
  },
});
