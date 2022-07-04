<script setup>
import { ref, computed, reactive } from 'vue';
const services  = ref([
  {name: 'договор'},
  {name: 'политика конфиденциальности'},
  {name: 'пользовательское соглашение'},
  {name: 'политика обработки персональных данных'},
])
const info = ref([
  {name: 'клиентская служба:'},
  {name: 'Москва и Московская область: 8 495 664-87-87'},
  {name: 'Санкт-Петербург: 8 812 448-87-87'},
  {name: 'Регионы: 8 800 600-87-87'},
  {name: 'info@delimobil.ru'},
])
</script>


<template>
<div class="DeliFooter flex flex-col justify-center w-full rounded-16px mt-40px">
  <div class="header flex flex-row items-start justify-between max-w-1280px pt-32px pr-32px pl-32px">
    <div class="services flex flex-col" >
      <a class="m-0 pb-24px text-left not-italic font-700 text-16px leading-20px" href="" v-for="service in services">{{ service.name }}</a>
      
    </div>
    <div class="info flex flex-col" >
      <span class="pb-13px text-left not-italic font-700 leading-20px" v-for="i in info">{{i.name}}</span>
    </div>
    <div class="communities flex flex-col">
      <a href=""><img class="pb-8px" src="/images/apple.svg" alt=""></a>
      <a href=""><img class="pb-8px" src="/images/google.svg" alt=""></a>
      <div class="messager flex justify-between">
        <a class="link rounded-8px" href=""><img class="cub p-9px" src="/images/icons-messanger1.svg" alt=""></a>
        <a class="link rounded-8px" href=""><img class="cub p-9px" src="/images/icons-messanger2.svg" alt=""></a>
        <a class="link rounded-8px" href=""><img class="cub p-9px" src="/images/icons-messanger3.svg" alt=""></a>
        <a class="link rounded-8px" href=""><img class="cub p-9px" src="/images/icons-messanger4.svg" alt=""></a>
      </div>
    </div>
  </div>
  <div class="contact px-32px flex items-center">
    <div class="band h-1px w-full"></div>
    <img class="chat p-12px rounded-16px" src="/images/chat.png" alt="">
  </div>
  <div class="address not-italic font-300 text-12px leading-16px">ООО "Делисервис" ОГРН 1177746569120 125009, г. Москва, ул. Тверская, д. 6, стр. 5. Помощь на дороге — круглосуточно.</div>
</div>
</template>

<style lang="scss" scoped>
.DeliFooter {
  background: #FFFFFF;
  .header {
    .services {
      a {
        color: #9DA8B5;
      }
    }
    .info {      
      span {
        color: #9DA8B5;
      }
    }
    .communities {
      img {
      }
      .messager {
        .link {
          background: #152F4E;
          .cub {

          }
        }
      }
    }
  }
  .contact {
    .band {
      background: #D5DCE6;
    }
    .chat {
      background: #D52B1E;
      box-shadow: 4px 8px 16px rgba(216, 47, 34, 0.5);
    }
  }
  .address {
    color: #9DA8B5;
  }
}
@media ( max-width: 991px ) {
  .DeliFooter {

    .header {

      .services {
        a {
          font-size: 12px;
          padding-bottom: 18px;
        }
      }
      .info {
        span {
          font-size: 12px;
          padding-bottom: 8px;
        }
      }
      .communities {
         img {
            width: 80%;
         }
      }
      .messager {
        justify-content: center !important;
        .cub {
          margin-right: 2px;
        }
      }
    }
  }
}
@media ( max-width: 768px ) {
  .header {
    padding: 10px 32px 0px 32px !important;
    .services {
      display: none !important;
    }
    .info {
      display: none !important;
    }
    .communities {
      flex-direction: row !important;
    }
  }
  .contact {
    .chat {
      padding: 5px !important;
    }
  }
  .address {
    font-size: 8px;
    margin-top: 4px;
    text-align: left;
  }
}
</style>