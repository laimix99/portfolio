<script setup>
import ButtonMy from './ButtonMy.vue'
</script>

<template>
  <div class="tenth-section">
    <div class="container">
      <div class="title">
        <h1>Still have questions?</h1>
      </div>
      <img src="/images/geecko/tenth-section/item.png" alt="">
      <div class="contacts">
        <div class="contacts-title">
          <h2>phone number</h2>
        </div>
        <input type="tel" placeholder="201-555-0123">
        <ButtonMy
          icon="grya"
          class="button"
        >
          Schedule a call
        </ButtonMy>
        <p>By clicking on the button, you accept the  User Agreement and Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tenth-section {
  @apply flex flex-col items-center w-full py-39px;
  background: url('/images/geecko/tenth-section/bg.png');
  background-size: cover;
  .container {
    @apply flex flex-row items-center w-full max-w-1100px justify-between;
    @media screen and (max-width: 767px) {
      @apply flex-col items-center px-20px -mt-10px;
    } 
    .title {
      @apply flex flex-row justify-start items-start w-full ;
      h1 {
        @apply text-42px font-400;
        color: #FFFFFF;
        @media screen and (max-width: 767px) {
          @apply text-42px text-left;
        }
      }
    }
    img {
      @apply mr-90px mb-30px;
      @media screen and (max-width: 767px) {
        @apply m-0;
      }
    }
    .contacts {
      @apply w-full max-w-288px flex flex-col items-center;
      @media screen and (max-width: 767px) {
        @apply max-w-full -mt-10px;
      }
      &-title {
        @apply flex flex-col items-start w-full; 
        h2 {
          @apply text-12px font-600;
          color: #B2B8C6;
          @media screen and (max-width: 767px) {
            display: none;
          }
        }
      }
      input {
        @apply w-full mt-5px py-8px pl-30px;
        background: #FFFFFF;
        border: 1px solid #F7F8FC;
        border-radius: 4px;
      }
      .button {
        @apply w-full mt-24px;
      }
      p {
        @apply text-12px font-400 leading-14px mt-24px text-center w-full max-w-240px;
        color: #FFFFFF;
        opacity: 0.6;
      }
    }
  }
}
</style>
