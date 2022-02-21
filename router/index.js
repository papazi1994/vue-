import Vue from  'vue'
import VueRouter from 'vue-router'
//import  Home from  '../view/Main.vue'


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Main',
     //component: import()
      /*按需引入方式*/
      component: () => import('../view/Main.vue'),
      children: [
          {
              path: '/home',
              name: 'home',
              component: () => import('../view/home')
          },
          {
              path: '/mall',
              name: 'mall',
              component: () => import('../view/mall')
          },
          {
              path: '/user',
              name: 'user',
              component: () => import('../view/user')
          },
          {
              path: '/page1',
              name: 'page1',
              component: () => import('../view/other/pageOne.vue')
          },
          {
              path: '/page2',
              name: 'page2',
              component: () => import('../view/other/pageTwo.vue')
          },
      ]
    },

]

const router = new VueRouter({
    /*路由匹配模式*/
    mode: 'history',
    routes
})

export default router
