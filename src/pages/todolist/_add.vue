<template>
    <div class="modal-add">
        <input v-if="!edit" type="text" placeholder="＋ Add Task" @focus="showItem">
        <item collapse mode="add" v-if="edit"></item>
    </div>
</template>

<script>
import item from '@/pages/todolist/_item';
import store from '@/store/index';

const newTodo = {
  id: 2,
  title: '',
  status: '',
  stared: false,
  deadline: null,
  file: null,
  comment: null
};
export default {
  components: {
    item
  },
  data () {
    return {
      newTodo
    };
  },
  computed: {
    edit () {
      return store.state.todolist.editId === 0;
    }
  },
  methods: {
    showItem () {
      store.dispatch('editTodo', 0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/pages/todolist/_pages.scss";

input {
  border: 2px solid $gray-medium;
  border-radius: 5px;
  width: 100%;
  height: 65px;
  padding: 18px 33px;
  font-size: $font-size-title;
  box-sizing: border-box;
  position: relative;
  font-family: $font-family-placeholder;
  &::placeholder {
    font-size: $font-size-title;
    line-height: 28px;
    color: $gray-medium;
    font-family: $font-family-placeholder;
  }
}
</style>
