<template lang="pug">
    .results
        .results-item(v-for="i in 5")
            .img
                img(src="https://fakeimg.pl/220/", alt="這是圖片")
            .results-content
                h2  Kogi Cosby sweater ethical.
                p Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.
                .detail
                    span.name Ethan Foster
                    span.tag Entertainment
                .other
                    i 地點
                    span Kaohsiung City
                    i 日立
                    span 2018/5/24 - 2018/5/31
</template>

<style lang="sass" scoped>
@import @/pages/filter/main.sass

.results
    .results-item
        display: flex
        background-color: white
        box-shadow: 2px 5px 10px $gray-light
        margin-bottom: 24px
        @media screen and (max-width: $break-tablet)
          flex-direction: column
        &:last-of-type
          margin-bottom: 0

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
