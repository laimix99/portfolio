<script setup>
const items = [
  {
    title: 'service package',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet adipiscing bibendum velit bibendum.',
    link: '',
    button: 'contact me',
  },
  {
    title: 'service package',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet adipiscing bibendum velit bibendum.',
    link: '',
    button: 'contact me',
  },
]
</script>

<template>
  <div class="fifth-section">
    <div class="container">
      <div class="items" >
        <div class="item" v-for="item in items">
          <h1>{{ item.title }}</h1>
          <span>{{ item.description }}</span>
          <a :href="item.link">
            <button>{{ item.button }}</button>
          </a>
          <div class="next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="21" width="21"><path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/></svg>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<style scoped lang="scss">
.fifth-section {
  @apply flex flex-col items-center w-full mt-150px;
  background: rgba(183, 76, 76, 0.35);
  .container {
    @apply flex flex-row items-center w-full max-w-1110px px-10px py-60px;
    .items {
      @apply flex flex-row w-full;
      .item {
        @apply flex flex-col items-start mx-15px py-45px pl-40px relative;
        width: calc(50% - 30px);
        background: white;
        h1 {
          @apply text-36px font-700 text-black;
          font-family: 'Poppins', sans-serif;
        }
        span {
          @apply text-18px text-black leading-30px text-left w-full max-w-350px mt-30px;
          font-family: 'Poppins', sans-serif;
        }
        a {

          button {
            @apply text-20px font-700 text-black rounded-10px py-30px px-90px mt-50px;
            background: rgba(192, 105, 77, 0.47);
            &:hover {
              background: rgba(138, 82, 64, 0.47);  
            }
          }
        }
        .next {
          @apply absolute right-30px top-38px rounded-1/2 p-10px;
          border: 1px solid black;
        }
      }
    }
  }
}
</style>
