<script setup>
  const users = [
    {place: 1, img: '/images/avito-layout/fifth-section/cat.png', name: 'Ivan Zheludkov', point: 5000},
    {place: 2, img: '/images/avito-layout/fifth-section/cat.png', name: 'Nikita Artemiev', point: 4900},
    {place: 3, img: '/images/avito-layout/fifth-section/bat.png', name: 'Vazoooooo!', point: 4800},
    {place: 4, img: '/images/avito-layout/fifth-section/cat.png', name: 'MetalCare', point: 4700},
    {place: 5, img: '/images/avito-layout/fifth-section/bat.png', name: 'Max', point: 4600},
    {place: 6, img: '/images/avito-layout/fifth-section/bat.png', name: 'Vlad E', point: 4500},
    {place: 7, img: '/images/avito-layout/fifth-section/bat.png', name: 'Арсений Креститель', point: 4400},
    {place: 8, img: '/images/avito-layout/fifth-section/plant.png', name: 'Томми Версети', point: 4300},
    {place: 9, img: '/images/avito-layout/fifth-section/plant.png', name: 'Ivan Zheludkov', point: 4200},
    {place: 10, img: '/images/avito-layout/fifth-section/bat.png', name: 'Nikola', point: 4100},
    {place: 11, img: '/images/avito-layout/fifth-section/cat.png', name: 'Kirill', point: 4000},
    {place: 12, img: '/images/avito-layout/fifth-section/cat.png', name: 'Andrey', point: 3900},
    {place: 13, img: '/images/avito-layout/fifth-section/plant.png', name: 'Vova', point: 3800},
    {place: 14, img: '/images/avito-layout/fifth-section/cat.png', name: 'laimix99', point: 2200},
    {place: 15, img: '/images/avito-layout/fifth-section/cat.png', name: 'Rita', point: 2100},
    {place: 16, img: '/images/avito-layout/fifth-section/cat.png', name: 'Arina', point: 1000},
    {place: 17, img: '/images/avito-layout/fifth-section/cat.png', name: 'Roman', point: 600},
  
  ]
  </script>
  
  <template>
    <div class="this-weeks-top">
      <div 
        v-for="user in users"
        class="user"
      >
        <div class="user-title">
          <h1>{{ user.place }}</h1>
          <img class="avatar" :src="user.img" alt="">
          <h2>{{ user.name }}</h2>
        </div>
        <span>{{ user.point }}</span>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .this-weeks-top {
    @apply flex flex-col items-start w-full max-w-720px;
    .user {
      @apply flex flex-row items-center justify-between w-full mt-5px pb-4px;
      border-bottom: 1px solid #DBD7C4;
      &-title {
        @apply flex flex-row items-center;
        h1 {
          @apply text-16px font-500 mr-5px;
          font-family: 'Jost', sans-serif;
          color: #01002A;
          opacity: 0.5;
        }
        .avatar {
          @apply w-32px h-32px mr-12px;
        }
        h2 {
          @apply text-16px font-500 mr-5px;
          font-family: 'Jost', sans-serif;
          color: #01002A;
          // opacity: 0.5;
        }
      }
      span {
        @apply text-16px font-500 mr-5px;
          font-family: 'Jost', sans-serif;
          color: #01002A;
      }
    }
  }
  </style>
  