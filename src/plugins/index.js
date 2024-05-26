/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
// Firebase import para deixar disponivel para todos os componentes
import fireApp from './firebase'
// ...

import { useUserStore } from '@/stores/user'

export async function registerPlugins(app) {
  app.use(vuetify)
  app.use(pinia)
  const userStore = useUserStore();
  const auth = await userStore.checkAuth()
  app.use(router)
}
