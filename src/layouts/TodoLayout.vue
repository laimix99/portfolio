<script setup>
import { ref, computed, reactive, onBeforeMount } from 'vue';
  import AppV1 from '../components/todo/AppV1.vue'
  import AppV2 from '../components/todo/AppV2.vue'
  import AppV3 from '../components/todo/AppV3.vue'
  const currentVersion = ref('v1')
  const setVersion = (v) => {
    currentVersion.value = v
  }
  // const screenHeight = document.documentElement.clientHeight;
  // console.log(screenHeight)


  const versions = [
    {title: 'Version 1', description: '', click: 'v1'},
    {title: 'Version 2', description: 'Added Windi CSS and Props', click: 'v2'}
  ]
</script>

<template>
<div class=" layout flex flex-row w-full items-start">
  <div class="flex flex-col">
    <router-link to="/" class="all-projects bg-no-repeat w-40px h-40px cursor-pointer top-10px left-10px absolute"/>
    <div class="header flex flex-col items-start w-200px h-100vh">
      <div class="items mt-80px w-full">
        <div class="item flex flex-col items-start pl-10px cursor-pointer" v-for="version in versions" @click="setVersion(version.click)">
          <span class="title text-30px text-light-900 mt-15px">{{ version.title }}</span>
          <p class="description text-12px text-light-900 opacity-50 mt-10px">{{ version.description }}</p>
        </div> 
      </div>
    </div>
  </div>
  <div class="mt-40px m-auto relative">
    <AppV1 v-if="currentVersion === 'v1'" />
    <AppV2 v-if="currentVersion === 'v2'"
    :height="800"
    :width="800"
    />
    <AppV3 v-if="currentVersion === 'v3'"/>
  </div>
</div>
  
</template>

<style lang="scss" scoped>
.layout { 
  min-height: 100vh;
  background: #FFA17F;
  background: -webkit-linear-gradient(to right, #00223E, #FFA17F);
  background: linear-gradient(to right, #00223E, #FFA17F); 
}
.header {
  .title {

  }
  .description {
    color: #fff;
  }
}

.all-projects {
  background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
  background-size: 100%;
  }
  .item {
    &:hover {
      background-color: rgb(86, 83, 83);
      opacity: 0.2;
      border-radius: 8px;
    }
  }
</style>
