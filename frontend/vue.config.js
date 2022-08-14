const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
// アセットはLaravelのpublic/appディレクトリ配下に作成される
  outputDir: '../backend/public/app',

// app配下にjs, cssなどが置かれるので、publicPathを調整
publicPath: '/app',

pages: {
// appのエントリポイント、テンプレート、出力先を調整
  app: {
    entry: 'src/main.js',
    template: 'templates/base.html',
    filename: '../../resources/views/spa/app.blade.php',
  },
},
}
