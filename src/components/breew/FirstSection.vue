<template>
  <div class="first-section">
    <img src="/images/breew/first-section/bg.png" alt="">
    <div class="description">
      <p>Buy rapidly growing <span>crypto</span>  right from your phone</p>
      <span>The fastest growing crypto currencies are in high demand for smart functionalities.  We take care of searching for the next high rising crypto for your speedy transactions.</span>
      <div class="buttons">
        <button>Download app</button>
        <button>View pricing</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .first-section {
    @apply flex w-full justify-center relative pt-150px pb-300px items-center ;
    overflow: hidden;
    @media screen and (max-width: 991px) {
      @apply pb-50px;
    }
    @media screen and (max-width: 767px) {
      @apply flex-col items-center pt-50px pb-50px;
    }
    img {
      @apply absolute right-0 -top-1/6 w-1/2;
      @media screen and (max-width: 1500px) {
        @apply  -top-1/10;
      }
      @media screen and (max-width: 991px) {
        @apply ;
        width: 60%;
      }
      @media screen and (max-width: 767px) {
        @apply hidden;
      }
    }
    .description {
      @apply flex flex-col items-start w-full max-w-1500px ;
      @media screen and (max-width: 1500px) {
        @apply  max-w-1100px px-10px;
      }
      @media screen and (max-width: 767px) {
        @apply items-center;
      }
      p {
        @apply text-95px font-700 max-w-890px leading-113px text-left;
        color: #1A1A1A;
        @media screen and (max-width: 1500px) {
          @apply text-50px max-w-500px;
        }
        @media screen and (max-width: 991px) {
          @apply text-40px max-w-400px;
        }
        @media screen and (max-width: 767px) {
          @apply text-center;
        }
        span {
          color: #0582CA;
          font-size: 95px;
          @media screen and (max-width: 1500px) {
            @apply text-50px;
          }
          @media screen and (max-width: 991px) {
            @apply text-40px; 
          }
        }
      }
      span {
        @apply text-22px leading-33px max-w-690px text-left mt-37px;
        @media screen and (max-width: 1500px) {
          @apply max-w-550px;
        }
        @media screen and (max-width: 991px) {
          @apply  max-w-400px text-18px;
        }
        @media screen and (max-width: 991px) {
          @apply text-center;
        }
      }
      .buttons {
        @apply mt-34px flex;
        @media screen and (max-width: 767px) {
          @apply flex-col items-center;
        }
        button {
          @apply text-24px leading-36px font-700 mr-40px text-white rounded-31px py-34px px-51px w-full max-w-300px;
          background: #0582CA;
          white-space: nowrap;
          @media screen and (max-width: 1500px) {
            @apply text-20px px-30px py-30px mr-20px;
          }
          @media screen and (max-width: 767px) {
            @apply mt-10px; 
          }
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
