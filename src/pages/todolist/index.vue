<template>
    <div class="wrapper">
        <tab @changeTab="changeTab"></tab>
        <div class="content">
            <add></add>
            <draggable v-model="todos" @start="drag=true" @end="drag=false">
                <item v-for="todo in todos" :key="todo.id" mode="edit" class="item" :todo="todo"></item>
            </draggable>
            <div class="calculate">{{ tasksCount }} tasks left</div>
        </div>
    </div>
</template>

<script>
import tab from '@/pages/todolist/_tab';
import add from '@/pages/todolist/_add';
import item from '@/pages/todolist/_item';
import draggable from 'vuedraggable';
import store from '@/store/index';

export default {
  name: 'todolist',
  data () {
    return {
      filter: ''
    };
  },
  components: {
    tab,
    add,
    item,
    draggable
  },
  computed: {
    todos: {
      get () {
        switch (this.filter) {
          case 'completed':
            return store.getters.todoCompleted;
          case 'inProgress':
            return store.getters.todoInProgress;
          default:
            return store.state.todolist.todos;
        }
      },
      set (value) {
        store.dispatch('updateList', value);
      }
    },
    nowEdit () {
      return store.state.todolist.editId;
    },
    tasksCount () {
      return this.todos.length;
    }
  },
  methods: {
    changeTab (filter) {
      this.filter = filter;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/pages/todolist/_pages.scss";
.wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: $bg-gray;
  .add {
    text-align: center;
    margin-top: 24px;
  }

  .content {
    max-width: $md;
    margin: auto;
    padding-top: 24px;
    @media screen and (max-width: $md) {
      padding: 24px;
    }

    .item {
      margin: 8px 0;
    }

    .calculate {
      margin-left: 33px;
      font-family: $font-family-status;
      font-style: italic;
      color: $gray-medium;
      font-size: 24px;
    }
  }
}
h1 {
  color: $blue;
}
</style>
