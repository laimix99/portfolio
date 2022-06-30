<script setup>
import { ref, computed, reactive, onBeforeMount } from 'vue';
  import AppV1 from '../components/todo/AppV1.vue'
  import AppV2 from '../components/todo/AppV2.vue'
  import AppV3 from '../components/todo/AppV3.vue'
  const currentVersion = ref('v1')
  const setVersion = (v) => {
    currentVersion.value = v
  }
</script>

<template>
<div class=" layout flex flex-row w-full items-start">
  <div class="flex flex-col">
    <router-link to="/" class="all-projects bg-no-repeat w-40px h-40px cursor-pointer top-10px left-10px absolute"/>
    <span class=" link text-green-700 cursor-pointer hover:opacity-50 text-20px mt-100px ml-10px w-full text-left" @click="setVersion('v1')">Version 1</span>
    <span class="text-green-700 cursor-pointer hover:opacity-50 text-20px mt-20px ml-10px w-full text-left" @click="setVersion('v2')">Version 2</span>
    <p class="text-12px mt-5px ml-10px">Added Windi CSS</p>
  </div>
  <div class="mt-40px m-auto ">
    <AppV1 v-if="currentVersion === 'v1'" />
    <AppV2 v-if="currentVersion === 'v2'"/>
    <AppV3 v-if="currentVersion === 'v3'"/>
  </div>
</div>
  
</template>

<style lang="scss" scoped>
.layout {
  background-color: #d1c8c2;
  height: 100vh;
}
.all-projects {
    // color: #fff;
    background: url('https://cdn0.iconfinder.com/data/icons/web-and-mobile-icons-volume-2/128/88-512.png')
      center;
    background-size: 100%;
  }
</style>
