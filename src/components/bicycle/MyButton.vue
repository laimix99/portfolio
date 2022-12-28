<script setup>
const props = defineProps({
  show: {
    type: String
  }
})
</script>

<template>
  <div class="my-button">
    <button v-if="props.show === 'blue'" class="blue">
      <slot/>
    </button>
    <button v-if="props.show === 'white'" class="white">
      <slot/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.my-button {
  @apply flex flex-col items-center;
  @media screen and (max-width: 767px) {
    @apply w-full;
  }
  .blue {
    @apply bg-hex-3922C5 rounded-16px font-400 text-hex-ffff py-14px px-24px text-16px;
    font-family: 'Montserrat', sans-serif;
    line-height: 150%;
    &:hover {
      @apply bg-hex-2C1A9A;
    }
    &:active {
      @apply bg-hex-1F1368;
    }
    @media screen and (max-width: 767px) {
      @apply w-full py-15.5px;
    }
  }
  .white {
    @apply bg-hex-ffff rounded-16px font-400 py-14px px-24px text-hex-0C0C0C text-16px;
    font-family: 'Montserrat', sans-serif;
    line-height: 150%;
    &:hover {
      @apply text-hex-2C1A9A;
    }
    &:active {
      @apply text-hex-1F1368;
    }
  }
}

</style>
