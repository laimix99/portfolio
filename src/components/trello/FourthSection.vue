<script setup>

</script>

<template>
  <div class="fourth-section">
    <div class="container">
      <div class="title">
        <h1>Features to help your team succeed</h1>
        <span>Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</span>
      </div>
      <div class="content">
        <img src="/images/trello/fourth-section/view.svg" alt="">
        <div class="subtitle">
          <h2>Choose a view</h2>
          <h3>The board is just the beginning</h3>
          <p>Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .fourth-section {
    @apply flex flex-col items-center w-full;
  }
  .container {
    @apply flex flex-col items-start w-full max-w-1100px px-0px;
  }
  .title {
    @apply w-full max-w-1/2;
  }
  h1 {
    @apply text-2.25rem w-full max-w-470px leading-50px;
    color: rgb(9, 30, 66);
  }
  span {
    @apply text-20px leading-30px mt-15px;
    color: rgb(9, 30, 66);
  }
  .content {
    @apply flex mt-100px;
  }
  img {
    @apply w-full max-w-400px mr-70px;
  }
  .subtitle {
    @apply flex flex-col items-start;
  }
  h2 {
    @apply text-1rem;
    color: rgb(9, 30, 66);
  }
  h3 {
    @apply text-2.25rem mt-20px;
    color: rgb(9, 30, 66);
  }
  p {
    @apply text-20px mt-40px leading-30px;
    color: rgb(94, 108, 132);
  }
  @media screen and (max-width: 991px) {
    .container {
      @apply px-50px ;
    }
    .content {
      @apply items-start;
    }
    img{
      @apply max-w-250px;
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      @apply items-center px-20px;
    }
    .title {
      @apply max-w-full;
    }
    h1 {
      @apply w-full text-center text-1.5rem;
    }
    span {
      @apply text-center;
    }
    .content {
      @apply flex-col items-center;
    }
    img {
      @apply max-w-400px mr-0;
    }
    h2 {
      @apply mt-10px;
    }
    h3 {
      @apply text-1.5rem;
    }
    p {
      @apply mt-15px
    }
  }
</style>
