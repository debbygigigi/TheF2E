<template>
    <div id="app">
        <h1>hello</h1>
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
