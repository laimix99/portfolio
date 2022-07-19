<script setup>
  import { ref } from 'vue'
  import MyInput from './MyInput.vue'
  const form = ref({
    name: '',
    email: '',
    phone: '',
  })
</script>

<template>
  <div class="contacts">
    <h1>Наши контакты</h1>
    <div class="content">
      <div class="left-col">
        <div class="contact-us">
          <h2>Свяжитесь с нами</h2>
          <MyInput
            :placeholder="'Имя'"
            icon="name"
            v-model="form.name"
          />
          <MyInput
            :placeholder="'Email'"
            icon="email"
            v-model="form.email"
          />
          <MyInput
            :placeholder="'Телефон'"
            icon="phone"
            v-model="form.phone"
            type="tel"
          />
          <button>Отправить</button>
          <div class="link">
            <a class="email" href="mailto:Ubytkov@list.ru">E-mail: Ubytkov@list.ru</a>
            <a class="phone" href="tel:89655325020">Телефон: 8-965-532-50-20</a>
          </div>
        </div>
      </div>
      <div class="right-col">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2184.7142227257245!2d60.62741001595517!3d56.79937458084615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16eccb95641e9%3A0x5943557ed1624f23!2z0YPQuy4g0JHQtdC70LjQvdGB0LrQvtCz0L4sIDIyMiwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMTMw!5e0!3m2!1sru!2sru!4v1658082561765!5m2!1sru!2sru" width="500" height="400" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .contacts {
    @apply flex flex-col items-center w-full pt-50px pb-50px;
    // border-top: 1px solid #CCD2DE ;
    background-color: #21283F;
    
    h1 {
      @apply text-46px font-700;
      color: #F2F2F4;
    }
    .content {
      @apply flex items-start justify-between w-full max-w-1100px mt-70px px-20px;
      // box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
      .left-col {
        @apply flex flex-col w-full  ;
        .contact-us {
          @apply flex flex-col items-center;
          h2 {
            @apply text-20px;
            color: #F2F2F4;
          }
          button {
            @apply w-full max-w-400px py-10px mt-30px rounded-32px;
            background-color: #3281B9;
            color: #F2F2F4;
            &:hover {
              background-color: rgba(50, 129, 185, 0.6);
            }
          }
          .link {
            @apply flex flex-col mt-40px;
            a {
            @apply mt-10px text-15px;
            color: #F2F2F4;
            &:hover {
              color: rgba(242, 242, 244, 0.6);
            }
          }
          }
        }
      }
      .right-col {

        iframe {

        }
      }
    }
  }
</style>
