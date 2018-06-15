<template lang="pug">
    .filters
      .filters-item.locations
        .top(@click="")
          h3 Locations
        .bottom
          select#filterLocations(name="locations", value="Taiwan")
      .filters-item
        .top
          h3 Dates
        .bottom
          .from
            span from
            input(type="date")
          .to
            span to
            input(type="date")
      .filters-item
        .top
          h3 Categories
        .bottom
          .checkbox
            input(type="checkbox", id="")
            label(for="") all
          .checkbox
            input(type="checkbox", id="")
            label(for="") Entertainment
          .checkbox
            input(type="checkbox", id="")
            label(for="") Food
          .checkbox
            input(type="checkbox", id="")
            label(for="") Learning
          .checkbox
            input(type="checkbox", id="")
            label(for="") Outdoors
</template>

<style lang="sass" scoped>
@import @/pages/filter/main.sass

.filters
    width: 300px
    background-color: $gray-light
    height: 100%
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
