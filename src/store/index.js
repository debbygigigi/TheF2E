import todolist from '@/pages/todolist/store/index';
import filter from '@/pages/filter/store/filter';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todolist,
    filter
  }
});

export default store;
