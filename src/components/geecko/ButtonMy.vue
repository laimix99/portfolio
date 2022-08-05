<script setup>
const props = defineProps({
  icon: {
    type: String
  },
  color: {
    type: String
  },
  text_color: {
    type: String
  }
})
</script>

<template>
  <div class="button-my">
    <button 
      :class="'button-' + props.icon"
      :style="
      {
        background: props.color,
        color: props.text_color
      }"
    >
      <slot/>
    </button>
  </div>
</template>

<style scoped lang="scss">
  .button-fire {
    @apply flex flex-row items-center text-14px font-400 py-21px px-32px rounded-50px ;
    font-family: "Retro Computer";
    // background: #FFD91D;
    // color: #1A1B35;
    &::after {
      content: url('/images/geecko/first-section/fire.png');
      @apply ml-10px;
    }
  }
  .button-coin {
    @apply flex flex-row items-center text-14px font-400 py-21px px-32px rounded-50px ;
    font-family: "Retro Computer";
    // background: #FFD91D;
    // color: #1A1B35;
    &::after {
      content: url('/images/geecko/first-section/coin.png');
      @apply ml-10px;
    }
  }
  .button-black {
    @apply pt-33px pb-38px rounded-20px uppercase px-90px;
    background: #181830;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    font-family: "Retro Computer";
    // text-transform: capitalize;
    color: #FFFFFF;
  }
</style>
