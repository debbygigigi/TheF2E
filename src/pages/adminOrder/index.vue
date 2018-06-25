<template>
    <div>
        <tab></tab>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import tab from '@/pages/adminOrder/_tab';
import home from '@/pages/adminOrder/home';
export default {
  components: {
    tab,
    home
  }
};
</script>

<style lang="sass" scoped>
@import @/pages/adminOrder/main.sass

.body
    padding: 30px 42px 42px
    background: $gray-white
    .wrapper
        max-width: 1280px
        margin: 0 auto
</style>
