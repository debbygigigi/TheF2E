import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages/home.vue';
import todolist from '@/pages/todolist/index.vue';
import filter from '@/pages/filter/index.vue';
import codeList from '@/pages/codeList/index.vue';
import results from '@/pages/filter/_results';
import read from '@/pages/filter/_read';

Vue.use(Router);

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
    },
    {
      path: '/filter',
      name: 'filter',
      component: filter,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/',
          component: results
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'read/:id',
          component: read
        }
      ]
    },
    {
      path: '/codeList',
      name: 'codeList',
      component: codeList
    }
  ]
});
