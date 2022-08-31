<script setup>
  const links = [
    {path: '/first-task', title: 'Верстка', description: '', img: '/images/test/first-task.png', },

  ]
</script>

<template>
  <div class="test-layout">
    <h1>Тестовые задания</h1>
    <div class="container">
      <router-link
      v-for="link in links"
        :to="link.path"
        class="link"
      >
        <img :src="link.img" alt="">
        <div class="title">
          <span>{{ link.title }}</span>
          <p>{{ link.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .test-layout {
    @apply flex flex-col items-center w-full h-100vh pt-20px;
    background: url('/images/test/bg.gif') center center/cover no-repeat;
    h1 {
      @apply text-40px text-white;
    }
    .container {
      @apply flex flex-row flex-wrap items-start justify-between w-full max-w-1300px mt-50px;
      .link {
        @apply flex flex-col items-start mx-20px rounded-16px p-10px mt-20px;
        background: linear-gradient(90deg, #cfecd0, #ffc5ca);
        width: calc(33.33% - 40px);
        aspect-ratio: 340/320;
        transition-duration: 300ms;
        &:hover {
          transform: translateY(-10px);
        }
        img {
          @apply w-full rounded-16px;
          height: 60%;
        }
        .title {
          @apply flex flex-col items-start w-full mt-40px;
          span {
            @apply text-3vw ; 
          }
        }
      }
    }
  }
</style>
