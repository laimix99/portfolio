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
<div class="cub" :style="{marginRight: margin + '%', minWidth: currentSlideWidth + '%'}">
  <div class="cub-background">
    <img :src="item_data.img" alt="">
  </div>
  <h1>{{item_data.name}}</h1>
  <p>{{item_data.age}}</p>
</div>
</template>

<style lang="scss" scoped>
.cub {
  // width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin: 0;
  margin-top: 84px;

  &-background {
    width: 100%;
    max-width: 304px;
    // height: 240px;
    background: #fff;
    border-radius: 16px;
    img {
      // margin-top: -85px;
      width: 100%;
      max-width: 304px;
      border-radius: 16px;
      filter: grayscale(1);
      &:hover {
        filter: grayscale(0);
      }
    }
  }
  h1 {
    margin: 0;
    padding-top: 26px;
    color: #152F4E;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    // line-height: 30px;
  }
  p {
    margin: 0;
    color: #152F4E;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    padding-top: 8px;
  }
}
</style>