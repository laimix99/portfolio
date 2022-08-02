<script setup>

const links = [
  'Geecko benefits',
  'How it Works?',
  'Fast track to hire',
  'Trusted by',
  'Hire dev',
]
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="menu">
        <div class="logo">
          <img src="/images/geecko/header/logo.png" alt="">
        </div>
        <div class="links">
          <button class="link" v-for="link in links">
            {{ link }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply flex flex-col items-center w-full;
  .container {
    @apply flex flex-col items-center w-full max-w-1110px px-10px;
    .menu {
      @apply flex flex-row items-center justify-between w-full py-10px;
      .logo {
        @apply w-121px;
      }
      .links {
        @apply flex flex-row justify-between w-full max-w-810px;
        .link {
          @apply py-16px px-24px text-14px rounded-50px font-500;
          background: #FCFCFC;
          color: #4D4E57;
          &:nth-child(5) {
            @apply flex flex-row items-center text-10px font-700  uppercase not-italic ;
            font-family: "Retro Computer";
            position: relative;
            &::after {
              content: url('/images/geecko/header/coin.png');
              @apply ml-10px;
            }
          }
          &:hover {
            background: #4D4E57;
            color: #FCFCFC;
          }
        }
      }
    }
  }
}
</style>
