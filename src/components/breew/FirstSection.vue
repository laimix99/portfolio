<template>
  <div class="first-section">
    <div class="description">
      <p>Buy rapidly growing <span>crypto</span>  right from your phone</p>
      <span>The fastest growing crypto currencies are in high demand for smart functionalities.  We take care of searching for the next high rising crypto for your speedy transactions.</span>
      <div class="buttons">
        <button>Download app</button>
        <button>View pricing</button>
      </div>
    </div>
    <img src="/images/breew/first-section/bg.png" alt="">
  </div>
</template>

<style scoped lang="scss">
  .first-section {
    @apply flex w-full justify-center relative pt-150px pb-300px items-center ;
    overflow: hidden;
    img {
      @apply absolute right-0 -top-1/6 w-1/2;
    }
    .description {
      @apply flex flex-col items-start w-full max-w-1500px ;
      p {
        @apply text-95px font-700 max-w-890px leading-113px text-left;
        color: #1A1A1A;
        span {
          color: #0582CA;
          font-size: 95px
        }
      }
      span {
        @apply text-22px leading-33px max-w-690px text-left mt-37px;
      }
      .buttons {
        @apply mt-34px flex;
        button {
          @apply text-24px leading-36px font-700 mr-40px text-white rounded-31px py-34px px-51px w-300px;
          background: #0582CA;
          white-space: nowrap;
          &:hover {
            color: #0582CA;
            background: #FFFFFF;
            outline: 1px solid rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
</style>
