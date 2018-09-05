<template>
    <div class="wrapper">
        <tab></tab>
        <div class="content">
            <add></add>
            <draggable v-model="todos" @start="drag=true" @end="drag=false">
                <item v-for="todo in todos" :key="todo.id" mode="edit" class="item" :todo="todo"></item>
            </draggable>
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
    return {};
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
        return store.state.todolist.todos;
      },
      set (value) {
        store.dispatch('updateList', value);
      }
    },
    nowEdit () {
      return store.state.todolist.editId;
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
  }
}
h1 {
  color: $blue;
}
</style>
