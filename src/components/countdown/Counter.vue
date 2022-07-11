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
      const end = new Date(2022, 8, 7, 10, 10, 10, 10);
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
  <div class="timer flex flex-row items-center w-full max-w-350px rounded-64px py-10px px-40px mt-27px">
    <div class="item flex flex-col mx-10px">
      <span class="text-red-600 text-30px z-10">{{ displayDays }}</span>
      <span class="text-13px font-400 leading-15px text-white mt-4px">DAYS</span>
    </div>
    <p class="text-white text-13px leading-20px">:</p>
    <div class="item flex flex-col mx-10px">
      <span class="text-red-600 text-30px opacity-100">{{ displayHours }}</span>
      <span class="text-13px font-400 leading-15px text-white mt-4px">HOURS</span>
    </div>
    <p class="text-white text-13px leading-20px">:</p>
     <div class="item flex flex-col mx-10px">
      <span class="text-red-600 text-30px">{{ displayMinutes }}</span>
      <span class="text-13px font-400 leading-15px text-white mt-4px">MINUTES</span>
    </div>
    <p class="text-white text-13px leading-20px">:</p>
     <div class="item flex flex-col ml-10px">
      <span class="text-red-600 text-30px">{{ displaySeconds }}</span>
      <span class="text-13px font-400 leading-15px text-white mt-4px">SECONDS</span>
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
