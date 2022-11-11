<script setup>

</script>

<template>
  <div class="seventh-section">
    <div class="container">
      <div class="title">
        <h1>Power-ups</h1>
        <span>Integrate top work tools</span>
        <p>Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.</p>
      </div>  
      <img src="/images/trello/seventh-section/item.webp" alt="">
    </div>
  </div>
</template>

<style scoped>
  .seventh-section {
    @apply w-full flex flex-col items-center mt-4rem;
  }
  .container {
    @apply flex  justify-between w-full max-w-1100px px-0px;
    flex-direction: row !important; 
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
    @apply text-20px mt-40px leading-30px w-full max-w-600px text-left;
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