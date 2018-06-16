<template lang="pug">
.root
    top-header
    .body
      filters
      main
        router-view
</template>

<script>
import topHeader from '@/pages/filter/_topHeader';
import filters from '@/pages/filter/_filters';
import results from '@/pages/filter/_results';
import read from '@/pages/filter/_read';

export default {
  components: {
    topHeader,
    filters,
    results,
    read
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
</style>
