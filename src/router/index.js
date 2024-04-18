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
      path: '/lacabra',
      name: 'lacabra',
      
      component: () => import('../views/LaCabra.vue')

    },
    {
      path: '/trapholt',
      name: 'trapholt',
      
      component: () => import('../views/Trapholt.vue')

    },
    {
      path: '/infographics',
      name: 'infographics',
      
      component: () => import('../views/Infographics.vue')

    },
    {
      path: '/sustainia',
      name: 'sustainia',
      
      component: () => import('../views/Sustainia.vue')

    },
    {
      path: '/invitation',
      name: 'invitation',
      
      component: () => import('../views/Invitation.vue')

    },
    {
      path: '/reops',
      name: 'reops',
      
      component: () => import('../views/Reops.vue')

    },
    /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, */
    /* {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Projects.vue')
    } */
  ]
})

export default router
