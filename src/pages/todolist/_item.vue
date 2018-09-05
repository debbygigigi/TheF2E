<template>
    <div class="item__wrapper" :class="{'starred': todoData.starred}">
        <div
            :class="{'collapse': collapse}"
            class="item__header">
            <div class="header__main">
                <label v-if="mode === 'edit'" class="checkbox__wrapper" :for="'checkbox' + todoData.id">
                    <input type="checkbox" v-model="todoData.isCompleted" :id="'checkbox' + todoData.id">
                    <div class="checkbox__indicator"></div>
                </label>
                <input v-if="collapse" class="input" v-model="todoData.title" type="text" placeholder="Type Something Here…" :class="{done: todoData.isCompleted}">
                <span v-if="!collapse" class="input" :class="{done: todoData.isCompleted}"> {{ todoData.title }}</span>
                <a v-if="mode === 'edit'" href="" class="star" @click.prevent="starTodo">
                    <font-awesome-icon :icon="[todoData.starred ? 'fas' : 'far', 'star']"
                                       :class="{'starred': todoData.starred}"/>
                </a>
                <a v-if="mode === 'edit'" href="" class="edit" @click.prevent="editTodo">
                    <font-awesome-icon icon="pencil-alt" />
                </a>
            </div>
            <div v-if="!collapse" class="header__icon">
                <span v-if="todoData.deadline.date" class="icon calender-icon">
                    <font-awesome-icon :icon="['far', 'calendar-alt']" />
                    <span>{{ deadlineFormat }}</span>
                </span>
                <font-awesome-icon v-if="todoData.files.length !== 0" class="icon" :icon="['far', 'file']" />
                <font-awesome-icon v-if="todoData.comment" class="icon" :icon="['far', 'comment-dots']" />
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
                            <el-date-picker
                                v-model="todoData.deadline.date"
                                type="date"
                                placeholder="yyyy/mm/dd">
                            </el-date-picker>
                            <el-time-picker
                                arrow-control
                                v-model="todoData.deadline.time"
                                :picker-options="{
                                    selectableRange: '18:30:00 - 20:30:00'
                                }"
                                placeholder="hh:mm">
                            </el-time-picker>
                        </div>
                    </li>
                    <li>
                        <div class="body__title">
                            <font-awesome-icon :icon="['far', 'file']" />
                            File
                        </div>
                        <div class="body__content">
                            <div class="file-list">
                                <div class="file-item" v-for="(file, index) in todoData.files" :key="index">
                                    <p class="file-item__name">{{ file.name }}</p>
                                    <small class="file-item__date">{{ handleFilesDate(file.lastModifiedDate) }}</small>
                                </div>
                                <label class="btn-file file-btn" for="input_file">
                                    ＋
                                    <input type="file" name="" id="input_file" @change="handleFile($event)">
                                </label>
                            </div>
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
import store from '@/store/index';
import { DatePicker, TimePicker } from 'element-ui';
import Vue from 'vue';
const moment = require('moment');

Vue.use(DatePicker);
Vue.use(TimePicker);

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
        isCompleted: false,
        starred: false,
        deadline: {
          date: null,
          time: null
        },
        files: [],
        comment: null
      }
    };
  },
  computed: {
    collapse () {
      return this.todoData.id === store.state.todolist.editId;
    },
    deadlineFormat () {
      // this.todoData
      return moment(moment().format(this.todoData.deadline.time)).format('M/d');
    }
  },
  mounted () {
    if (this.mode === 'edit') {
      Object.assign(this.todoData, this.todo);
    }
  },
  methods: {
    handleFile ($event) {
      this.todoData.files.push($event.target.files[0]);
    },
    handleFilesDate (date) {
      if (!date) {
        return null;
      }
      moment(date).fromNow();
      return moment(date).fromNow();
    },
    cancel () {
      store.dispatch('done');
    },
    editTodo () {
      store.dispatch('editTodo', this.todoData.id);
    },
    starTodo () {
      this.todoData.starred = !this.todoData.starred;
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

    &.starred {
      background: $orange-light;
    }
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
        .icon {
          margin-right: 16px;
        }
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
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      &.done {
        text-decoration: line-through;
      }

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

      .fa-star {
        transition: all 0.5s;
      }

      .starred {
        color: $orange;
      }
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

// file
.file-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .file-item {
    max-width: 120px;
    margin-right: 24px;
    &__name {
      white-space: nowrap;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 140px;
      font-size: 16px;
    }
    &__date {
      white-space: nowrap;
      font-size: 16px;
      color: $gray-dark;
    }
  }
  .file-btn {
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
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background: $gray-dark;
    }
    input[type="file"] {
      display: none;
    }
  }
}

.comment-text {
  background: $white;
  width: 100%;
  height: 120px;
  border: none;
  padding: 8px 16px;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    font-family: $font-family-placeholder;
    color: $gray-medium;
  }
}
</style>
