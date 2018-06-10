<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';
export default {
  name: 'App',
  computed: {
    icon () {
      return faCoffee;
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>
