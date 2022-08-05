<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation, Pagination} from 'swiper';
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
const pagination = {
  clickable: true,
  type: 'bullets',
  bulletActiveClass: 'swiper--bullet--active',
  bulletClass: 'swiper--bullet',
  renderBullet(index, className: 'swiper--bullet') {
    return `<div class="${className}"></div>`
  }
}
const slides = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget  vulputate. Odio molestie ac tortor pellentesque elit congue. Sapien blandit nunc dictum praesent vel auctor. Tempus, quis aliquet tortor aliquet sit at at.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget  vulputate. Odio molestie ac tortor pellentesque elit congue. Sapien blandit nunc dictum praesent vel auctor. Tempus, quis aliquet tortor aliquet sit at at.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget  vulputate. Odio molestie ac tortor pellentesque elit congue. Sapien blandit nunc dictum praesent vel auctor. Tempus, quis aliquet tortor aliquet sit at at.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget  vulputate. Odio molestie ac tortor pellentesque elit congue. Sapien blandit nunc dictum praesent vel auctor. Tempus, quis aliquet tortor aliquet sit at at.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget  vulputate. Odio molestie ac tortor pellentesque elit congue. Sapien blandit nunc dictum praesent vel auctor. Tempus, quis aliquet tortor aliquet sit at at.',
]
</script>

<template>
  <div class="sixth-section">
    <div class="container">
      <h1>WHAT MY CLIENT ARE SAYING</h1>
      <swiper
        :modules="[Pagination]"
        :pagination="pagination"
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="my-swiper"
      >
        <swiper-slide v-for="slide in slides">{{ slide }}</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sixth-section {
  @apply flex flex-col items-center w-full py-100px;
  background: url('/images/photographer/sixth-section/bg.png')center bottom/cover no-repeat;
  // background: url('/images/krypto/first-section/background.png')center bottom/cover no-repeat;
  .container {
    @apply flex flex-col items-center w-full max-w-1110px px-10px;
    h1 {
      @apply text-36px font-700 text-black;
    }
  }
}
.my-swiper {
  @apply w-full max-w-1110px;
  cursor: grab;
}
.swiper--bullet {
  @apply ;
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.5;
  position: relative;
}
.swiper--bullet--active {
  opacity: 1;
  background-color: grey;
  &:after {
    content: '';
    width:70%;
    height: 70%;
    position: absolute;
    // top: 10%;
    // left: 10%;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    z-index: 9;
    border-radius: 50%;
    background: white;
  }
}
.swiper-pagination {
  @apply flex flex-row items-center space-x-10px justify-center;
}
.swiper-slide {
  @apply text-24px text-black font-400 pt-80px pb-50px leading-36px;
}
</style>
