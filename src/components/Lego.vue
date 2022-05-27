<script setup>
import { ref, computed, reactive } from 'vue';
const cub = ref([
  {
    place: 1,
    prize: 'место',
    picture: 'https://www.kubik77.ru/UserFiles/Image/img3078_25709.jpg',
    text: 'LEGO Empire State Building',
  },
  {
    place: 2,
    prize: 'место',
    picture:
      'https://vsemtoy.ru/upload/medialibrary/a42/a428b8e02329e0d960147267ae30d13f.jpg',
    text: 'LEGO Trafalgar Square',
  },
  {
    place: 3,
    prize: 'место',
    picture:
      'https://expertology.ru/upload/parser/ea0/konstruktor_lego_star_wars_75192_sokol_tysyacheletiya.jpeg',
    text: 'LEGO San Francisco',
  },
]);
</script>

<template>
  <div class="lego">
    <div class="lego-item" v-for="(i, index) in cub" :key="index">
      <div class="header">
        <div class="title">{{ i.place }}</div>
        <div class="sub-title-text">{{ i.prize }}</div>
      </div>
      <img class="lego-img" :src="i.picture" alt="" />
      <div class="lego-text">{{ i.text }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.lego {
  display: flex;
  justify-content: center;
  width: 100%;

  &-item {
    margin: 0 52px;
    display: flex;
    box-sizing: border-box;
    position: relative;
    width: 287px;
    height: 268px;
    background: #000000;
    border: 2px solid #73241b;
    flex-direction: column;
    justify-content: space-between;
    transition-duration: 300ms;
    &:hover {
      transform: translateY(-10px);
    }
  }
  .header {
    font-family: 'Koulen', cursive;
    padding: 0 0 0 12px;
    left: 10px;
    color: #898989;
    text-align: left;
    .title {
      font-size: 79px;
    }
    .sub-title-text {
      // top: -10px;
      font-size: 25px;
      font-weight: 400;
    }
  }
  &-text {
    padding: 0 96px 20px 12px;
    font-size: 20px;
    color: #ffffff;
    text-align: left;
    font-family: 'Koulen', cursive;
  }
  &-img {
    top: -25px;
    right: -25px;
    width: 50%;
    border: 1px solid red;
    position: absolute;
  }
}
</style>
