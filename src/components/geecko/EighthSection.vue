<script setup>
import ButtonMy from './ButtonMy.vue'
</script>

<template>
  <div class="eighth-section">
    <div class="container">
      <h1><span>Find developers</span> to hire</h1>
      <div class="clouds-wrapper">
        <img class="cloud-1" src="/images/geecko/eighth-section/cloud-1.png" alt="">
        <img class="cloud-2" src="/images/geecko/eighth-section/cloud-2.png" alt="">
        <img class="cloud-3" src="/images/geecko/eighth-section/cloud-3.png" alt="">
        <img class="month" src="/images/geecko/eighth-section/month.png" alt="">
      </div>
    </div>
    <div class="big-container">
      <div class="wrapper">
        <div class="man">
          <h2>I KNOW JS!</h2>
        </div>
        <div class="women">
          <p>Show mE...</p>
        </div>
        <img src="/images/geecko/eighth-section/young-woman.png" alt="">
      </div>
    </div>
    <ButtonMy
      icon="black"
      class="button"
    >
      choose your fighter
    </ButtonMy>
  </div>
</template>

<style scoped lang="scss">
.eighth-section {
  @apply flex flex-col items-center w-full py-100px;
  .container {
    @apply flex flex-col items-start w-full max-w-1100px;
    h1 {
      @apply text-52px font-400;
      color: #231F20;
      span {
        @apply font-600;
      }
    }
    .clouds-wrapper {
      @apply w-full h-100px relative;
      .cloud-1 {
        @apply absolute top-20px left-250px;
      }
      .cloud-2 {
        @apply absolute top-0 right-200px;
      }
      .cloud-3 {
        @apply absolute top-20px right-40px;
      }
      .month {
        @apply absolute -top-70px right-350px;
      }
    }
  }
  .big-container {
    @apply flex flex-col items-center w-full min-h-373px ;
    background: url('/images/geecko/eighth-section/bg-2.webp');
    background-size: contain;
    background-repeat: repeat-x; 
    background-position: bottom;
    .wrapper {
      @apply w-full max-w-1100px relative h-373px;
      .man {
        @apply h-244px w-254px z-5 absolute left-160px top-100px;
        background: url('/images/geecko/eighth-section/man.png')center center/cover no-repeat;
        background-size: 100%;
        h2 {
          @apply text-23px font-400 absolute top-10px left-30px; 
          color: #07042D;
          font-family: "Retro Computer";
        }
      }
      .women {
        @apply h-217px w-176px z-5 absolute left-430px top-100px;
        background: url('/images/geecko/eighth-section/woman.png')center center/cover no-repeat;
        background-size: 100%;
        p {
          @apply absolute text-20px font-400 top-10px left-30px;
          color: #0D0D0D;
          font-family: "Retro Computer";
        }
      }
      img {
        @apply absolute -top-140px right-40px z-10;
      }
    }
  }
  .button {
    @apply -mt-35px z-20;
  }
}
</style>
