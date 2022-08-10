<script setup>
import ButtonMy from './ButtonMy.vue'
import Stop from './Stop.vue'
const items = [
  { title: 'Coding test — 98%', description: 'General Programming Python' },
  { title: 'English level', description: 'Proficiency (C2)' }
]
</script>

<template>
  <div class="fourth-section">
    <div class="container">
      <h1><span>Hack</span> the hiring process </h1>
      <p>with 60 second pitch and 1 week free trial</p>
      <div class="content">
        <div class="block">
          <div class="left-col">
            <div class="left-col-title">Fast track to hire</div>
            <div class="left-col-video">
              <!-- <video controls>
              <source src="dir/film.mp4" type="video/mp4">
              </video> -->
              <div class="video"></div>
            </div>
            <div class="left-col-description">Check out their video pitch</div>
          </div>
          <div class="right-col">
            <div class="right-col-name">Aleksei Morozov</div>
            <div class="right-col-items">
              <div class="item" v-for="item in items">
                <div class="item-title">{{ item.title }}</div>
                <div class="item-description">{{ item.description }}</div>
              </div>
            </div>
            <div class="button">
              <ButtonMy
                icon="coin"
                color="#4D4E57"
                text_color="#fff"
              >
                try 1 week free
              </ButtonMy>
            </div>
          </div>
          <Stop/>
        </div>
      </div>
      <div class="tools-block">
        <div class="tools-title">We've <span>Already Scored</span> them</div>
        <div class="tools-subtitle">for you  with award-winning tools</div>
        <div class="tools-description">SEE OUR Tools</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fourth-section {
  @apply flex flex-col items-center w-full py-100px;
  background: linear-gradient(180deg, rgba(226, 225, 221, 0.7) 0%, rgba(221, 217, 213, 0.4) 100%);
  .container {
    @apply flex flex-col items-start w-full max-w-980px  not-italic;
    @media screen and (max-width: 991px) {
      @apply p-24px;
    }
    h1 {
      @apply text-42px font-400;
      // font-family: 'Proxima Nova';
      line-height: 120%;
      color: #231F20;
      @media screen and (max-width: 767px) {
        @apply text-left;
      }
      span {
        @apply font-600;
      }
    }
    p {
      @apply text-24px font-400;
      font-family: 'Proxima Nova';
      line-height: 140%;
      color: #231F20;
      @media screen and (max-width: 991px) {
        @apply w-full max-w-400px text-left;
      }
      @media screen and (max-width: 767px) {
        @apply text-16px;
      }
    }
    .content {
      @apply flex flex-col items-start w-full;
      @media screen and (max-width: 767px) {
        @apply mt-50px;
      }

      .block {
        @apply flex flex-row items-center w-full justify-between pt-36px pl-83px pr-68px pb-33px relative mt-40px;
        background: rgba(255, 255, 255, 0.3);
        border: 0.5px solid #FFFFFF;
        border-radius: 15px;
        @media screen and (max-width: 767px) {
          @apply flex-col px-30px;
        }
        .left-col {
          @apply flex flex-col items-start;
          &-title {
            @apply text-16px font-400;
            line-height: 24px;
            color: #101014;
          }
          &-description {
            @apply text-14px font-400 mt-16px;
            line-height: 120%;
            color: #9D9D9D;
          }
          &-video {
            @apply mt-15px;
            video {
              @apply w-406px h-279px ;
              background: grey;
            }
          }
        }
        .right-col {
          @apply flex flex-col items-start;
          @media screen and (max-width: 767px) {
            @apply w-full;
          }
          &-name {
            @apply text-20px font-600;
            color: #101014;
          }
          &-items {
            @apply flex flex-col w-full mt-32px mb-32px;
            .item {
              @apply w-full max-w-391px flex flex-col items-start w-391px mt-10px py-14px pl-16px ;
              box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
              border-radius: 8px;
              @media screen and (max-width: 767px) {
                @apply w-full max-w-full;
              }
              &-title {
                @apply text-14px leading-10px font-600;
                color: #101014;
              }
              &-description {
                @apply text-12px leading-12px mt-12px;
                color: #4D4E57;
              }
            }
          }
          .button {
            @media screen and (max-width: 767px) {
              @apply w-full flex flex-col items-center;
            }
          }
        }
      }
    }
    .tools-block {
      @apply flex flex-col items-center w-full mt-32px;
      .tools-title {
        @apply text-32px font-400;
        line-height: 120%;
        text-align: center;
        color: #231F20;
        span {
          @apply font-600;
        }
      }
      .tools-subtitle {
        @apply text-16px font-400 mt-8px;
        line-height: 140%;
        color: #231F20;
      }
      .tools-description {
        @apply text-14px font-400 mt-35px relative flex flex-row items-center;
        font-family: "Retro Computer";
        line-height: 95.5%;
        color: #6B56ED;
        &::after {
          content: url('/images/geecko/fourth-section/down.png');
          @apply ml-10px;
        }
      }
    }
  }
}
</style>
