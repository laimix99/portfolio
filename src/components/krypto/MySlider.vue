<script setup>
import { ref, computed, reactive, onBeforeMount, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation,} from 'swiper';
import 'swiper/css';
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
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
const viewSlides = computed(() => {
  
  if (width.value <= 768) {
    return 1;
  }
  if (width.value <= 1000) {
    return 2;
  }
  if (width.value > 1000) {
    return 3;
  }
  // return width;
})
</script>

<template>
  <div class="my-slider relative">
    <button class="next p-20px rounded-1/2 absolute -right-100px top-1/2">
      <img class="w-24px h-24px " src="/images/krypto/my-slider/next.png" alt="">
    </button>
    <button class="prev  p-20px rounded-1/2 absolute -left-100px top-1/2">
      <img class="w-24px h-24px" src="/images/krypto/my-slider/prev.png" alt="">
    </button>
    <!-- <p>{{ viewSlides }} x {{ height }}</p> -->
    <swiper
      :modules="[Navigation]"
      :navigation="navigation"
      :slides-per-view="viewSlides"
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
  @media screen and (max-width: 1300px) {
    .my-swiper {
      width: 100%;
      max-width: 850px;
    }
  }
  .prev {
    padding: 10px;
    left: -60px;
  }
  .next {
    padding: 10px;
    right: -60px;
  }
  @media screen and (max-width: 1000px) {
    .my-swiper {
      max-width: 620px;
    }
  }
  @media screen and (max-width: 767px) {
    .my-swiper {
      max-width: 300px;
    }
    .prev {
      padding: 8px;
      left: -50px;
    }
    .next {
      padding: 8px;
      right: -50px;
    }
  }
  @media screen and (max-width: 479px) {
    .my-swiper {
      max-width: 250px;
      // height: 100px;
    }
    // .prev {
    //   display: none;
    // }
    // .next {
    //   display: none;
    // }
  }
</style>