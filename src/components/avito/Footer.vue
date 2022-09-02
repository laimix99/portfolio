<script setup>
const links = [
  {title: 'Правила турнира', path: ''},
  {title: 'Пользовательское соглашение', path: ''},
  {title: 'Согласие на обработку ПД', path: ''},
]
</script>

<template>
  <div class="footer">
    <div class="container">
      <img class="logo" src="/images/avito-layout/footer/logo.png" alt="">
      <div class="info">
        <div class="links">
          <a 
            v-for="link in links"
            :href="link.path"
          >
            <h1>{{ link.title }}</h1>
          </a>
        </div>
        <p>ООО «Смарт Гико». 125008, Россия, г. Москва, проезд Черепановых, д. 36, ОГРН: 1187746655359, ИНН/КПП: 7743264341/774301001</p>
      </div>
      <a href="">© 2021 Права защищены</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  @apply flex flex-col items-center w-full pt-37px pb-10px;
  background: #01002A;
  @media screen and (max-width: 767px) {
    display: none;
  }
  .container {
    @apply flex flex-row items-start justify-between w-full max-w-1150px px-5px;
    .logo {
      @apply w-100px h-24px;
      border: 2px solid black;
    }
    .info {
      @apply flex flex-col items-start;
      .links {
        @apply flex flex-row;
        a {
          @apply mr-24px;
          h1 {
            @apply text-16px font-400 ;
            color: #AAAAAA;
          }
        }
      }
      p {
        @apply text-10px mt-16px;
        color: #AAAAAA;
      }
    }
    a {
      @apply text-16px font-400;
      color: #AAAAAA;
    }
  }
}
</style>
