<script setup>
import { ref, computed, reactive } from 'vue';

const props = defineProps({
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
const currentSlideWidth = computed(() => {
  return 100 / props.viewSlides - props.margin
})
</script>

<template>
  <div class="cub" :style="{marginRight: margin + '%', minWidth: currentSlideWidth + '%'}">
    <div class="human">
      <img :src="item_data.img" alt="">
      <h1>{{ item_data.name }}</h1>
    </div>
    <div class="service">{{ item_data.service }}</div>
  </div>
</template>

<style lang="scss" scoped>
  .cub {
    padding: 32px 32px 0px 32px;
    box-sizing: border-box;
    height: 280px;
    margin-top: 10px;
    background: #fff;
    border-radius: 16px;
    .human {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      img {
        width: 20%;
        margin-right: 24px;
      }
      h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #152F4E;
        margin: 0px;
      }
    }
    .service {
      color: #152F4E;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      text-align: left;
      margin-top: 32px;
    }
  }

   @media ( max-width: 991px ) {
     .cub {
       min-width: 250px;
       height: 250px;
      margin-right: 12px;
     }
   }
</style>