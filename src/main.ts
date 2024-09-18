import { createSSRApp } from 'vue'
import { routeInterceptor, prototypeInterceptor } from '@/interceptors'
import store from '@/store'
import App from '@/App.vue'
import 'core-js/actual/array/iterator';
import 'core-js/actual/promise';
import 'core-js/actual/object/assign';
import 'core-js/actual/promise/finally';
import 'uno.css'
import '@/style/index.scss'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(routeInterceptor)
  app.use(prototypeInterceptor)
  return {
    app,
  }
}
