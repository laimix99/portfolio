<script setup >
import { ref, computed, reactive, onBeforeMount } from 'vue';
import CalculatorV1 from '../components/calculator/CalculatorV1.vue' ;
import CalculatorV2 from '../components/calculator/CalculatorV2.vue' ;
  const currentVersion = ref('v1')
  const setVersion = (v) => {
    currentVersion.value = v
  }
  const versoins = [
    {title: 'Version 1', description: '', click: 'v1'},
    {title: 'Version 2', description: 'Added Windi CSS', click: 'v2'},
  ]
</script>

<template>
  <div class="calculator-layout flex flex-row w-full justify-between bg-red-100">
    <router-link to="/" class="all-projects bg-no-repeat w-40px h-40px cursor-pointer top-10px left-10px absolute"/>
    <div class="header  h-100vh w-full max-w-250px flex flex-col items-start">
      <h1 class="title   w-full text-40px mt-60px font-700">Calculator</h1>
      <div class="items  w-full   ">
        <div class="item text-left z-5 cursor-pointer w-full pl-10px" v-for="version in versoins" @click="setVersion(version.click)">
          <p class="text-25px text-black pt-20px font-500">{{ version.title }}</p>
          <span class="text-15px">{{ version.description }}</span>
        </div>
      </div>
    </div>
    <div class="content m-auto mt-0">
      <CalculatorV1 v-if="currentVersion === 'v1'"/>
      <CalculatorV2 v-if="currentVersion === 'v2'"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator-layout {
  background-color: #1f4e78;
background-image: linear-gradient(63deg, #1f4e78 0%, #1f4e78 47%, #1f4e78 100%);
}
.header {
  background-color: #bdd7ee;
  background-image: linear-gradient(63deg, #bdd7ee 0%, #bdd7ee 47%, #bdd7ee 100%);
  
}
  .all-projects {
  background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
  background-size: 100%;
  }
  .title {
    font-family: 'Splash', cursive;
    background-color: #FF9A8B;
    background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 50%,  #FF9A8B 100%);
    background-size: 200% auto;
    color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 1s linear infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }
  p {
    color: #1f4d77;
  }
  span {
    color:#1f4d77;
  }
  .item {
    position: relative;
    padding-bottom: 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.15);

    }
    &::after {
      content: '';
      position: absolute;
      background-color: rgba(0, 0, 0, 0.15);
      height: 2px;
      width: 100%;
      bottom: 0;
      left:0;
    }
  }
</style>