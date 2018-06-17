<template lang="pug">
.search
    h2.result-text Showing #[strong {{ resultsLength }}] results by…
    ul.tags
        li(v-for="tag in filterTags")
            span {{ tag.value }}
            i(@click="removeFilter(tag)") x
        li(v-for="tag in filterCategoriesTags")
            span {{ tag }}
            i(@click="removeFilter({key: 'categories', value: tag})") x
    .results
        .results-item(v-for="attraction in filterAttractions", @click="clickAttraction(attraction._id)")
            .img
                img(:src="attraction.Picture1", alt="這是圖片")
            .results-content
                h2(v-html="attraction.Name")
                p(v-html="attraction.Description")
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
    },
    resultsLength () {
      return store.getters.resultsTotal;
    },
    filterTags () {
      return store.getters.filterTags;
    },
    filterCategoriesTags () {
      return store.getters.filterCategoriesTags;
    }
  },
  methods: {
    clickAttraction (id) {
      store.dispatch('setReadAttraction', id);
      this.$router.push({ path: `/filter/read/${id}` });
    },
    removeFilter (tag) {
      store.dispatch('removeFilter', tag);
    }
  }
};
</script>

<style lang="sass">
.highlight
    background: yellow
</style>

<style lang="sass" scoped>
@import @/pages/filter/main.sass

.result-text
    font-size: 24px
    margin-bottom: 8px
    strong
        color: $purple
.tags
    display: flex
    margin-bottom: 24px
    color: $purple
    list-style: none
    padding: 0
    li
        border: 1px solid $purple
        border-radius: 100px
        padding: 8px 16px
        font-family: Roboto-Italic
        font-style: italic
        margin-right: 8px
    i
        margin-left: 8px
.results
    .results-item
        display: flex
        position: relative
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
        .link
            position: absolute
            width: 100%
            height: 100%
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
