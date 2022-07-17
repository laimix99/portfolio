<template>
  <div class="contacts">
    <h1>Наши контакты</h1>
    <div class="content">
      <div class="left-col">
        <a class="phone" href="tel:89655325020">Телефон: 8-965-532-50-20</a>
        <span>Без выходных, круглосуточно</span>
        <a class="email" href="mailto:Ubytkov@list.ru">E-mail: Ubytkov@list.ru</a>
        <p>Адрес: г. Екатеринбург, ул. Белинского, д. 222, 3 этаж, офис 18</p>
      </div>
      <div class="right-col">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2184.7142227257245!2d60.62741001595517!3d56.79937458084615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16eccb95641e9%3A0x5943557ed1624f23!2z0YPQuy4g0JHQtdC70LjQvdGB0LrQvtCz0L4sIDIyMiwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMTMw!5e0!3m2!1sru!2sru!4v1658082561765!5m2!1sru!2sru" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .contacts {
    @apply flex flex-col items-center w-full pt-50px pb-50px;
    border-top: 1px solid #CCD2DE ;
    h1 {
      @apply text-46px font-700;
      color: rgb(29, 28, 28);
    }
    .content {
      @apply flex  justify-between w-full mt-70px;
      .left-col {
        @apply flex flex-col items-start;
        .phone {
          @apply text-30px;
          color: #CE253D;
          &:hover {
            color: rgba(206, 37, 61, 0.6);
          }
        }
        span {
          @apply text-18px font-700 mt-20px;
          color: rgb(29, 28, 28);
        }
        .email {
          @apply text-30px font-700 mt-50px;
          color: rgb(29, 28, 28);
          &:hover {
            color: rgba(29, 28, 28, 0.6);
          }
        }
        p {
          @apply text-18px mt-20px w-full max-w-400px text-left leading-30px;
          color: rgb(29, 28, 28);
        }
      }
    }
  }
</style>
