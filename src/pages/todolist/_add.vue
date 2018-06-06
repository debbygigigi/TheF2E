<template>
    <div>
        <input type="text" placeholder="＋ Add Task">
    </div>
</template>

<script>
export default {};
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
