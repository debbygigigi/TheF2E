<template lang="pug">
    .results
        .results-item(v-for="attraction in filterAttractions")
            .img
                img(:src="attraction.Picture1", alt="這是圖片")
            .results-content
                h2  {{ attraction.Name }}
                p {{ attraction.Description }}
                .detail
                    span.name Ethan Foster
                    span.tag Entertainment
                .other
                    i 地點
                    span {{ attraction.Zone}}
                    i 日立
                    span {{ attraction.Opentime }}
</template>

<script>
import store from '@/store/index';
export default {
  created () {
    store.dispatch('getAttractions');
  },
  computed: {
    filterAttractions () {
      return store.getters.filterAttractions;
    }
  }
};
</script>

<style lang="sass" scoped>
@import @/pages/filter/main.sass

.results
    .results-item
        display: flex
        background-color: white
        box-shadow: 2px 5px 10px $gray-light
        margin-bottom: 24px
        cursor: pointer
        transition: all 0.2s
        &:last-of-type
            margin-bottom: 0
        &:hover
            transform: translateX(-4px)
        @media screen and (max-width: $break-tablet)
            flex-direction: column
        .img
          width: 220px
          flex: 1 0 auto
          @media screen and (max-width: $break-tablet)
            width: 100%
            height: 196px
          img
            width: 100%
            height: 100%
            object-fit: cover
        .results-content
          display: block
          padding: 24px 20px
          h2
            color: $purple
            line-height: 36px
            font-family: "Roboto-Bold"
            font-size: 24px
            margin-bottom: 16px
          p
            -webkit-line-clamp: 3
            -webkit-box-orient: vertical
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            margin-bottom: 16px
            line-height: 24px
          .detail
            margin-bottom: 16px
            .name
              font-family: Roboto-Bold
              font-size: 16px
              color: #000000
              margin-right: 20px
            .tag
              background: $gray-medium
              border-radius: 100px
              color: white
              padding: 0 16px
              line-height: 24px
              font-family: "Roboto-Italic"
              font-style: italic
          .other
            color: $gray-dark
            font-family: Roboto-Regular

</style>
