<template>
    <div class="wrapper">
        <tab></tab>
        <!-- <add></add>
        <list>
            <item></item>
            <item></item>
            <item></item>
            <item></item>
        </list> -->
    </div>
</template>

<script>
import tab from '@/pages/todolist/tab.vue'

export default {
  name: 'todolist',
  components: {
    tab: tab
  }
}
</script>

<style lang="scss" scoped>
@import "@/pages/todolist/_pages.scss";

h1 {
  color: $blue;
}
</style>
