import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages/home.vue';
import todolist from '@/pages/todolist/index.vue';
import filter from '@/pages/filter/index.vue';
import codeList from '@/pages/codeList/index.vue';
import results from '@/pages/filter/_results';
import read from '@/pages/filter/_read';

import adminOrder from '@/pages/adminOrder/index';
import adminOrderHome from '@/pages/adminOrder/home';
import adminOrderOrders from '@/pages/adminOrder/orders';
import adminOrderProduct from '@/pages/adminOrder/product';

import productGallery from '@/pages/productGallery/index';
import comicViewer from '@/pages/comicViewer/index';
import comicViewerHome from '@/pages/comicViewer/_home';
import comicViewerReading from '@/pages/comicViewer/_reading';

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
          path: '/',
          component: results
        },
        {
          path: 'read/:id',
          component: read
        }
      ]
    },
    {
      path: '/adminOrder',
      name: 'adminOrder',
      component: adminOrder,
      children: [
        {
          path: '/',
          name: 'adminOrderHome',
          component: adminOrderHome
        },
        {
          path: 'home',
          component: adminOrderHome
        },
        {
          path: 'orders',
          component: adminOrderOrders
        },
        {
          path: 'product',
          component: adminOrderProduct
        }
      ]
    },
    {
      path: '/productGallery',
      component: productGallery
    },
    {
      path: '/comicViewer',
      component: comicViewer,
      children: [
        {
          path: '/',
          name: 'comicViewerHome',
          component: comicViewerHome
        },
        {
          path: 'chapter/:id',
          component: comicViewerReading
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
