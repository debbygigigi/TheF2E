<template lang="pug">
.code-list
    el-card.box-card
        div(v-for="result in results")
            a(:src="result.url") {{ result.url }}
            p {{ result.url }}
            el-tag(v-for="tag in result.tag.split(',')")
                | {{ tag }}
</template>

<script>
import axios from 'axios';
const urlMetadata = require('url-metadata');

export default {
  data () {
    return {
      results: []
    };
  },
  created () {
    const api = 'https://www.thef2e.com/api/codeList';
    axios.get(api).then(res => {
      this.results = res.data;
    });
  }
};
</script>

<style lang="sass" scoped>
.box-card
    width: 480px
</style>
