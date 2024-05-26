/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { useUserStore } from '@/stores/user'
import stores from '@/stores'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
})

// metodos para adicionar meta requerendo login em rotas personalizadas
const routes = router.options.routes
// encontrar rota com path login e alterar
routes.find((route, index) => {
  if (route.path === '/dashboard') {
    route.meta.requiresAuth = true
  }
})
//...

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore(stores)
  if (to.path === '/dashboard' && !await userStore.getIsLogged) {
    next('/login')
  }
  else {
    //rota permitida
    next();
  }
})

export default router