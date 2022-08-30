<script setup>
// defineProps({
  
// })
</script>

<template>
  <div class="my-buttons">
    <button>
      <!-- <p> -->
        <slot/>
      <!-- </p> -->
    </button>
  </div>
</template>

<style scoped lang="scss">
  button {
    @apply text-20px font-700 uppercase pl-60px pr-76px py-17px relative;
    filter: drop-shadow(4px 4px 0px rgba(54, 70, 88, 0.62));
    font-family: 'Jost', sans-serif;
    background: #FFD465;
    color: #01002A;
    &::after {
      content: '';
      border-right: 1px dashed #01002A;
      height: 100%;
      position: absolute;
      top: 0;
      left: 80%;
      opacity: 0.3;
    }
    &::before {
      content: 'билет';
      position: absolute;
      left: 75%;
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      text-transform: uppercase;
      color: #01002A;
      opacity: 0.4;
      transform: rotate(90deg);
    }
  }
</style>
