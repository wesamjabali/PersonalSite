module.exports = {
  // To load PDF files.
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/pdf/[name].[ext]",
      });
  },
  transpileDependencies: ["vuetify"],
};
