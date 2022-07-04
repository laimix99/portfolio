<script setup>
import { ref, computed, reactive } from 'vue';

</script>

<template>
  <div class="CarParkServicesDeli w-full max-w-1008px max-h-519px mt-80px">
    <div class="header flex flex-col items-start py-80px pl-104px">
      <div class="title not-italic font-500 text-24px leading-30px w-full max-w-408px text-left ">A если в вашем бизнесе есть собственный автопарк...</div>
      <div class="subtitle w-full max-w-408px text-left pt-20px leading-30px">то задумывались ли вы о том, насколько сильно вас отвлекает обслуживание машин от основных задач? Пришло время задуматься и передать эту функцию нам, пока вы занимаетесь тем, что по-настоящему важно для ведения и развития вашего бизнеса!</div>
      <a class="link pt-71px" href="">
        <button class="rounded-8px py-22px px-32px cursor-pointer">подробнее о сервисе для бизнеса </button>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.CarParkServicesDeli {
  background: url('/images/bg-car.png')center center/cover no-repeat;
  
  .header {

    .title {
      color: #fff;
    }
    .subtitle {
      color: #FFFFFF;
    }
    .link {


      button {
        background: #6CDDBB;
        color: #152F4E;
      }
    }
  }
}


@media ( max-width: 768px )  {
  .header {
    padding: 20px !important;
    align-items: center;

    .title {
      font-size: 15px !important;
    }
    .subtitle  {
      font-size: 11px !important;
    }
    .link {

      button {
        // display: block;
        font-size: 11px;
        padding: 10px 12px !important;
      }
    }
  }
}

</style>