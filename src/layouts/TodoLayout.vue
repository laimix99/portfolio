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
<div class=" flex flex-row w-full layout items-start">
  <div class="flex flex-col">
    <router-link to="/" class=" bg-no-repeat cursor-pointer h-40px top-90 left-10px w-50px all-projects "/>
    <div class="flex flex-col h-100vh w-200px header items-start">
      <div class="mt-80px w-full items">
        <div class="cursor-pointer flex flex-col pl-10px item items-start" v-for="version in versions" @click="setVersion(version.click)">
          <span class="mt-15px text-30px text-light-900 title">{{ version.title }}</span>
          <p class="mt-10px opacity-50 text-12px text-light-900 description">{{ version.description }}</p>
        </div> 
      </div>
    </div>
  </div>
  <div class="m-auto mt-40px relative">
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
    z-index: 555;
    position: fixed;
    // @media screen and (max-width: 991px) {
    //   display: none;
    // }
  }
  .item {
    &:hover {
      background-color: rgb(86, 83, 83);
      opacity: 0.2;
      border-radius: 8px;
    }
  }
</style>
