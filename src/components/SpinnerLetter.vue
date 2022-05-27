<script setup>
const props = defineProps({
  angle: { type: [String, Number] },
  noBg: { type: Boolean, default: true },
});
</script>

<template>
  <div
    :style="{
      position: 'relative',
      height: '40px',
      width: '40px',
      transform: `rotate(${angle}deg)`,
      borderRadius: '50%',
      background: noBg ? 'none' : 'lime',
    }"
  >
    <div
      :style="{
        position: 'absolute',
        zIndex: 10,
        width: '2px',
        height: '50%',
        top: 0,
        left: 'calc(50% - 1px)',
        background: 'rgba(255,0,0,0.33)',
      }"
    ></div>
  </div>
</template>
