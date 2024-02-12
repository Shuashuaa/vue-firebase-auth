import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginComp.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterComp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//Navigation Guard
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/login');
  } else {
    next();
  }
});

export default router
