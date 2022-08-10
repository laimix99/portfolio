<script setup>
import CardComputers from './CardComputers.vue'
import ButtonMy from './ButtonMy.vue'
const items = [
  { number: '30+', description: 'Сountries' },
  { number: '200+', description: 'Techs' },
  { number: '15', description: 'Job types' },
  { number: '5+', description: 'Seniority levels' },
]
</script>
 
<template>
  <div class="fifth-section">
    <div class="container">
      <h1>Unique <span>vetting tools</span></h1>
      <div class="subtitle">
        <div class="subtitle-text">
          <img class="crowm" src="/images/geecko/first-section/crown.png" alt="">
          <h2><span>156 000+</span> engineers <br/> have been scored <br/> by Geecko</h2>
        </div>
        <div class="items">
          <div class="item" v-for="item in items">
            <h3>{{ item.number }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <CardComputers/>
    <div class="bottom-block">
      <div class="bottom-block-item">
        <h4>save your time and</h4>
        <ButtonMy
          icon="coin"
          color="#FFD91D"
          text_color="#231F20"
          style="margin-top: 20px;"
        >
          HIRE IN 1 CLICK
        </ButtonMy>
        <h4>only 100% vetted candidates</h4>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fifth-section {
  @apply flex flex-col items-center w-full py-70px ;
  background: url('/images/geecko/fifth-section/bg.png')center bottom/cover no-repeat;
  overflow-x: hidden;
  .container {
    @apply flex flex-col items-start w-full max-w-1000px;
    @media screen and (max-width: 991px) {
      @apply px-20px;
    }
    h1 {
      @apply text-52px font-600 text-left;
      line-height: 120%;
      color: #FFFFFF;
      span {
        @apply font-400;
        color: #9591a9;
      }
    }
    .subtitle {
      @apply flex flex-row w-full pl-40px mt-64px;
      @media screen and (max-width: 991px) {
        @apply pl-0 mt-40px;
      }
      @media screen and (max-width: 767px) {
        @apply flex flex-col items-start;
      }
      &-text {
        @apply flex flex-row items-start;
        @media screen and (max-width: 767px) {
          @apply flex flex-col;
        }
        
        .crowm {
          @apply mr-24px;
        }
        h2 {
          @apply text-left text-24px mr-42px relative;
          line-height: 120%;
          color: #FFFFFF;
          @media screen and (max-width: 767px) {
            @apply mt-10px;
          }
          span {
            @apply font-600;
          }
        }
      }
      .items {
        @apply flex flex-row;
        @media screen and (max-width: 767px) {
          @apply flex-wrap w-full max-w-400px mt-20px;
        }
        .item {
          @apply mr-65px flex flex-col items-start;
          &:nth-child(4) {
            margin-right: 0px;
          }
          @media screen and (max-width: 767px) {
            @apply;
          }
          h3 {
            @apply text-32px ;
            line-height: 38px;
            color: #59598E;
            font-family: "Retro Computer";
          }
          p {
            @apply text-16px mt-30px;
            line-height: 120%;
            color: #FFFFFF;

          }
        }
      }
    }
  }
  .bottom-block {
    @apply flex flex-col items-center w-full;
    @media screen and (max-width: 767px) {
      @apply mt-20px;
    }
    &-item {
      @apply flex flex-row items-center w-full max-w-812px justify-between;
      @media screen and (max-width: 767px) {
        @apply flex-col ;
      }
      h4 {
        @apply text-14px font-400 text-white;
        font-family: "Retro Computer";
        animation: blink 1s infinite;
        @keyframes blink {
          from { opacity: 1;}
          to { opacity: 0;}
        }
        @media screen and (max-width: 767px) {
          @apply mt-20px;
        }
      }
    }
  }
}
</style>
