<script setup>
import BaseIcon from './BaseIcon.vue';
import { computed, onMounted, ref } from 'vue'
const emit = defineEmits(['timerDone'])
const props = defineProps({
  time: {
    type: String,
  }
})
const timer = ref('')

onMounted(() => {
  // startTimer()
})


</script>

<template>
  
<!-- <svg width="54" height="26" viewBox="0 0 54 26"  class="inset-0 z-0 pointer-events-none absolute" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4344 0.00941545C14.6169 -0.0605857 6.15649 0.23937 4.2558 1.50957C0.462427 4.04463 0.194422 7.58863 0.0941201 8.91496L0.0941179 8.91498C0.0877731 8.99889 0.0820993 9.07391 0.0762463 9.13925C0.0485841 9.44802 0.00484091 10.2168 -1.52588e-05 11.2557V11.6354C0.0124512 14.3177 0.294745 18.4723 1.64358 21.3467C3.61108 25.5397 7.16706 25.7249 13.6598 25.9245C16.1034 25.9997 19.6788 26.0169 23.4344 25.9826V26H31.5854V25.997C40.0272 26.036 47.9176 25.7116 49.7449 24.4904C53.5383 21.9554 53.8063 18.4114 53.9066 17.085L53.9067 17.084C53.913 17.0005 53.9186 16.9258 53.9245 16.8608C53.9519 16.555 53.995 15.7981 54.0006 14.7745V14.3342C53.9861 11.6509 53.7009 7.51691 52.3571 4.65327C50.3896 0.460355 46.8337 0.275119 40.3409 0.0754566C38.1195 0.0071439 34.9626 -0.0133128 31.5854 0.0093281V3.60577e-06H23.4344V0.00941545Z" fill="#DF3F3E"/>
</svg> -->
<div class="w-54px z-8">
  <BaseIcon
    name="cub"
    :w="54"
    :h="26"
    class="-z-1 pointer-events-none absolute"
  />
  <span class="font-400 text-white text-18px leading-24px w-43px z-10">{{ time }}</span>
</div>
<!-- <div class="flex flex-row bg-hex-DF3F3E rounded-64px w-full max-w-54px py-1px px-6px justify-center items-center"> -->

  <!-- </div> -->
</template>

<style scoped lang="scss">
</style>


