<template lang="pug">
.root
    top-header
    .body
      filters
      main
        .search
          h2.result-text Showing #[strong {{ resultsLength }}] results by…
          ul.tags
            li
              span Koahsiung
              i x
            li
              span Entertainment
              i x
        results
</template>

<script>
import topHeader from "@/pages/filter/_topHeader";
import filters from "@/pages/filter/_filters";
import results from "@/pages/filter/_results";
import store from "@/store/index";

export default {
  components: {
    topHeader,
    filters,
    results
  },
  data() {
    return {};
  },
  computed: {
    resultsLength() {
      return store.getters.resultsTotal;
    }
  }
};
</script>

<style lang="sass" scoped>
@import @/pages/filter/main.sass

.body
  display: flex
  padding: 0 40px
  @media screen and (max-width: $break-mobile)
    flex-direction: column
    padding: 0

main
    padding-top: 24px
    padding-left: 42px
    @media screen and (max-width: $break-mobile)
      padding: 24px 40px
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
</style>
