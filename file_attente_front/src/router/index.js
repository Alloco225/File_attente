import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import ClientsLists from '../views/ClientsLists.vue'
import ClientForm from '../views/ClientForm.vue'
import CodeView from '../views/CodeView.vue'
import AdminPage from '../views/AdminPage.vue'
import Login from'../views/Login.vue'



const routes = [
  // {
  //   path: '/newclient',
  //   name: 'Home',
  //   component: Home
  // },


  {
    path:'/codeview',
    name:"CodeView",
    component:CodeView

  },
  {
    path: '/',
    name: 'ClientForm',
    component: ClientForm,
   
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
   
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
   
  },
  {
    path: '/clientslists',
    name: 'ClientsLists',
    component: ClientsLists
  },
  {
    path: '/adminpage',
    name: 'AdminPage',
    component: AdminPage
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
