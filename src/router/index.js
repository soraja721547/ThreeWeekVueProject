import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      //  @/ =  src/  (絕對路徑的寫法)
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/basic',
      name: 'basic',
      component: () => import('@/views/BasicView.vue'),
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('@/views/CalculatorView.vue'),
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('@/views/TodolistView.vue'),
    },
    {
      path: '/dynamicrouter',
      name: 'dynamicrouter',
      component: () => import('@/views/DynamicRouterView.vue'),
      children: [
        {
          path: 'try/:id',
          name: 'tryParams',
          component: () => import('@/views/DynamicRouterView/TryParams.vue')
        }
      ],
    },
    {
      path: '/:domain(.*)*',
      name: 'NotFound',
      component: () => import('@/views/Error404View.vue'),
    },
  ],
})

export default router
