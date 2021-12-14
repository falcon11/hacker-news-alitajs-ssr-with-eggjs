import { defineConfig } from 'alita';

export default defineConfig({
  // 目前开启 dynamicImport 和 ssr，服务端渲染资源文件路径有问题
  // dynamicImport: {},
  ssr: {
    // dev 模式 服务端渲染交给 eggjs 处理
    devServerRender: false,
  },
  hash: true,
  outputPath: '../public',
  manifest: {
    fileName: '../../config/manifest.json',
    // publicPath: 'http://localhost:10000/',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:7001',
    },
  },
  dynamicImport: {},
  // exportStatic: {},
  publicPath: process.env.NODE_ENV === 'development' ? process.env.PUBLIC_PATH : '/public/',
});
