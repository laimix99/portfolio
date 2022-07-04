<script setup>
import { ref, computed, reactive } from 'vue';
defineProps({
  item_data: {
    type: Object,
    default: () => {}
  },
   viewSlides: {
    type: Number,
  },
  margin: {
    type: Number
  },
})

</script>

<template>
<div class="cub flex flex-col justify-start items-start m-0 mt-84px w-full" :style="{marginRight: margin + '%', minWidth: currentSlideWidth + '%'}">
  <div class="cub-background w-full max-w-304px rounded-16px">
    <img class="w-full max-w-304px rounded-16px" :src="item_data.img" alt="">
  </div>
  <h1 class="m-0 pt-26px not-italic font-500px text-24px">{{item_data.name}}</h1>
  <p class="m-0 not-italic font-300 text-16px leading-24px pt-8px">{{item_data.age}}</p>
</div>
</template>

<style lang="scss" scoped>
.cub {
  &-background {
    background: #fff;
    img {
      filter: grayscale(1);
      &:hover {
        filter: grayscale(0);
      }
    }
  }
  h1 {
    color: #152F4E;
  }
  p {
    color: #152F4E;
  }
}
</style>