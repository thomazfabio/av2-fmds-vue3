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


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
})

// Função para verificar o estado de autenticação
const checkAuth = () => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const userStore = useUserStore();
      if (user) {
        userStore.loginpersist(user);
        resolve(true);
      } else {
        resolve(false);
      }
      // Cancelar a inscrição após a primeira execução
      unsubscribe();
    }, (error) => {
      reject(error);
      unsubscribe();
    });
  });
};

// Roteamento antes de cada mudança de rota
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();

  try {
    const isLogged = await checkAuth();

    if (to.path === '/dashboard' && !userStore.isLogged) {
      next('/login');

    } else {
      next();
    }
  } catch (error) {
    console.error('Error checking authentication status:', error);
    next('/login');
  }
});
export default router