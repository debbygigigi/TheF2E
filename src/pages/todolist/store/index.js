import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  state: { // = data
    todos: [],
    editId: -1
  },
  getters: {
    todoTotal (state) {
      return state.todos.length;
    }
  },
  actions: {
    addTodo ({ commit, getters }, newTodo) {
      newTodo.id = getters.todoTotal + 1;
      commit('pushNewTodo', newTodo);
    },
    editTodo ({ commit }, id) {
      commit('changeEditId', id);
    },
    done ({ commit }) {
      commit('changeEditId', -1);
    }

  },
  mutations: {
    pushNewTodo (state, newTodo) {
      console.log(newTodo);
      state.todos.push(newTodo);
      console.log(state.todos);
    },
    changeEditId (state, id) {
      state.editId = id;
    }
  }
};
