<script setup>

</script>

<template>
  <div class="fifth-section">
    <div class="container">
      <div class="title">
        <h1>Dive into the details</h1>
        <span>Cards contain everything you need</span>
        <p>Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.</p>
      </div>  
      <img src="/images/trello/fifth-section/card-back.svg" alt="">
    </div>
  </div>
</template>

<style scoped>
  .fifth-section {
    @apply w-full flex flex-col items-center mt-4rem;
  }
  .title {
    @apply flex flex-col items-start;
  }
  .container {
    @apply flex justify-between w-full max-w-1100px px-0px;
  }
  h1 {
    @apply text-1rem ;
    color: rgb(9, 30, 66);
  }
  span {
    @apply text-2.25rem mt-20px font-700;
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
      @apply max-w-250px ml-70px;
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      @apply flex-col items-center px-20px;
      flex-direction: column-reverse;
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
      @apply max-w-400px ml-0;
    }
  }
</style>
