<template lang="pug">
    .filters
        .filters-item.locations
            .top
                h3 Locations
            .bottom
                el-select(v-model="locationValue", filterable, placeholder="選擇區域", @change="setLocationFilter")
                    el-option(v-for="item in options", :key="item.value", :label="item.label", :value="item.value")
        .filters-item
            .top
                h3 Categories
            .bottom
                el-checkbox(v-model="categories.checkedAll", @change="categoriesCheckAll")
                    | All
                el-checkbox-group(v-model="categoriesValue")
                    el-checkbox(v-for="option in categories.options", :label="option", :key="option", @change="categoriesCheckOption")
</template>

<script>
import refLocations from '@/pages/filter/locations';
import store from '@/store/index';

export default {
  data () {
    return {
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
    locationValue () {
      return store.state.filter.filters.location;
    }
  },
  methods: {
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
        // padding: 24px 40px
        &:not(:last-of-type)
            border-bottom: 1px solid $gray-medium
        .top
            padding: 24px 40px 12px
        .bottom
            padding: 12px 40px 24px
            @media screen and (max-width: $break-mobile)
                display: none
            h3
                font-size: 20px
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
</style>
