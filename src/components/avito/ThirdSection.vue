<script setup>
const items = [
  'Javascript',
  'Python',
  'Ruby',
  'PHP',
  'C#',
  'Kotlin',
  'C++',
  'Go',
  'TypeScript',
  'Java',
  'Swift',
  'Elixir',
  'Rust',
  'Scala',
  'Dart',
  'Objective-C',
]
</script>

<template>
  <div class="third-section">
    <div class="container">
      <h1>Проверь свои навыки на любом из языков!</h1>
      <div class="items">
        <span v-for="item in items">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.third-section {
  @apply flex flex-col items-center w-full pt-50px mt-50px; 
  background: #F1EFE5;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  box-shadow: 4px 4px 0px rgba(134, 126, 118, 0.62);
  .container {
    @apply flex flex-col items-center w-full max-w-1100px px-5px;
    h1 {
      @apply text-32px font-500;
      color: #01002A;
      font-family: 'Jost', sans-serif;
    }
    .items {
      @apply flex flex-row flex-wrap w-full mt-33px justify-center pb-40px;
      span {
        @apply text-18px font-500 py-12px px-20px mx-8px mt-16px; 
        color: #3E3431;
        background: #FFFDF3;
        box-shadow: 2px 2px 0px rgba(26, 26, 26, 0.32);
        border-radius: 7px;
      }
    }
  }
}
</style>
