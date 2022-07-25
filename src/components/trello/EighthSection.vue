<script setup>
const items = [
  {
    img: '/images/trello/eighth-section/item-1.svg',
    title: 'See Trello pricing',
    description: 'Whether you’re a team of 2 or 2,000, Trello can be customized for your organization. Explore which option is best for you.',
    button: 'Compare pricing',
  },
  {
    img: '/images/trello/eighth-section/item-2.svg',
    title: 'What is Trello?',
    description: 'Trello is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.',
    button: 'Tour Trello',
  },
  {
    img: '/images/trello/eighth-section/item-3.svg',
    title: 'Discover Trello Enterprise',
    description: 'The productivity tool teams love, paired with the features and security needed for scale.',
    button: 'Learn more',
  },
]
</script>

<template>
  <div class="eighth-section">
    <div class="container">
      <div class="items">
        <div class="item" v-for="item in items">
          <img :src="item.img" alt="">
          <div class="content">
            <h1>{{ item.title }}</h1>
            <span>{{ item.description }}</span>
            <a href="">
              <button>{{ item.button }}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .eighth-section {
    @apply w-full flex flex-col items-center pt-100px;
    
  }
  .container {
    @apply flex  w-full max-w-1100px px-0px py-30px;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
  }
  .items {
    @apply flex flex-wrap w-full ;
  }
  .item {
    @apply flex mr-20px items-start;
    width: calc(33.33% - 20px);
  }
  img {
    @apply w-full max-w-70px mr-30px;
  }
  .content {
    @apply flex flex-col;
  }
  h1 {
    @apply text-1.5rem leading-30px;
    color: rgb(9, 30, 66);
  }
  span {
    @apply text-20px mt-15px w-full  leading-1.5rem;
    color: rgb(9, 30, 66);
  }
  button {
    @apply text-1rem text-white py-15px px-20px rounded-5px mt-1.5rem;
    background-color: rgb(0, 101, 255);
  }
  button:hover {
    background-color: rgb(5, 71, 172);
  }
  @media screen and (max-width: 991px) {
    .container {
      @apply px-50px;
    }
    .items {
      @apply flex-col items-start;
    }
    .item {
      @apply flex-col w-full mt-30px;
    }
    img {
      @apply max-w-100px;
    }
    .content {
      @apply mt-30px ;
    }
    h1 {
      @apply max-w-full text-20px;
    }
    span {
      @apply max-w-550px text-1rem leading-20px;
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      @apply px-20px;
    }
  }
</style>
