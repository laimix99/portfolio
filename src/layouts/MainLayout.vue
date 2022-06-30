<script setup>
const links = [
  { path: '/calculator', name: 'Calculator',img: 'https://kartinkin.net/uploads/posts/2021-07/1626739220_8-kartinkin-com-p-kalkulyator-fon-krasivo-9.jpg', subtitle: 'Here you can see different versions of Calculator' },
  { path: '/todo', name: 'Todo', img: 'https://smartprogress.do/uploadImages/001487344.jpg', subtitle: 'Here you can see different versions of ToDo' },
  { path: '/movies', name: 'Movies', img: 'https://xchip.ru/wp-content/uploads/2021/09/yvavya.jpg', subtitle: 'Application for the movies and series search' },
  { path: '/deli', name: 'Deli', img: 'https://investelite.ru/wp-content/uploads/2021/10/1577440491_gf7tmw-9k6m.jpg', subtitle: 'Delimobile website' },
  // { path: '/', name: 'My app' },
  // { path: '/spinner', name: 'Spinner' },
  // { path: '/stock', name: 'Stock' },
  // { path: '/login', name: 'Login' },
];
</script>

<template>

  
<div
  class="layout flex flex-col w-full relative items-start p-20px "
  >
    <h1 class="text-light-50 text-50px pt-30px">My portfolio</h1>
    <div class="contetnt flex flex-row justify-center items-center flex-wrap py-20px w-full ">
      <router-link
        v-for="(link, linkIndex) in links"
        :key="linkIndex"
        class="p-10px no-underline hover:opacity-50"
        :to="link.path"
      >
        <div class="item flex flex-col items-start rounded-16px p-10px">
          <img class="w-80 h-50 rounded-16px" :src="link.img" alt="">
          <span class="text-zinc-300 text-20px mt-6px">{{ link.name }}</span>
          <h1 class="text-zinc-300 text-15px opacity-50 mt-5px">{{ link.subtitle }}</h1>
        </div>
      </router-link>
    </div>
    <div class="flex justify-center w-full">
      <router-view/>
    </div>
  </div>

</template>

<style scoped lang="scss">
.layout {
  background-color: #031019;
  height: 100vh;
}
.item {
  background-color: #333333;
  transition-duration: 300ms;
  &:hover {
    transform: translateY(-10px);
  }
}

</style>