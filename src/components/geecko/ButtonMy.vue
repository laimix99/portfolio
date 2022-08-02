<script setup>
const props = defineProps({
  icon: {
    type: String
  }
})
</script>

<template>
  <div class="button-my">
    <button :class="'button-' + props.icon">
      <slot/>
    </button>
  </div>
</template>

<style scoped lang="scss">
  .button-fire {
    @apply flex flex-row items-center text-14px font-400 py-21px px-32px rounded-50px ;
    font-family: "Retro Computer";
    background-color: #FFD91D;
    color: #1A1B35;
    &::after {
      content: url('/images/geecko/first-section/fire.png');
      @apply ml-10px;
    }
  }
  .button-coin {
    @apply flex flex-row items-center text-14px font-400 py-21px px-32px rounded-50px ;
    font-family: "Retro Computer";
    background-color: #FFD91D;
    color: #1A1B35;
    &::after {
      content: url('/images/geecko/first-section/coin.png');
      @apply ml-10px;
    }
  }
</style>
