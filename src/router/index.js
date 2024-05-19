/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { useUserStore } from '@/stores/user'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import stores from '@/stores'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      userStore.loginpersist(user)
      console.log('User is logged in')
      next( )
    } else {
      console.log('User is logged out')
      userStore.$patch({ accessToken: null })
      console.log(userStore.accessToken)
      if (to.path === '/dashboard' && !userStore.isLogged)
        next('/login')
      else
        next();
    }
  })
}
)
export default router