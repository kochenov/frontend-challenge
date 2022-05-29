const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/frontend-challenge/",
  // devServer: {
  //   proxy: "https://api.thecatapi.com",
  //   //   //secure: false,
  //   //   //logLevel: "debug",
  // },
  transpileDependencies: true,
  assetsDir: "static",

  productionSourceMap: false,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/variables.scss";`,
      },
    },
  },
});
