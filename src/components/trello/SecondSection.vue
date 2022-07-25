<script setup>

</script>

<template>
  <div class="second-section">
    <div class="container">
      <h1>It’s more than work. It’s a way of working together.</h1>
      <span>Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</span>
      <a href="">
        <button>Start doing</button>
      </a>
      <img src="/images/trello/second-section/board.webp" alt="">
    </div>
  </div>
</template>

<style scoped>
  .second-section {
    @apply flex flex-col items-center w-full pt-60px;
  }
  .container {
    @apply flex flex-col items-center w-full max-w-1100px px-0px;
  }
  h1 {
    @apply text-2.25rem text-black;
  }
  span {
    @apply text-20px text-black text-center w-full max-w-1000px mt-1.5rem leading-30px;
  } 
  button {
    @apply text-white py-15px px-20px rounded-5px mt-40px;
    background-color: #0065FF;

  }
  button:hover {
    background-color: rgb(5, 71, 172);
  }
  img {
    @apply mt-30px;
  }
  @media screen and (max-width: 991px) {
    .container {
    @apply px-50px items-center;
    }
    h1 {
      @apply text-2rem text-center;
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      @apply px-20px;
    }
  }
</style>
