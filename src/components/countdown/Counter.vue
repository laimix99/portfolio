<script setup>
  import { ref, computed, reactive, onBeforeMount, onMounted } from 'vue';
  const displayDays = ref(0);
  const displayHours = ref(0);
  const displayMinutes = ref(0);
  const displaySeconds = ref(0);
  const _seconds = computed( () => {
    return 1000;
  })
  const _minutes = computed( () => {
    return _seconds.value * 60;
  })
  const _hours = computed( () => {
    return  _minutes.value * 60;
  })
  const _days = computed( () => {
    return _hours.value * 24;
  })
  const showRemaining = () => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date(2023, 8, 7, 10, 10, 10, 10);
      const distance = end.getTime() - now.getTime();
      if (distance < 0) {
        calearInterval(timer)
      }
      const days = Math.floor((distance / _days.value));
      const hours = Math.floor((distance % _days.value) / _hours.value);
      const minutes = Math.floor((distance % _hours.value) / _minutes.value)
      const seconds = Math.floor((distance % _minutes.value) / _seconds.value)
      displayMinutes.value = minutes < 10 ? '0' + minutes : minutes;
      displaySeconds.value = seconds < 10 ? '0' + seconds : seconds;
      displayHours.value = hours < 10 ? '0' + hours : hours;
      displayDays.value = days < 10 ? '0' + days : days;
    }, 1000)
  }
  onMounted(() => {
    showRemaining()
  })
</script>

<template>
  <div class="flex flex-row rounded-64px mt-27px w-full max-w-350px py-10px px-40px timer items-center">
    <div class="flex flex-col mx-10px item">
      <span class="text-red-600 text-30px z-10">{{ displayDays }}</span>
      <span class="font-400 mt-4px text-white text-13px leading-15px">DAYS</span>
    </div>
    <p class="text-white text-13px leading-20px">:</p>
    <div class="flex flex-col mx-10px item">
      <span class="opacity-100 text-red-600 text-30px">{{ displayHours }}</span>
      <span class="font-400 mt-4px text-white text-13px leading-15px">HOURS</span>
    </div>
    <p class="text-white text-13px leading-20px">:</p>
     <div class="flex flex-col mx-10px item">
      <span class="text-red-600 text-30px">{{ displayMinutes }}</span>
      <span class="font-400 mt-4px text-white text-13px leading-15px">MINUTES</span>
    </div>
    <p class="text-white text-13px leading-20px">:</p>
     <div class="flex flex-col ml-10px item">
      <span class="text-red-600 text-30px">{{ displaySeconds }}</span>
      <span class="font-400 mt-4px text-white text-13px leading-15px">SECONDS</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .timer {
    background: rgb(22, 14, 51, 0.5);

    .item {

    }
  }
</style>
