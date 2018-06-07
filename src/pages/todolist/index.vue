<template>
    <div class="wrapper">
        <tab></tab>
        <div class="content">
            <add></add>
            <item class="item" :todo="todo" v-for="(todo, index) in todos" :key="index"
                  mode="edit"></item>
        </div>
    </div>
</template>

<script>
import tab from '@/pages/todolist/_tab';
import add from '@/pages/todolist/_add';
import item from '@/pages/todolist/_item';

import Eventbus from '@/helper/eventbus';
import store from '@/pages/todolist/store/index';

const todos = [
  {
    id: 1,
    title: 'abc',
    status: 'inProgress',
    stared: false,
    deadline: '6/10 12:00',
    file: '',
    comment: '123'
  },
  {
    id: 2,
    title: 'abcdedede',
    status: 'inProgress',
    stared: false,
    deadline: '6/10 12:00',
    file: '',
    comment: '123'
  }
];

export default {
  name: 'todolist',
  data () {
    return {};
  },
  components: {
    tab,
    add,
    item
  },
  computed: {
    todos () {
      return store.state.todos;
    },
    nowEdit () {
      return store.state.editId;
    }
  },
  mounted () {
    Eventbus.$on('editTodo', id => {
      this.nowEdit = id;
    });
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
