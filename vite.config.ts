import path from "node:path";
import dayjs from 'dayjs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// @see https://uni-helper.js.org/vite-plugin-uni-pages
import UniPages from '@uni-helper/vite-plugin-uni-pages'
// @see https://uni-helper.js.org/vite-plugin-uni-layouts
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
// @see https://github.com/uni-helper/vite-plugin-uni-platform
// 需要与 @uni-helper/vite-plugin-uni-pages 插件一起使用
import UniPlatform from '@uni-helper/vite-plugin-uni-platform'
// @see https://github.com/uni-helper/vite-plugin-uni-manifest
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniMiddleware from '@uni-helper/vite-plugin-uni-middleware'
import UniPlatformModifier from '@uni-helper/vite-plugin-uni-platform-modifier'
import Components from '@uni-helper/vite-plugin-uni-components'
import AutoImport from 'unplugin-auto-import/vite'
import { UniUIResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default async ({ command, mode }) => {
  const UnoCSS = (await import('unocss/vite')).default

  const { UNI_PLATFORM } = process.env

  console.log('UNI_PLATFORM -> ', UNI_PLATFORM)

  const env = loadEnv(mode, path.resolve(process.cwd(), 'env'))
  const {
    VITE_DELETE_CONSOLE,
    VITE_SHOW_SOURCEMAP,
    VITE_APP_PROXY,
  } = env
  console.log('环境变量 env -> ', env)

  return defineConfig({
    envDir: './env', // 自定义env目录
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [
      UniPages({
        dts: 'src/types/uni-pages.d.ts',
        routeBlockLang: 'json5',
      }),
      UniLayouts(),
      UniPlatform(),
      UniManifest(),
      uni(),
      UnoCSS(),
      UniMiddleware(),
      UniPlatformModifier(),
      ViteRestart({
        restart: ['vite.config.js'],
      }),
      Components({
        dts: true,
        resolvers: [UniUIResolver()]
      }),
      AutoImport({
        imports: ['vue', 'uni-app'],
        dts: 'src/types/auto-import.d.ts',
        dirs: [],
        eslintrc: { enabled: true },
        vueTemplate: true, // default false
      }),
      // h5环境增加 BUILD_TIME 和 BUILD_BRANCH
      UNI_PLATFORM === 'h5' && {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html.replace('%BUILD_TIME%', dayjs().format('YYYY-MM-DD HH:mm:ss'))
        },
      }
    ],
    define: {
      __UNI_PLATFORM__: JSON.stringify(UNI_PLATFORM),
      __VITE_APP_PROXY__: JSON.stringify(VITE_APP_PROXY),
    },
    build: {
      target: 'es6',
      cssTarget: 'chrome61',
      sourcemap: VITE_SHOW_SOURCEMAP === 'true', // 默认是false
      minify: mode === 'development' ? false : 'terser',
      terserOptions: {
        compress: {
          drop_console: VITE_DELETE_CONSOLE === 'true',
          drop_debugger: true,
        },
      },
    },
    optimizeDeps: {
      exclude: [
        'vue-demi',
      ],
    },
  })
}



