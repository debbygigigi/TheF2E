<template lang="pug">
    .read
        el-breadcrumb
            el-breadcrumb-item.back(:to="{ path: '/filter' }")
                span Explore
            el-breadcrumb-item.title
                span {{ readAttraction.Name }}
        .article
            .img
                img(:src="readAttraction.Picture1", alt="這是圖片")
            .article-content
                h1 {{ readAttraction.Name || 123 }}
                .detail
                    span.name Ethan Foster
                    span.tag Entertainment
                .other
                    i 地點
                    span {{ readAttraction.Zone }}
                    i 日立
                    span {{ readAttraction.Opentime }}
                .content
                    | {{ readAttraction.Description }}
</template>

<script>
import store from '@/store/index';

export default {
  mounted () {
    console.log(this.$route.params.id);
    store.dispatch('setReadAttraction', this.$route.params.id);
  },
  computed: {
    readAttraction () {
      return store.getters.readAttraction;
    }
  }
};
</script>

<style lang="sass">
@import @/pages/filter/main.sass

.read
    .el-breadcrumb
        height: 48px
        background: $gray-light
        margin-bottom: 24px
        border-radius: 4px
        display: flex
        align-items: center
        font-size: 16px
        padding-left: 16px
        .el-breadcrumb__item > .is-link
            color: $purple
        .title
            color: $gray-medium
    .article
        display: flex
        flex-direction: column
        background-color: white
        box-shadow: 2px 5px 10px $gray-light
        .img
            width: 100%
            height: 352px
            img
                width: 100%
                height: 100%
                object-fit: cover
        .article-content
            padding: 24px 66px
            h1
                color: $purple
                font-size: 36px
                margin-bottom: 24px
                line-height: 36px
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
                margin-bottom: 24px
            .content
                font-size: 16px
                line-height: 24px
    </style>
