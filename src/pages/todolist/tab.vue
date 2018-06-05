<template>
    <div>
        <ul class="tabs">
            <li
            :key="index"
            :class="{active: index == active}"
            v-for="(status, index) in statusList">
                {{ status }}
                <span v-show="index == active"></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      active: 0,
      statusList: ["My Tasks", "In Progress", "Completed"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/pages/todolist/_pages.scss";
.tabs {
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 0 180px;
  background: $blue;
  margin: 0;
  li {
    padding: 24px;
    position: relative;
    line-height: 28px;
    font-size: $font-title;
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
