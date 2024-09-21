import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register.vue'
import cv from '../views/cvView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'register',
    component: register
  },
  {
    path: '/cv',
    name: 'cv',
    component: cv,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
