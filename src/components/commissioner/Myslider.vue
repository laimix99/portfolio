<script setup>
  // import { ref, computed, reactive, onBeforeMount, onMounted } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation,} from 'swiper';
  import 'swiper/css';

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  }
}) 
const navigation = {
  nextEl: '.next',
  prevEl: '.prev',
}
// const swiper = new Swiper('.swiper', {
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
// });
</script>

<template>
  <div class="my-slider">
    <button class="next">
      <img  src="/images/krypto/my-slider/next.png " alt="">
    </button>
    <button class="prev  ">
      <img class="" src="/images/krypto/my-slider/prev.png" alt="">
    </button>
    <!-- <p>{{ viewSlides }} x {{ height }}</p> -->
    <swiper
      :modules="[Navigation]"
      :navigation="navigation"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="my-swiper"
    >
      <swiper-slide v-for="slide in slides" class="slide">
        <slot v-bind:slide="slide" />
      </swiper-slide>

    </swiper>
  </div>
</template>

<style scoped lang="scss">
.my-slider {
  @apply relative h-full;
  @media screen and (max-width: 991px) {
    @apply h-800px;
  }
  .next {
    @apply p-10px rounded-1/2 absolute right-0 top-1/2;
    background: #140E36;
    &:hover {
      box-shadow: 0px 0px 40px rgba(20, 14, 54, 0.4);
    }
    @media screen and (max-width: 991px) {
      @apply right-80px;
    }
    @media screen and (max-width: 767px) {
      @apply hidden;
    }
    @media screen and (max-width: 479px) {
      @apply -top-40px right-120px;
    }
    img {
      @apply w-24px h-24px;
      // @media screen and (max-width: 767px) {
      //   @apply w-15px h-15px;
      // }
    }
  }
  .prev {
    @apply p-10px rounded-1/2 absolute left-0 top-1/2;
    background: #140E36;
    &:hover {
      box-shadow: 0px 0px 40px rgba(20, 14, 54, 0.4);
    }
    @media screen and (max-width: 991px) {
      @apply left-80px;
    }
    @media screen and (max-width: 767px) {
      @apply hidden;
    }
     @media screen and (max-width: 479px) {
      @apply -top-40px left-120px;
    }
    img {
      @apply w-24px h-24px;
      // @media screen and (max-width: 767px) {
      //   @apply w-15px h-15px;
      // }
    }
  }
  .my-swiper {
    max-width: 900px;
    height: 100%;
    @media screen and (max-width: 991px) {
      @apply max-w-400px h-800px;
    }
    @media screen and (max-width: 767px) {
      @apply max-w-400px;
    }
    @media screen and (max-width: 479px) {
      @apply max-w-350px;
    }
    // @media screen and (max-width: 767px) {
    //   @apply max-w-300px;
    // }
    
    .slide {
      height: 100%;
    }
  }
}

</style>

