<script setup>
import { ref, computed, reactive } from 'vue';
import Lego from '../components/Lego.vue';
const array = ref([
  {
    img: 'https://img5.goodfon.ru/wallpaper/nbig/3/73/abstraktsiia-antisfera-vodovorot-krasok-kartinka-chernyi-fon.jpg',
    name: 'samsung',
    shortName: 'SMG',
    price: 1600,
    curr: '$',
  },
  { img: '', name: 'gdfg', shortName: 'dfg', price: 123, curr: '$' },
]);
</script>

<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="stocks">
        <div class="stock" v-for="(k, index) in array" :key="index">
          <div class="stock-item">
            <div class="stock-item_info">
              <div class="stock-item_cover">
                <img :src="k.img" alt="" style="width: 100%" />
              </div>
              <h3 class="stock-item_title">
                {{ k.name }}
                <span class="sub-title">{{ k.shortName }}</span>
              </h3>
            </div>
            <span class="stock-item_price">{{ k.price + k.curr }}</span>
          </div>
        </div>
      </div>
      <Lego />
    </div>
  </div>
</template>

<style lang="scss">
img {
  // width: 50px;
  // height: 50px;
  // background-color: red;
}
.page {
  display: flex;
  width: 100%;
  justify-content: center;
  // border: 1px solid red;
  &-wrapper {
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    max-width: 1200px;
    flex-direction: column;
    // border: 1px solid red;
    align-items: center;
    .stocks {
      margin: 30px 0;
      display: flex;
      justify-content: center;
      width: 100%;
      .stock {
        width: 100%;
        max-width: 200px;
        margin: 10px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        transition-duration: 300ms;
        cursor: pointer;
        &:hover {
          transform: translateY(-10px);
        }
      }
    }
  }
}
.sub-title {
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
}
</style>
