<script setup>
  const links = [
    {path: '/bicycle',img: '/images/test/bike.png',title: 'Верстка с добавлением характеристик ',},
    {path: '/first-task', title: 'Верстка', description: '', img: '/images/test/first-task.png', },
    {path: '/second-task', title: 'Нужно реализовать дерево прав доступа.', description: '', img: '/images/test/second-task.png', },
    {path: '/button-animaccord', title: 'UI Button', description: '', img: '/images/test/button.png', },

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
    @apply flex flex-col h-100vh w-full pt-60px overflow-x-hidden items-center;
    background: url('/images/test/bg.gif') center center/cover no-repeat;
    h1 {
      @apply text-white text-40px;
    }
    .container {
      @apply flex flex-row flex-wrap mt-50px w-full max-w-1300px items-start justify-start;
      .link {
        @apply flex flex-col rounded-16px my-20px mx-20px p-10px items-start ;
        background: linear-gradient(90deg, #cfecd0, #ffc5ca);
        width: calc(33.33% - 40px);
        aspect-ratio: 340/320;
        transition-duration: 300ms;
        &:hover {
          transform: translateY(-10px);
        }
        @media screen and (max-width: 1000px) {
          width: calc(50% - 40px);
        }
        @media screen and (max-width: 767px) {
          width: 100%;
        }
        img {
          @apply rounded-16px w-full;
          height: 60%;
        }
        .title {
          @apply flex flex-col mt-40px w-full items-start;
          span {
            @apply text-left text-2vw leading-30px; 
            @media screen and (max-width: 1000px) {
              @apply text-20px;
            }
          }
        }
      }
    }
  }
</style>
