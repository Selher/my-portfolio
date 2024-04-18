import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LaCabra from '../views/LaCabra.vue'
import Trapholt from '../views/Trapholt.vue'
import Infographic from '../views/Infographics.vue'
import Sustainia from '@/views/Sustainia.vue'
import Invitation from '@/views/Invitation.vue'
import Reops from '@/views/Reops.vue'

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
      
      component: () => import('../views/Invitation.vue')

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
