<script setup>
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

</script>

<template>
  <div class="my-slider relative">
    <button class="next p-20px rounded-1/2 absolute -right-100px top-1/2">
      <img class="w-24px h-24px " src="/images/krypto/my-slider/next.png" alt="">
    </button>
    <button class="prev  p-20px rounded-1/2 absolute -left-100px top-1/2">
      <img class="w-24px h-24px" src="/images/krypto/my-slider/prev.png" alt="">
    </button>
    <swiper
      :modules="[Navigation]"
      :navigation="navigation"
      :slides-per-view="3"
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
.next {
  background: rgb(255, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 0px 40px rgba(239, 68, 59, 0.4);
  }
}
.prev {
  background: rgb(255, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 0px 40px rgba(239, 68, 59, 0.4);
  }
}
  .my-swiper {
    max-width: 1100px;
    height: 100%;
    .slide {
      height: 100%;

    }
  }
</style>