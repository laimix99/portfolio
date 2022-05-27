<script setup>
import { reactive, onMounted } from 'vue';

const props = defineProps({
  code: { type: Array },
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

onMounted(() => {
  console.log(':onMounted');
  codeSpinning();
  // startSpinning();
});

const state = reactive({
  isSpinning: false,
  angle: 0,
  angleInterval: null,
});

const codeSpinning = async () => {
  await props.code.reduce(async (promise, l) => {
    await promise;
    await wait(100);
    state.angle = l;
  }, Promise.resolve());
};

const startSpinning = () => {
  console.log(':startSpinning', state.isSpinning);
  if (state.isSpinning) {
    state.isSpinning = false;
    clearInterval(state.angleInterval);
  } else {
    state.isSpinning = true;
    state.angleInterval = setInterval(() => {
      state.angle += 2;
    }, 0);
  }
};
</script>

<template>
  <div
    :style="{
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      position: 'relative',
      background: 'lime',
      transform: `rotate(${state.angle}deg)`,
    }"
    @click="startSpinning()"
  >
    <div
      :style="{
        position: 'absolute',
        zIndex: 10,
        width: '2px',
        height: '50%',
        top: 0,
        left: 'calc(50% - 1px)',
        background: 'red',
      }"
    ></div>
    <!-- <small>{{ code }}</small> -->
  </div>
</template>
