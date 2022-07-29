<script setup>
import MySvg from './MySvg.vue'
</script>

<template>
  <div class="first-section">
    <div class="container">
      <div class="left-col">
        <img src="/images/photographer/first-section/icon.png" alt="">
      </div>
      <div class="right-col">
        <h1>ABOUT ME</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod.</span>
        <button>Let’s Chat</button>
        <MySvg
          fill="rgba(0, 0, 0, 0.6)"
          width="25"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.first-section {
  @apply flex flex-col items-center w-full;
  background: rgba(176, 85, 85, 0.63);
  .container {
    @apply flex flex-row justify-between items-center w-full max-w-1110px px-10px pt-100px pb-130px;
    .left-col {
      @apply ;
      img {
        @apply w-400px;
      }
    }
    .right-col {
      @apply flex flex-col items-center;
      h1 {
        @apply text-36px font-700 text-white;
        font-family: 'Poppins', sans-serif;
      }
      span {
        @apply text-24px w-full max-w-673px text-white mt-56px;
        font-family: 'Poppins', sans-serif;
      }
      button {
        @apply rounded-9px text-24px font-400 py-25px px-120px mt-57px;
        color: rgba(0, 0, 0, 0.57);
        background: rgba(255, 255, 255, 0.49);
        font-family: 'Poppins', sans-serif;
      }
    }
  }
}
</style>
