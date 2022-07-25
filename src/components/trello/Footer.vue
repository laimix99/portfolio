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
      <div class="links">
        <div class="registration">
          <h1>Trello</h1>
          <a class="log" href="">
            <span>Log In</span>
          </a>
        </div>
        <div class="link" v-for="item in footerItem">
          <a class="link-one" href="">
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
              
              <svg v-if="messenger.img === '1'" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="30px" height="30px">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg>
              <svg v-if="messenger.img === '2'" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px">    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/></svg>
              <svg v-if="messenger.img === '3'" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>
              <svg v-if="messenger.img === '4'" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"/></svg>
              <svg v-if="messenger.img === '5'" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
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
    @apply  mr-10px;
    /* border: 1px solid #fff; */
  }
  svg {
    @apply w-20px mb-10px  ;  
    fill: white;
    
  }
  svg:hover {
    fill: rgb(199, 44, 147);
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
