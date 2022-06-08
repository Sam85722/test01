import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/test2',
      name: 'test2',
      component: () => import('../views/Test2View.vue')
    },
    {
      path: '/test3',
      name: 'test3',
      component: () => import('../views/Test3View.vue')
    },
    {
      path: '/json',
      name: 'Json',
      component: () => import('../views/AdvertiseMaintenance.vue')
    },
    {
      path: '/test4',
      name: 'test4',
      component: () => import('../views/Test4View.vue')
    },
    {
      path: '/json2',
      name: 'Json2',
      component: () => import('../views/AdvertiseMaintenance2.vue')
    },
  ]
})

export default router
