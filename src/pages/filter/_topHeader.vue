<template lang="pug">
header
    .logo
        a(href="/#/filter")
            img(src="https://hexschool.github.io/THE_F2E_Design/week2-filter/assets/logo.svg", alt="")
    .search-input
        el-input(type="text", placeholder="Explore your own activities", prefix-icon="el-icon-search", v-model="keyword", @change="search")
</template>

<script>
import store from '@/store/index';
export default {
  computed: {
    keyword () {
      return store.state.filter.filters.keyword;
    }
  },
  methods: {
    search (value) {
      store.dispatch('setFilters', {
        name: 'keyword',
        value: value
      });
    }
  }
};
</script>

<style lang="sass" scoped>
@import @/pages/filter/main.sass

header
    display: flex
    align-items: center
    @media screen and (max-width: $break-mobile)
        flex-direction: column
    .logo
        display: flex
        align-items: center
        height: 92px
        background-color: $purple-dark
        padding-left: 78px
        padding-right: 78px
        @media screen and (max-width: $break-mobile)
            text-align: center
            justify-content: center
            height: 69px
            width: 100%
            padding-left: 0
            padding-right: 0
    .search-input
        padding-left: 42px
        display: flex
        align-items: center
        background-color: $purple-dark
        width: 100%
        height: 92px
        @media screen and (max-width: $break-mobile)
            justify-content: center
            background-color: $gray-light
            height: 55px
            padding-left: 0
        .el-input
            max-width: 388px

</style>
