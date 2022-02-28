import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ClientsLists from '../views/ClientsLists.vue'
import ClientForm from '../views/ClientForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newclient',
    name: 'ClientForm',
    component: ClientForm
  },
  {
    path: '/clientslists',
    name: 'ClientsLists',
    component: ClientsLists
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
