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
     white-space: nowrap;
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
    @media screen and (max-width: 991px) {
      @apply w-full;
      border-radius: 0;
    }
    @media screen and (max-width: 767px) {
      @apply text-20px;
    }
  }
  .button-grya {
    @apply py-8px px-64px ;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    font-family: "Retro Computer";
    // display: flex;
    // align-items: center;
    text-align: center;
    // letter-spacing: 0.01em;
    color: #FFFFFF;
    border-radius: 24px;
    background: #494949;
    @media screen and (max-width: 767px) {
      @apply w-full;
    }
  }
.button-letter {
  @apply py-12px px-45px rounded-50px flex flex-row items-center w-full;
  font-weight: 400;
  font-size: 12px;
  line-height: 95.5%;
  text-align: center;
  text-transform: uppercase;
  background: #4D4E57;
  color: #FFFFFF;
  font-family: "Retro Computer";
  &::after {
    content: url('/images/geecko/eleventh-section/letter.png');
    margin-left: 10px;
  }
  @media screen and (max-width: 767px) {
    @apply flex justify-center;
  }
}
</style>
