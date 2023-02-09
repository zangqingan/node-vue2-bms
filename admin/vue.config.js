const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: 'expanded' }
      }
    }
  }
})
