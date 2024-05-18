/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import fireApp from './firebase'

export function registerPlugins(app) {
  app
    .use(fireApp)
    .use(vuetify)
    .use(router)
    .use(pinia)
}
