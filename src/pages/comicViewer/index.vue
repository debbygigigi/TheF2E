<template lang="pug">
.root
    top-header
    .body
        router-view

</template>

<script>
import topHeader from '@/pages/comicViewer/_topHeader';
export default {
  components: {
    topHeader
  }
};
</script>
