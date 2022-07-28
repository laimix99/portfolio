<script setup>

</script>

<template>
  <div class="sixth-section">
    <div class="container">
      <img src="/images/trello/sixth-section/item.webp" alt="">
      <div class="title">
        <h1>Meet your new Butler</h1>
        <span>No-code automation</span>
        <p>Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.</p>
      </div>  
    </div>
  </div>
</template>

<style scoped>
  .sixth-section {
    @apply w-full flex flex-col items-center mt-4rem;
  }
  .container {
    @apply flex justify-between w-full max-w-1100px px-0px;
  }
  .title {
    @apply flex flex-col items-start;
  }
  h1 {
    @apply text-1rem;
    color: rgb(9, 30, 66);
  }
  span {
    @apply text-2.25rem mt-20px;
    color: rgb(9, 30, 66);
  }
  p {
    @apply text-20px mt-40px leading-30px w-full max-w-620px text-left;
    color: rgb(94, 108, 132);
  }
  img {
    @apply w-full max-w-350px;
  }
  @media screen and (max-width: 991px) {
    .container {
      @apply px-50px items-start;
      
    }
    .tetle {

    }
    img {
      @apply max-w-250px mr-70px;
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      @apply flex-col items-center px-20px;
    }
    .title {
      
    }
    h1 {
      @apply mt-10px;
    }
    span {
      @apply text-1.5rem;
    }
    p {
      @apply mt-15px;
    }
    img {
      @apply max-w-400px mr-0;
    }
  }
</style>
