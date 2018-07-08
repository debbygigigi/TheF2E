<template lang="pug">
.reading
    .container
        .control
            .selection
                .topic My Hexschool
                span
                    font-awesome-icon.icon(:icon="['fas', 'caret-right']")
                select
                  option 1
                  option 2
                  option 3
                select
            .switch
                i 太陽
                i 月亮

        .viewer
          .prevBtn(@click="slidePrev", :class="{'disabled': activeIndex === 0}")
            font-awesome-icon.icon(:icon="['fas', 'angle-left']")
          .swiper(ref="viewer", :style="{'transform': swiperPosition}")
            .swiper-slide(v-for="i in 12", :style="swiperImage(i)", @mousedown="handleSwiperMouseDown", @mousemove="handleSwiperMouseMove", @mouseup="ifSwiping = false")
          .nextBtn(@click="slideNext", :class="{'disabled': activeIndex === pagesLength - 1}")
            font-awesome-icon.icon(:icon="['fas', 'angle-right']")

        .thumbs
          .swiper(ref="thumbs", :style="{'transform': thumbPosition}")
            .swiper-slide(v-for="(i, index) in 12", :class="{'active': index == activeIndex}", :style="swiperImage(i)" )
              .page(v-if="index !== activeIndex") {{ i | page }}
          .prevBtn
          .nextBtn

        .scrollbar
          .controlbar(:style="controlbarPosition")
          .left
          .right
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight';

fontawesome.library.add(faAngleLeft, faAngleRight, faCaretRight);

export default {
  components: {
    FontAwesomeIcon,
    swiper,
    swiperSlide
  },
  data () {
    return {
      activeIndex: 0,
      slideGap: 80,
      slideWidth: 620,
      ifSwiping: false,
      pagesLength: 12,
      thumbGap: 20,
      thumbWidth: 80,
      thumbAmount: 12,
      mouseDownPos: '',
      swiperOptionTop: {
        spaceBetween: 160,
        width: 620,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChangeTransitionEnd: () => {
            console.log(this.swiperTop.activeIndex);
            //   const swiperThumbs = this.$refs.swiperThumbs.swiper;
            this.swiperThumbs.slideTo(this.swiperTop.activeIndex, 500, false);
          }
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 20,
        slidesPerView: 7,
        // touchRatio: 0.2,
        width: 620,
        centeredSlides: true
        // slideToClickedSlide: true,
        // on: {
        //   click: function (event) {
        //     console.log(event);
        //     if (this.swiperThumbs.clickedIndex !== undefined) {
        //       this.swiperTop.slideTo(this.swiperThumbs.clickedIndex);
        //     }
        //   }
        // }
      }
    };
  },
  filters: {
    page (value) {
      if (String(value).length < 2) {
        return `0${value}`;
      } else {
        return value;
      }
    }
  },
  computed: {
    swiperPosition: {
      set () {},
      get () {
        let num =
          this.slideGap -
          this.slideWidth * this.activeIndex -
          this.slideGap * this.activeIndex;
        return `translate3d(${num}px, 0px, 0px)`;
      }
    },
    thumbPosition () {
      let index = 0;
      if (this.activeIndex < 3) {
        index = 0;
      } else if (this.activeIndex > this.pagesLength - 3) {
        index = this.pagesLength - 5;
      } else {
        index = this.activeIndex - 2;
      }
      let num = this.thumbGap - this.thumbWidth * index - this.thumbGap * index;
      return `translate3d(${num}px, 0px, 0px)`;
    },
    controlbarPosition () {
      let posX = 512 / 12 * (this.activeIndex + 1);
      return { left: posX + 'px' };
    }
  },
  mounted () {},
  methods: {
    swiperImage (num) {
      return `background-image:url('https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-${num}.png')`;
    },
    slidePrev () {
      if (this.activeIndex !== 0) {
        this.activeIndex -= 1;
      }
    },
    slideNext () {
      if (this.activeIndex !== this.pagesLength - 1) {
        this.activeIndex += 1;
      }
    },
    handleSwiperMouseDown (e) {
      console.log('down', e);
      this.ifSwiping = true;
    },
    handleSwiperMouseMove (e) {
      if (this.ifSwiping) {
        console.log('move', e.clientY);
      }
    },
    handleSwiperMouseUp (e) {
      if (this.ifSwiping) {
        console.log('move', e.clientY);
      }
    }
  }
};
</script>

<style lang="sass">
.swiper-wrapper
    width: calc(100% - 160px)
    margin: auto

.swiper-slide
    background-size: cover
    background-position: center
    // width: 100%

.swiper-button-prev, .swiper-button-next
    width: 80px;
    top: 0;
    height: 100%;
    cursor: pointer;
    z-index: 1;
    margin-top: 0;
.swiper-button-prev
    left: 0
.swiper-button-next
    right: 0;

.gallery-thumbs
    .swiper-slide
        // width: auto;
        // height: 100%;
        opacity: 0.4;
    .swiper-slide-active
        opacity: 1;

</style>

<style lang="sass" scoped>
@import '@/pages/comicViewer/main.sass'

$slideGap: 80px
$slideWidth: 620px
$thumbsWidth: 80px
$thumbsGap: 20px

*
    // border: 1px solid

.reading
    background: $gray
    min-height: 100vh
    padding: 32px

.container
    max-width: 780px
    width: 100%
    margin: auto
    .control
        display: flex
        justify-content: space-between
        padding: 0 80px
        .selection
            display: flex
    .viewer
      overflow: hidden
      position: relative
        // .gallery-top
        //     width: 100%
        //     height: 930px
        // .gallery-thumbs
        //     width:  620px
        //     height: 120px
        //     box-sizing: border-box
      .swiper
        height: 930px
        display: flex
        .swiper-slide
          background-size: cover
          background-position: center
          height: 100%
          width: $slideWidth
          margin-right: $slideGap
      .prevBtn, .nextBtn
        position: absolute;
        z-index: 1;
        top: 0
        width: 80px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        cursor: pointer
        &.disabled
          opacity: .5
          cursor: default
      .prevBtn
        left: 0
      .nextBtn
        right: 0

    .thumbs
      width: 620px
      margin: auto
      padding: 0 50px;
      box-sizing: border-box;
      overflow: scroll;
      height: 160px;
      padding-top: 30px;
      position: relative
      .swiper
        height: 120px
        display: flex
        .swiper-slide
          width: $thumbsWidth
          margin-right: $thumbsGap
          position: relative
          &.active
            border: 3px solid #000
          .page
            position: absolute
            top: -20px
            left: 50%
            transform: translate(-50%, 0)
            font-size: 14px
      .prevBtn, .nextBtn
        position: absolute
        width: 50px;
        height: 120px;
        background: rgba(0,0,0,0.80);
        top: 30px;
      .prevBtn
        left: 0
      .nextBtn
        right: 0

.scrollbar
  width: 620px
  height: 20px
  border: 4px solid #000000;
  border-radius: 3px;
  position: relative
  margin: 16px auto 0
  padding: 0 50px;
  box-sizing: border-box;
  .left, .right
    position: absolute
    top: 0
    width: 50px
    height: 100%
    background: #000
  .left
    left: 0
  .right
    right: 0
  .controlbar
    position: absolute;
    width: 90px
    height: 100%
    background: #000
    transition: 0.5s all

</style>
