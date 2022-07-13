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
      <div class="menu">
        <div class="menu-item">
          <h1>Menu</h1>
          <span v-for="m in menu">{{ m.title }}</span>
        </div>
      </div>
      <div class="utility-pages">
        <div class="utility-pages-item">
          <h1>Utility pages</h1>
          <span v-for="u in utilityPages">{{ u.title }}</span>
        </div>
      </div>
      <div class="follow">
        <div class="follow-item" >
          <h1>Follow us</h1>
          <span v-for="f in follow">{{ f.title }}</span>
        </div>
      </div>
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
    @apply flex flex-col items-center w-full pb-100px ;
    .container {
      @apply flex justify-start w-full max-w-1500px pt-200px;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      .menu {
        @apply flex flex-col items-start mr-110px;
        &-item {
          @apply flex flex-col items-start;
          h1 {
            @apply text-35px leading-41px font-700 mb-80px;
            color: #1A1A1A;
          }
          span {
            @apply text-22px leading-33px mb-25px cursor-pointer;
            color: #656565;
          }
        }
      }
      .utility-pages {
        @apply flex flex-col items-start mr-110px;
        &-item {
          @apply flex flex-col items-start;
          h1 {
            @apply text-35px leading-41px font-700 mb-80px;
            color: #1A1A1A;
          }
          span {
            @apply text-22px leading-33px mb-25px cursor-pointer;
            color: #656565;
          }
        }
      }
      .follow {
        @apply flex flex-col items-start mr-110px;
        &-item {
          @apply flex flex-col items-start;
          h1 {
            @apply text-35px leading-41px font-700 mb-80px;
            color: #1A1A1A;
          }
          span {
            @apply text-22px leading-33px mb-25px cursor-pointer;
            color: #656565;
          }
        }
      }
      .subscribe {
        @apply flex flex-col items-start py-66px px-45px rounded-48px box-border h-full max-h-500px; 
        background: #0582CA;
        &-title {
          @apply text-35px text-white font-700;
        }
        &-subtitle {
          @apply text-22px leading-33px text-white text-left mt-19px w-full max-w-450px; 
        }
        input {
          @apply text-22px py-27px pl-42px rounded-28px w-full max-w-472px mt-32px;
          outline: none;
        }
        button {
          @apply text-22px py-27px px-181px rounded-28px mt-32px;
          color: #0582CA;
          background-color: #fff;
          &:active {
            background-color: red;
          }
        }
      }
    }
  }
</style>
