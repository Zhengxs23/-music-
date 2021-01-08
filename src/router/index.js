import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ReCommend',
    component: () => import('../views/ReCommend.vue')
  },
  {
    path:'/hotsong',
    name:'Hotsong',
    component:()=>import('../views/Hotsong.vue')
  }
]

const router = new VueRouter({
  model:'hash',
  routes
})

export default router
