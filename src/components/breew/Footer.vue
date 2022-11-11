<script setup>
  const menu = [
    {title: 'Home', link: ''},
    {title: 'About', link: ''},
    {title: 'Contact', link: ''},
    {title: 'Blog', link: ''},
    {title: 'Blog post', link: ''},
    {title: 'Pricing', link: ''},
    {title: 'Pricing Single', link: ''},
  ]
  const utilityPages = [
    {title: 'Start Here', link: ''},
    {title: 'Style Guide', link: ''},
    {title: 'Password Protected', link: ''},
    {title: '404 Not Found', link: ''},
    {title: 'Licenses', link: ''},
    {title: 'Changelog', link: ''},
    {title: 'Browse more templates', link: ''},
  ]
  const follow = [
    {title: 'Facebook', link: ''},
    {title: 'Instagram', link: ''},
    {title: 'Twitter', link: ''},
    {title: 'LinkedIn', link: ''},
    {title: 'Youtube', link: ''},
    {title: 'Discord', link: ''},
  ]
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="subscribe">
        <div class="subscribe-title">Subscribe to our newsletter </div>
        <div class="subscribe-subtitle">Recieve upto info about latest trends and and news updates via email. </div>
        <input type="text" placeholder="your email">
        <button>Subscribe</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .footer {
    @apply flex flex-col w-full pb-100px items-center ;
    .container {
      @apply flex w-full max-w-1500px pt-200px justify-start;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      @media screen and (max-width: 1500px) {
        @apply flex-col max-w-1100px px-10px pt-50px items-center;
      }
      .menu {
        @apply flex flex-col mr-110px items-start;
        @media screen and (max-width: 1500px) {
          @apply flex-row mr-0 items-center;
        }
        @media screen and (max-width: 767px) {
          @apply hidden; 
        }
        &-item {
          @apply flex flex-col items-start;
          @media screen and (max-width: 1500px) {
            @apply flex-row mb-40px w-full items-center justify-between;
          }
          h1 {
            @apply font-700 mb-80px text-35px leading-41px;
            color: #1A1A1A;
            @media screen and (max-width: 1500px) {
              @apply mb-0;
            }
          }
          span {
            @apply cursor-pointer mb-25px text-22px leading-33px;
            color: #656565;
            @media screen and (max-width: 1500px) {
              @apply mr-10px mb-0;
            }
          }
        }
      }
      .utility-pages {
        @apply flex flex-col mr-110px items-start;
        @media screen and (max-width: 1500px) {
          @apply hidden;
        }
        &-item {
          @apply flex flex-col items-start;
          h1 {
            @apply font-700 mb-80px text-35px leading-41px;
            color: #1A1A1A;
          }
          span {
            @apply cursor-pointer mb-25px text-22px leading-33px;
            color: #656565;
          }
        }
      }
      .follow {
        @apply flex flex-col mr-110px items-start;
        @media screen and (max-width: 1500px) {
          @apply hidden;
        }
        &-item {
          @apply flex flex-col items-start;
          h1 {
            @apply font-700 mb-80px text-35px leading-41px;
            color: #1A1A1A;
          }
          span {
            @apply cursor-pointer mb-25px text-22px leading-33px;
            color: #656565;
          }
        }
      }
      .subscribe {
        @apply flex flex-col h-full rounded-48px max-h-500px py-66px px-45px items-start box-border; 
        background: #0582CA;
        @media screen and (max-width: 767px) {
          @apply py-20px px-10px items-center;
        }
        &-title {
          @apply font-700 text-white text-35px;
        }
        &-subtitle {
          @apply mt-19px text-white text-left w-full max-w-450px text-22px leading-33px;
          @media screen and (max-width: 767px) {
            @apply max-w-350px;
          }
        }
        input {
          @apply rounded-28px mt-32px w-full max-w-472px py-27px pl-42px text-22px;
          outline: none;
          @media screen and (max-width: 767px) {
            @apply max-w-350px;
          }
        }
        button {
          @apply rounded-28px mt-32px py-27px px-181px text-22px;
          color: #0582CA;
          background-color: #fff;
          @media screen and (max-width: 767px) {
            @apply w-full max-w-350px px-50px;
          }
          &:active {
            background-color: red;
          }
        }
      }
    }
  }
</style>
