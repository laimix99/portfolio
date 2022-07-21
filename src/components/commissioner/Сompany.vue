<template>
  <div class="company">
    <div class="container">
      <!-- <h3 class="relative z-4" style="color: red; font-size:42px;">Секция 5: нужен текст. Если эту секцию не надо то я ее уберу</h3> -->
      <h1>О компании</h1>
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quidem nam, explicabo cumque sit repudiandae iste nisi sint eaque possimus modi eos, facilis corrupti voluptates magni rem enim dolore provident.
        Voluptates cum deserunt ipsa neque adipisci veritatis vero quos blanditiis similique possimus! Qui, quos nemo maiores ratione saepe reprehenderit ipsum doloremque numquam corrupti, atque necessitatibus quibusdam perferendis? Veritatis, dolorum ipsam?
        Fugiat ea, corporis doloremque modi ipsum earum similique nesciunt vel voluptatum. Id corrupti hic eum harum numquam voluptatem rem ipsa maxime repudiandae deleniti porro vero delectus, reiciendis debitis, veniam quisquam!
        Saepe perferendis, consequuntur hic quaerat facilis corrupti dicta assumenda a amet veniam eum itaque molestias provident sit labore autem veritatis ex repellendus voluptates illum atque omnis eos placeat possimus. Dignissimos!
        Veritatis, sequi incidunt nobis ipsam maxime nesciunt laudantium qui iusto? Porro ea amet minima impedit quae at voluptates obcaecati sequi voluptas sapiente cupiditate, rem perferendis placeat aperiam dolores eveniet fuga?
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .company {
    @apply flex flex-col items-center w-full py-100px;
    background-color: #21283F;
    .container {
      @apply flex flex-col items-center max-w-1100px;
      @media screen and (max-width: 991px) {
        @apply px-10px;
      }
      h1 {
        @apply text-46px font-700;
        color: #F2F2F4;
        @media screen and (max-width: 767px) {
          @apply text-30px;
        }
      }
      span {
        @apply text-22px leading-33px text-left mt-50px;
        color: #F2F2F4;
        @media screen and (max-width: 767px) {
          @apply text-18px leading-30px;
        }
      }
    }
  }
</style>
