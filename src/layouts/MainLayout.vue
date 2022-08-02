<script setup>
const links = [
  { path: '/calculator', name: 'Calculator',img: 'https://kartinkin.net/uploads/posts/2021-07/1626739220_8-kartinkin-com-p-kalkulyator-fon-krasivo-9.jpg', subtitle: 'Here you can see different versions of Calculator' },
  { path: '/todo', name: 'Todo', img: 'https://smartprogress.do/uploadImages/001487344.jpg', subtitle: 'Here you can see different versions of ToDo' },
  { path: '/movies', name: 'Movies', img: 'https://xchip.ru/wp-content/uploads/2021/09/yvavya.jpg', subtitle: 'Application for the movies and series search' },
  { path: '/photographer', name: 'Photographer', img: 'https://static-cdn5.vigbo.tech/u2973/47326/blog/4207466/2993450/37770917/1000-f5195c6a20508d0cdc0d4aa514865bd1.jpg', subtitle: 'Photographer website' },
  { path: '/deli', name: 'Deli', img: 'https://investelite.ru/wp-content/uploads/2021/10/1577440491_gf7tmw-9k6m.jpg', subtitle: 'Delimobile website' },
  { path: '/krypto', name: 'Krypto', img: '/images/krypto/main-layout/cover.png', subtitle: 'Krypto website' },
  { path: '/breew', name: 'Breew', img: '/images/breew/main-layout/breew-bg.png', subtitle: 'Breew website' },
  { path: '/trello', name: 'Trello', img: 'https://telecomdaily.ru/img/news/2021/02_21/trello.jpg', subtitle: 'trello website' },
  { path: '/commissioner', name: 'Сommissioner', img: 'https://оценка174.рф/images/img/avariynyy-komissar.jpg', subtitle: 'Сommissioner website' },
  { path: '/geecko', name: 'Geecko', img: '', subtitle: '' },
  // { path: '/', name: 'My app' },
  // { path: '/spinner', name: 'Spinner' },
  // { path: '/stock', name: 'Stock' },
  // { path: '/login', name: 'Login' },

];
</script>

<template>

  
<div
  class="layout flex flex-col w-100vw h-100vh relative items-center"
  >
    <div class="name" />
    <div class="w-full flex flex-col items-start  max-w-1600px lg:p-20px p-10px">
      <h1 class="title text-light-50 text-50px pt-30px leading-60px">laimix99 gallery</h1>
      <div class=" mt-50px flex flex-row justify-start items-center flex-wrap py-20px w-full z-2">
        
        <router-link
          v-for="(link, linkIndex) in links"
          :key="linkIndex"
          class="item flex flex-col mb-20px justify-between items-start rounded-16px p-10px z-2"
          :to="link.path"
        >
          <img class="w-full rounded-16px z-4" :src="link.img" alt="">
          <div class="item-info flex flex-col items-start justify-start w-full">
            <span class="text-white text-2vw z-4 mt-6">{{ link.name }}</span>
            <span class="text-gray-300 font-200 text-left text-1vw mt-0.5vw z-2">{{ link.subtitle }}</span>
          </div>
        </router-link>
      </div>
    </div>
    <!-- <div class="flex justify-center w-full z-2">
      <router-view/>
    </div> -->
  </div>

</template>

<style scoped lang="scss">
.layout {
  // background: url('https://media1.giphy.com/media/ZVik7pBtu9dNS/giphy.gif?cid=ecf05e47rst13k9d9bbblr3n084srlcjt14d36ve0u0hcuis&rid=giphy.gif&ct=g')center center/cover no-repeat;
  background-color: black;
  overflow-x: hidden;
}
.item {
  width: calc(25% - 20px);
  box-sizing: border-box;
  background: #355C7D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  transition-duration: 300ms;
  position: relative;
  aspect-ratio: 340/320;
  margin: 0 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 1600px) {
    width: calc(33.33% - 20px);
    margin: 0 10px;
    margin-bottom: 20px;
    span {
      font-size: 2vw;
      &:nth-child(2) {
        font-size: 1vw;
        margin-top: 0.5vw;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    width: calc(50% - 20px);
    margin: 0 10px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 330px;
    margin: 0px 5px;
    margin-bottom: 20px;
    span {
      font-size: 24px;
      &:nth-child(2) {
        font-size: 18px;
        margin-top: 6px;
      }
    }
  }
  &-info {
    min-height: 30%;
    height: 30%;
  }
  img {
    // object-fit: cover;
    min-height: 65%;
    height: 65%;
  }
  span {
    font-size: 24px;
    &:nth-child(2) {
      font-size: 18px;
      margin-top: 6px;
    }
  }
  &:after {
    content: '';
    width: 100%;
    position: absolute;
    height: 100%;
    border-radius: 16px;
    background: rgb(0,0,0,0.15);
    top: 0;
    left: 0;
    z-index: 2;
    // pointer-events: none;
  }
  &:hover {
    transform: translateY(-10px);
  }
}

.name {
  background: rgb(0,0,0,0.5);
  @apply fixed inset-0 w-full overflow-hidden max-w-100vw h-screen;
  &:after {
    content: 'laimix99';
    font-family: 'Splash', cursive;
    font-stretch: 200% !important;
    font-weight: 700;
    color: rgba(173, 125, 164, 0.15);
    font-size: 28vw;
    position: absolute;
    bottom: 20vh;
    left: 0;
    transform:
      scale(1, 2.5);
  }
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