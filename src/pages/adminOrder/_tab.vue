<template lang="pug">
div.topHeader
    .container
        h1 Shoptime
        el-tabs.nav(v-model="activeName" @tab-click="handleClick")
            el-tab-pane(v-for="tab in tabs", :key="tab", :label="tab", :name="tab")
        h3 ADMIN
</template>

<script>
export default {
  data () {
    return {
      tabs: ['home', 'orders', 'product'],
      activeName: 'home'
    };
  },
  methods: {
    handleClick (tab, event) {
      this.$router.push({ path: `/adminOrder/${tab.name}` });
    }
  }
};
</script>

<style lang="sass">
.nav.el-tabs
    .el-tabs__header
        margin: 0
        .el-tabs__active-bar
            background: white
            height: 4px
        .el-tabs__item
            font-size: 16px
            color: #989898
            text-transform: uppercase
            &.is-active
                color: white
</style>

<style lang="sass" scoped>
@import @/pages/adminOrder/main.sass

.topHeader
    background: black
    padding: 0 42px
    border-bottom: 1px solid
    color: white
    .container
        max-width: 1280px
        margin: 0 auto
        display: flex
        align-items: center
        justify-content: space-between
        line-height: 70px
        height: 70px
        h1
            margin-right: 80px
            max-width: 120px;
            text-overflow: ellipsis;
            overflow: hidden;
        .el-tabs
            margin-right: auto

</style>
