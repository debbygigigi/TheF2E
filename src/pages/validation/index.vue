<template lang="pug">
.root
    .process-bar
    .title
        h1 Create Account
        h2 Glad to see you here!
    step1
</template>

<script>
export default {
  components: {
    step1: require('@/pages/validation/step1').default
  },
  data () {
    return {
      step: 1
    };
  }
};
</script>

<style lang="sass" scoped>
@import '@/pages/validation/main.sass'
.root
    max-width: 460px
    margin: auto
    .title
        text-align: center
</style>
