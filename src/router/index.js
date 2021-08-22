import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/wallets',
    name: 'Wallets',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Wallets.vue')
  },
  {
    path: '/wallets/recommendations/:recommendedData',
    name: 'Recommendations',
    component: () => import(/* webpackChunkName: "recommendations" */ '../views/Recommendations.vue'),
    props: route => {
      return {
        recommendedData: route.params.recommendedData
      }
    }
  },
  {
    path: '/question/:question',
    name: 'Questions',
    component: () => import(/* webpackChunkName: "recommendations" */ '../views/Question.vue'),
    props: route => {
      console.log(this)
      return {
        questionName: route.params.question
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
