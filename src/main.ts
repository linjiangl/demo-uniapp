import { createSSRApp } from 'vue'
import { routeInterceptor, prototypeInterceptor } from '@/interceptors'
import 'core-js/actual/array/iterator';
import 'core-js/actual/promise';
import 'core-js/actual/object/assign';
import 'core-js/actual/promise/finally';
import 'uno.css'
import * as Pinia from 'pinia'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  app.use(routeInterceptor)
  app.use(prototypeInterceptor)
  return {
    app,
    Pinia,
  }
}
