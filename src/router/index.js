import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "about" */ '../views/Books.vue')
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import(/* webpackChunkName: "about" */ '../views/Authors.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import(/* webpackChunkName: "about" */ '../views/Members.vue')
  },
  {
    path: '/books/:id',
    name: 'bookEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookEdit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
