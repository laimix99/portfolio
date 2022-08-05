<script setup>
import ButtonMy from './ButtonMy.vue'
</script>

<template>
  <div class="eleventh-section">
    <div class="container">
      <div class="title">
        <h1> <span>Don’t miss</span> your perfect match!</h1>
        <p>We're constantly adding new candidates to our database.  <br/>Hire them before your competitors do!</p>
      </div>
      <div class="contacts">
        <div class="contacts-title">
          <h2>email</h2>
        </div>
        <input type="text" placeholder="your email">
        <ButtonMy
          icon="letter"
          class="button"
        >
          keep me updated
        </ButtonMy>
        <p>By clicking on the button, you accept the  User Agreement and Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.eleventh-section {
  @apply flex flex-col items-center w-full py-48px;
  .container {
    @apply flex flex-row justify-between items-center w-full max-w-1100px;
    .title {
      @apply flex flex-col items-start;
      h1 {
        @apply text-42px font-400 text-left;
        color: #231F20;
        span {
          @apply font-600;
        }
      }
      p {
        @apply text-16px font-400 text-left mt-16px;
        line-height: 140%;
        color: #4D4E57;

      }
    }
    .contacts {
      @apply w-full max-w-288px flex flex-col items-center;
      &-title {
        @apply flex flex-col items-start w-full; 
        h2 {
          @apply text-12px font-600;
          color: #B2B8C6;
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
        color: #4D4E57;
        opacity: 0.6;
      }
    }
  }
}
</style>
