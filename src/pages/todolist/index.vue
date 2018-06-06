<template>
    <div class="wrapper">
        <tab></tab>

        <div class="content">
            <add></add>
            <item></item>
        </div>
        <!-- <div class="add">
            <add></add>
        </div> -->

        <!-- <div>
            <item></item>
        </div> -->

        <!-- <list>
            <item></item>
            <item></item>
            <item></item>
            <item></item>
        </list> -->
    </div>
</template>

<script>
import tab from '@/pages/todolist/_tab';
import add from '@/pages/todolist/_add';
import item from '@/pages/todolist/_item';
export default {
  name: 'todolist',
  components: {
    tab,
    add,
    item
  }
};
</script>

<style lang="scss" scoped>
@import "@/pages/todolist/_pages.scss";
.wrapper {
  width: 100%;
  height: 100vh;
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
  }
}
h1 {
  color: $blue;
}
</style>
