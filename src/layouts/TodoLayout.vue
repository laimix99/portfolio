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
<div class="flex flex-row w-full content-center">
  <div class="flex flex-col">
    <span class=" link text-green-900 cursor-pointer hover:opacity-50 text-20px m-20px w-full text-left" @click="setVersion('v1')">Version 1</span>
    <span class="text-blue-500 cursor-pointer hover:opacity-50 text-20px m-20px w-full text-left" @click="setVersion('v2')">Version 2</span>
  </div>
  <div class="m-auto">
    <AppV1 v-if="currentVersion === 'v1'" />
    <AppV2 v-if="currentVersion === 'v2'"/>
    <AppV3 v-if="currentVersion === 'v3'"/>
  </div>
</div>
  
</template>