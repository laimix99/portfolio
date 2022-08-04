<script setup>
import PhotoBlock from './PhotoBlock.vue'

const items = [
  { title: 'Since 2018', description: ' in IT HR and IT employment' },
  { title: '150 000+', description: 'engineers <br/> vetted' },
  { title: '53 projects', description: 'in HR branding for clients around the world including TELUS, Luxoft and others' },
  { title: '7 500+', description: 'engineers <br/> employed' },
]
</script>

<template>
  <div class="sixth-section">
    <div class="container">
      <div class="top-container">
        <div class="left-col">
          <h1>We are <span>Geecko</span></h1>
          <h2>We connect companies with top-notch IT specialists through engaging, innovative tools!</h2>
          <h3>Our team is designed to help companies get the most out of their technical recruiting efforts and find the best engineers.</h3>
          <p> Our mission is to help developers grow, learn, and find their dream job within our encouraging community. With regular meetups and hackathons, we get to know our developers on a personal level. At Geecko, there is no mediator, only simple and effective tools to provide instant connections between developers and companies.</p>
       </div>
        <div class="right-col">
            <div class="items">
              <div class="item" v-for="item in items">
                <h4>{{ item.title }}</h4>
                <h5 v-html="item.description" />
              </div>
            </div>
        </div>
      </div>
      <PhotoBlock/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .sixth-section {
    @apply flex flex-col items-center w-full py-64px;
    .container {
      @apply flex flex-col items-center w-full max-w-1100px;
      .top-container {
        @apply flex flex-row items-center justify-between w-full;
        .left-col {
          @apply flex flex-col items-start;
          h1 {
            @apply text-52px font-400;
            color: #231F20;
            span {
              @apply font-600;
            }
          }
          h2 {
            @apply text-24px font-400 text-left w-full max-w-520px mt-16px; 
            line-height: 140%;
            color: #231F20;
          }
          h3 {
            @apply text-20px font-400 w-full max-w-538px text-left mt-24px;
            line-height: 140%;
            color: #4D4E57;
          }
          p {
            @apply text-20px font-400 w-full max-w-538px text-left mt-16px;
            line-height: 140%;
            color: #4D4E57;
          }
        }
        .right-col {
          @apply flex flex-col items-center;
          .items {
            @apply flex flex-row flex-wrap  items-start w-full max-w-380px;
            .item {
              @apply  flex flex-col items-start mx-20px mt-20px;
              width: calc(50% - 40px);
              &:nth-child(1) {
                width: calc(55% - 40px);
              }
              &:nth-child(2) {
                width: calc(45% - 20px);
                margin-right: 0;
              }
              &:nth-child(3) {
                width: calc(55% - 40px);
              
              }
              &:nth-child(4) {
                width: calc(45% - 20px);
                margin-right: 0;
              }
              h4 {
                @apply text-32px font-600 text-left;
                color: #263238;
              }
              h5 {
                @apply text-14px font-400 text-left mt-15px;
                line-height: 140%;
                color: #4D4E57;
              }
            }
          }
        }
      }
    }
  }
</style>
