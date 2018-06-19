<template lang="pug">
    .filters
        .filters-item.locations(@click="activeTab = 'locations'", :class="{active: activeTab === 'locations'}")
            .top
                h3 Locations
                span.toggle
            transition(name="slide-fade")
                .bottom(v-if="showTab('locations')")
                    el-select(v-model="locationValue", filterable, placeholder="選擇區域", @change="setLocationFilter")
                        el-option(v-for="item in options", :key="item.value", :label="item.label", :value="item.value")
        .filters-item(@click="activeTab = 'categories'", :class="{active: activeTab === 'categories'}")
            .top
                h3 Categories
                span.toggle
            transition(name="slide-fade")
                .bottom(v-if="showTab('categories')")
                    el-checkbox(v-model="categories.checkedAll", @change="categoriesCheckAll")
                        | All
                    el-checkbox-group(v-model="categoriesValue", fill="#9013FE")
                        el-checkbox(v-for="option in categories.options", :label="option", :key="option", @change="categoriesCheckOption")
</template>

<script>
import refLocations from '@/pages/filter/locations';
import store from '@/store/index';

export default {
  data () {
    return {
      activeTab: '',
      locations: '',
      categories: {
        checkedAll: false,
        options: ['全天候開放', '免費參觀'],
        checkedValue: []
      },
      options: refLocations
    };
  },
  computed: {
    categoriesValue: {
      get () {
        return store.state.filter.filters.categories;
      },
      set (value) {
        store.dispatch('setFilters', {
          name: 'categories',
          value: value
        });
      }
    },
    locationValue: {
      get () {
        return store.state.filter.filters.location;
      },
      set (value) {
        store.dispatch('setFilters', {
          name: 'location',
          value: value
        });
      }
    }
  },
  methods: {
    showTab (tab) {
      return this.$mq === 'lg' || this.$mq === 'md' || this.activeTab === tab;
    },
    setLocationFilter (filterValue) {
      store.dispatch('setFilters', {
        name: 'location',
        value: filterValue
      });
    },
    categoriesCheckAll (val) {
      this.categoriesValue = val ? this.categories.options : [];
    },
    categoriesCheckOption (val) {
      let checkedCount = val.length;
      this.categories.checkedAll =
        checkedCount === this.categories.options.length;
    }
  }
};
</script>

<style lang="sass">
.el-checkbox
    width: 100%
    margin-left: 0 !important
    margin-bottom: 8px
    color: #000
    font-size: 16px
    .el-checkbox__inner
        width: 16px
        height: 16px
        border: none
</style>

<style lang="sass" scoped>
@import @/pages/filter/main.sass

.filters
    width: 300px
    background-color: $gray-light
    height: 100%
    flex: 0 0 auto
    @media screen and (max-width: $break-mobile)
        width: 100%
    .filters-item
        &:not(:last-of-type)
            border-bottom: 1px solid $gray-medium
        @media screen and (max-width: $break-mobile)
            background: $gray-medium
            border-bottom: 1px solid $gray-dark !important
        .top
            padding: 24px 40px 12px
            display: flex
            align-items: center
            justify-content: space-between
            @media screen and (max-width: $break-mobile)
                padding: 20px 40px
            h3
                margin: 0
            .toggle
                width: 17px
                height: 2px
                background: $gray-dark
                position: relative
                display: none
                transition: transform 0.4s ease
                &:after
                    position: absolute
                    content: ""
                    width: 17px
                    height: 2px
                    background: $gray-dark
                    transform: rotate(90deg)
                @media screen and (max-width: $break-mobile)
                    display: block
        .bottom
            padding: 12px 40px 24px
            h3
                font-size: 20px
            .el-select
                width: 100%
            .from, .to
                display: flex
                justify-content: flex-end
            span
                margin-right: 13px
                font-size: 16px
            .from
                margin-bottom: 8px
            .checkbox
                margin-bottom: 8px
            &.collapse
                .top
                background-color: $gray-medium
                padding: 24px 40px
        &.active
            background-color: $gray-light
            .top
                padding: 24px 40px 12px
            .toggle
                &:after
                    display: none

    .slide-fade-enter-active
        transition: all .3s ease

    .slide-fade-leave-active
        transition: all .3s ease-out

    .slide-fade-enter, .slide-fade-leave-to
        transform: translateY(-10px)
        opacity: 0
</style>
