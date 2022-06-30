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
  class="layout flex flex-col w-full relative items-center"
  >
    <h1 class="name absolute bottom-0 left-0 z-1 opacity-50">laimix99</h1>
    <div class="w-full flex flex-col items-start  max-w-1600px p-20px">
      <h1 class="title text-light-50 text-50px pt-30px">My portfolio</h1>
      <div class=" mt-50px m-auto contetnt flex flex-row justify-start items-center flex-wrap py-20px w-full z-2">
        
        <router-link
          v-for="(link, linkIndex) in links"
          :key="linkIndex"
          class="item flex flex-col mr-20px mb-20px items-start rounded-16px p-10px z-2"
          :to="link.path"
        >
          <img class="w-80 h-50 rounded-16px z-2" :src="link.img" alt="">
          <span class="text-zinc-300 text-30px mt-15px z-2">{{ link.name }}</span>
          <h1 class="text-zinc-300 text-15px opacity-50 mt-10px z-2">{{ link.subtitle }}</h1>
        </router-link>
      </div>
    </div>
    <div class="flex justify-center w-full z-2">
      <router-view/>
    </div>
  </div>

</template>

<style scoped lang="scss">
.layout {
  // background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  width: 100vw;
  background: url('https://media1.giphy.com/media/ZVik7pBtu9dNS/giphy.gif?cid=ecf05e47rst13k9d9bbblr3n084srlcjt14d36ve0u0hcuis&rid=giphy.gif&ct=g')center center/cover no-repeat;
  height: 100vh;
  overflow: hidden;
}
.item {
  background: #355C7D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  transition-duration: 300ms;
  &:hover {
    transform: translateY(-10px);
  }
}

.name {
  font-size: 25vw;
  line-height: 100%;
  color: #fff;
  font-weight: 700;
  opacity: 0.15;
}
.title {
  background-color: #74EBD5;
  background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 50%, #74EBD5 100%,);

  background-size: 200% auto;
  
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  animation: shine 1s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}

</style>