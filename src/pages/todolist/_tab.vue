<template>
    <div class="tabs__wrapper">
        <ul class="tabs">
            <li
                :key="index"
                :class="{active: index == active}"
                v-for="(status, index) in statusList"
                @click="changeTab(index)">
                {{ status }}
                <span v-show="index == active"></span>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      active: 0,
      statusList: ['My Tasks', 'In Progress', 'Completed']
    };
  },
  methods: {
    changeTab (index) {
      this.active = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/pages/todolist/_pages.scss";
.tabs__wrapper {
  background: $blue;
}
.tabs {
  display: flex;
  margin: auto;
  max-width: $md;
  list-style: none;
  justify-content: space-between;

  li {
    padding: 24px;
    position: relative;
    line-height: 28px;
    font-size: $font-size-title;
    font-family: $font-family-title;
    cursor: pointer;
    &.active {
      color: $white;
    }
    span {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      border-bottom: 5px solid $blue-dark;
    }
  }
}
</style>
