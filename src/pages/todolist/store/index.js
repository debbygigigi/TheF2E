import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const defaultTodos = [
  {
    id: 1,
    title: '123',
    isCompleted: false,
    starred: false,
    deadline: {
      date: null,
      time: null
    },
    files: [],
    comment: null
  },
  {
    id: 2,
    title: '456',
    isCompleted: false,
    starred: false,
    deadline: {
      date: null,
      time: null
    },
    files: [],
    comment: null
  }
];

export default {
  state: { // = data
    todos: defaultTodos,
    editId: -1
  },
  getters: {
    todoTotal (state) {
      return state.todos.length;
    },
    todoInProgress (state) {
      return state.todos.filter(todo => todo.isCompleted === false);
    },
    todoCompleted (state) {
      return state.todos.filter(todo => todo.isCompleted === true);
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
    },
    updateList ({ commit }, newList) {
      commit('updateList', newList);
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
    },
    updateList (state, newList) {
      Vue.set(state, 'todos', newList);
      // this.$set(vm.userProfile, 'age', 27)
      // state.todos = newList;
      console.log(state.todos);
    }
  }
};
