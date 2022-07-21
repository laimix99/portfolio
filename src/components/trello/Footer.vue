<script  setup>
import SVG from './SVG.vue'
  const props = defineProps({
    footerItem: {
      type: Array,
      default: () => [
        {title: 'About Trello', description: 'What’s behind the boards.'},
        {title: 'Jobs', description: 'Learn about open roles on the Trello team.'},
        {title: 'Apps', description: 'Download the Trello App for your Desktop or Mobile devices.'},
        {title: 'Contact us', description: 'Need anything? Get in touch and we can help.'},
      ]
    },
    infoItem: {
      type: Array,
      default: () => [
        {title: 'Privacy Policy', link: ''},
        {title: 'Terms', link: ''},
        {title: 'Cookie Settings', link: ''},
      ]
    },
    messengersInfo: {
      type: Array,
      default: () => [
        {img: '1', link: ''},
        {img: '2', link: ''},
        {img: '3', link: ''},
        {img: '4', link: ''},
        {img: '5', link: ''},
      ]
    }
  })
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="links br">
        <div class="registration">
          <h1>Trello</h1>
          <a class="log" href="">
            <span>Log In</span>
          </a>
        </div>
        <div class="link bg" v-for="item in footerItem">
          <a class="link-one br" href="">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </a>
        </div>
      </div>
      <div class="company-info">
        <div class="infos">
          <div class="info" v-for="info in infoItem">
            <a class="info-link" href="info.link">
              <h3>{{ info.title }}</h3>
            </a>
          </div>
        </div>
        <div class="messengers">
          <div class="messenger">
            <a class="messenger-link" href="" v-for="messenger in messengersInfo">
              <!-- <img :src="messenger.img" alt="">   -->
              
              <svg v-if="messenger.img === '1'" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg>
              <svg v-if="messenger.img === '2'" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .footer {
    @apply flex flex-col items-center  w-full pt-40px pb-20px;
    background-color: #172B4D;
  }
  .container {
    @apply w-full flex flex-col items-center max-w-1100px px-0px;
  }
  .links {
    @apply flex flex-row items-start w-full pb-20px;
  }
  .registration {
    @apply mr-30px;
  }
  h1 {
    @apply text-40px text-white;
  }
  .log {
    @apply h-0px p-0;
  }
  span {
    @apply text-1rem text-white pt-15px;
  }
  span:hover {
    text-decoration: underline;
  }
  .link {
    @apply mr-20px mt-5px ;
    width: calc(25% - 20px)
  }
  h2 {
    @apply text-1rem text-white text-left;
  }
  p {
    @apply text-0.75rem leading-20px text-white mt-15px w-full max-w-180px text-left;
  }
  .link-one {
    @apply flex flex-col items-start py-14px px-20px h-full max-h-90px;
  }
  .link-one:hover {
    background-color: rgb(125, 128, 132);
  }
  .company-info {
    @apply flex flex-row w-full pt-30px justify-between items-center;
    border-top: 1px solid grey;
  }
  .infos {
    @apply flex;
  }
  .info {
    @apply flex ;
  }
  .info-link {
    @apply p-0 mr-30px;
  }
  h3 {
    @apply text-0.75rem text-white;
  }
  .messengers {
    @apply flex;
  }
  .messenger {
    @apply flex flex-row;
  }
  .messenger-link {
    @apply h-24px w-24px mr-10px rounded-1/2;
    border: 1px solid #fff;
  }
  svg {
    @apply w-15px ml-3px  mt-3px;  
    fill: white;
    
  }
  svg:hover {
    @apply w-10px ml-6px  mt-5px;
  }
  @media screen and (max-width: 991px) {
    .container {
      @apply px-50px;
    }
    .registration {
      @apply flex justify-between mr-0 pb-15px;
    }
    .links {
      @apply flex-col;
    }
    .link {
      @apply w-full pt-10px;
      border-top: 1px solid grey;
    }
    .link-one {
      @apply p-0 w-full;
    }
    .link-one:hover {
      background-color: #172B4D;
      text-decoration: underline;
      text-decoration-color: white;
    }
    h2 {
      @apply max-w-full;
    }
    p {
      @apply max-w-full;
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      @apply px-20px;
    }
    .company-info {
      @apply flex-col items-start;
    }
    .messengers {
      @apply mt-30px;
    }
    .messenger-link {
      @apply mr-30px;
    }
  }
</style>
