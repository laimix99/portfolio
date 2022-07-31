<template>
  <div class="second-section">
    <div class="container">
      <div class="left-col">
        <img src="/images/photographer/second-section/icon.png" alt="">
      </div>
      <div class="right-col">
        <div class="title">
          <h1>service package</h1>
          <span>View</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.second-section {
  @apply flex flex-col items-center w-full pt-120px;
  .container {
    @apply flex flex-row justify-between items-center w-full max-w-1110px px-10px;
    @media screen and (max-width: 991px) {
      @apply flex-col items-center;
      flex-direction: column-reverse;
    }
    .left-col {
      @apply mr-50px;
      @media screen and (max-width: 991px) {
        @apply mr-0 mt-30px;
      }
      img {
        @apply p-30px w-500px;
        background: rgba(183, 76, 76, 0.35);
      }
    }
    .right-col {
      @apply flex flex-col items-center w-full max-w-600px;
      @media screen and (max-width: 991px) {
        // @apply mt-30px;
      }
      .title {
        @apply flex flex-row w-full justify-between items-center;
        h1 {
          @apply text-36px text-black font-700 text-left;
          font-family: 'Poppins', sans-serif;
        }
        span {
          @apply text-36px text-white font-700 py-10px px-43px rounded-10px;
          font-family: 'Poppins', sans-serif;
          background: rgba(192, 105, 77, 0.47);
          @media screen and (max-width: 767px) {
            @apply text-22px;
          }
        }
      }
      p {
        @apply text-18px leading-27px text-black text-left mt-52px;
      }
    }
  }
}
</style>
