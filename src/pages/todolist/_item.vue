<template>
    <div class="item__wrapper">
        <div
            :class="{'collapse': collapse}"
            class="item__header">
            <div class="header__main">
                <label v-if="mode === 'edit'" class="checkbox__wrapper" :for="'checkbox' + todoData.id">
                    <input type="checkbox" :id="'checkbox' + todoData.id">
                    <div class="checkbox__indicator"></div>
                </label>
                <input v-if="collapse" v-model="todoData.title" class="input" type="text" placeholder="Type Something Here…">
                <span v-if="!collapse" class="input"> {{ todoData.title }}</span>
                <a v-if="mode === 'edit'" href="" class="star">
                    <font-awesome-icon :icon="['far', 'star']" />
                </a>
                <a v-if="mode === 'edit'" href="" class="edit" @click.prevent="editTodo">
                    <font-awesome-icon icon="pencil-alt" />
                </a>
            </div>
            <div v-if="!collapse" class="header__icon">
                <font-awesome-icon :icon="['far', 'file']" />
            </div>
        </div>
        <div v-if="collapse">
            <div class="item__body">
                <ul>
                    <li class="deadline">
                        <div class="body__title">
                            <font-awesome-icon :icon="['far', 'calendar-alt']" />
                            Deadline
                        </div>
                        <div class="body__content deadline__date">
                            <input type="text" placeholder="yyyy/mm/dd">
                            <input type="text" placeholder="hh:mm">
                        </div>
                    </li>
                    <li>
                        <div class="body__title">
                            <font-awesome-icon :icon="['far', 'file']" />
                            File
                        </div>
                        <div class="body__content">
                            <button class="btn-file">
                                ＋
                            </button>
                        </div>
                    </li>
                    <li>
                        <div class="body__title">
                            <font-awesome-icon :icon="['far', 'comment-dots']" />
                            Comment
                        </div>
                        <div class="body__content">
                            <textarea v-model="todoData.comment" class="comment-text" name="" id="" cols="30" rows="10" placeholder="Type your memo here..."></textarea>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="item__footer">
                <button class="btn-cancel" @click="cancel"><span>＋</span>Cancel</button>
                <button v-if="mode === 'add'" class="btn-add" @click="addTodo">＋ Add Task</button>
                <button v-if="mode === 'edit'" class="btn-add" @click="cancel">＋ Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import store from '@/pages/todolist/store/index';

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    todo: {
      type: Object,
      default: null
    },
    edit: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      todoData: {
        id: 0,
        title: '',
        status: '',
        stared: false,
        deadline: null,
        file: null,
        comment: null
      }
      //   collapse: false
    };
  },
  computed: {
    collapse () {
      return this.todoData.id === store.state.editId;
    }
  },
  mounted () {
    if (this.mode === 'edit') {
      Object.assign(this.todoData, this.todo);
    }
  },
  methods: {
    cancel () {
      store.dispatch('done');
    },
    editTodo () {
      store.dispatch('editTodo', this.todoData.id);
    },
    addTodo () {
      store.dispatch('addTodo', this.todoData);
      store.dispatch('done');
    },
    saveTodo () {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/pages/todolist/_pages.scss";
@import "@/pages/todolist/_checkbox.scss";

.item {
  &__wrapper {
    background: $gray-light;
    box-shadow: 0 4px 4px 0 $gray-medium;
    border-radius: 5px;
    overflow: hidden;
  }

  &__header {
    padding: 24px 32px;
    border-bottom: 2px solid $gray-medium;
    border-radius: 5px 5px 0 0;

    .header {
      &__main {
        display: flex;
      }
      &__icon {
        margin-top: 16px;
        padding-left: 40px;
        color: $gray-dark;
      }
    }

    .input {
      flex-grow: 1;
      font-size: $font-size-title;
      line-height: 28px;
      background: transparent;
      border: none;
      margin-left: 16px;
      margin-right: 16px;

      &:hover,
      &:focus {
        outline: none;
      }
    }

    .star,
    .edit {
      width: 24px;
      font-size: 24px;
      display: flex;
      align-items: center;
    }

    .star {
      color: $black;
    }

    .edit {
      margin-left: 32px;
      color: $blue;
    }
  }

  &__body {
    padding: 23px 72px;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .body {
      &__title {
        margin-bottom: 8px;
        font-family: $font-family-subtitle;
        font-size: $font-size-subtitle;
        line-height: 24px;
      }
      &__content {
        padding-left: 24px;
        margin-bottom: 24px;
      }
    }
  }

  &__footer {
    display: flex;
    button {
      border: none;
      flex: 1;
      height: 60px;
      font-size: $font-size-title;
      font-family: Roboto-Regular;
      &.btn-cancel {
        position: relative;
        background: $white;
        color: $red;
        span {
          transform: rotate(45deg);
        }
      }
      &.btn-add {
        background: $blue;
        color: $white;
      }
    }
  }
}

.deadline {
  &__date {
    input {
      padding: 8px 16px;
    }
  }
}

.btn-file {
  background: $gray-medium;
  width: 32px;
  height: 32px;
  color: #fff;
  border-radius: 2px;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 32px;
}

.comment-text {
  background: $white;
  width: 100%;
  height: 120px;
  border: none;

  &::placeholder {
    padding: 8px 16px;
    font-family: $font-family-placeholder;
    color: $gray-medium;
  }
}
</style>
