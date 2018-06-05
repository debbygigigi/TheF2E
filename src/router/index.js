import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home.vue'
import todolist from '@/pages/todolist/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    }
  ]
})
