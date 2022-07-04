<script setup>
  import { ref, computed, reactive } from 'vue';
  import DeliTabs from '../Tabs.vue';
  import DeliTab from '../Tab.vue';
  const selected = ref('1 месяц')
  const setSelected = (tab) => {
    selected.value = tab;
  }
   const tabs = ref([
    {name:'1 месяц', content:[
      {
        title: "эконом",
        price: "от 3 190 ₽",
        services: [
          { service: "мойка: кузов + коврики", number: 2 },
          { service: "мобильная заправка", number: 2 },
        ],
      },
      {
        title: "комфорт",
        price: "от 4 990 ₽",
        services: [
          { service: "мойка: кузов + коврики", number: 2 },
          { service: "мойка комплексная", number: 1 },
          { service: "мобильная заправка", number: 2 }
        ],
      },
      {
        title: "бизнес", 
        price: "от 7 890 ₽",
        services: [
          { service: "мойка комплексная", number: 4 }, 
          { service: "мобильная заправка", number: 4 },
          { service: "помощь на дороге", number: 1 }
        ], 
      },
      {
        title: "семейный", 
        price: "от 15 490 ₽",
        services: [
          { service: "мойка комплексная", number: 6 },
          { service: "мобильная заправка", number: 6 }, 
          { service: "помощь на дороге", number: 1 },
          { service: "водитель автоконсьерж", number: 1 }
        ],
      },
    ]},
    {name:'3 месяца', content:[
      {
        title: "эконом",
        price: "от 6 190 ₽",
        services: [
          { service: "мойка: кузов + коврики", number: 6 },
          { service: "мобильная заправка", number: 6 }
        ],
      },
      {
        title: "комфорт",
        price: "от 7 990 ₽",
        services: [
          { service: "мойка: кузов + коврики", number: 2 },
          { service: "мойка комплексная", number: 1 },
          { service: "мобильная заправка", number: 2 }
        ],
      },
      {
        title: "бизнес",
        price: "от 9 890 ₽",
        services: [
          { service: "мойка комплексная", number: 4 },
          { service: "мобильная заправка", number: 4 },
          { service: "помощь на дороге", number: 1 }
        ],
      },
      {
        title: "семейный",
        price: "от 18 490 ₽",
        services: [
          { service: "мойка комплексная", number: 6 },
          { service: "мобильная заправка", number: 6 },
          { service: "помощь на дороге", number: 1 },
          { service: "водитель автоконсьерж", number: 1 }
        ],
      },
    ]},
    {
      name:'6 месяцев',
      content:[
        {
          title: "эконом",
          price: "от 9 190 ₽",
          services: [
            { service: "мойка: кузов + коврики", number: 8 },
            { service: "мобильная заправка", number: 8 }
          ],
        },
        {
          title: "комфорт",
          price: "от 10 990 ₽",
          services: [ 
            { service: "мойка: кузов + коврики", number: 6 },
            { service: "мойка комплексная", number: 2 },
            { service: "мобильная заправка", number: 6 }
          ],
        },
        {
          title: "бизнес",
           price: "от 12 890 ₽",
          services: [
            { service: "мойка комплексная", number: 4 },
            { service: "мобильная заправка", number: 4 },
            { service: "помощь на дороге", number: 1 }
          ],
        },
        {
          title: "семейный",
           price: "от 20 490 ₽",
          services: [
            { service: "мойка комплексная", number: 6 },
            { service: "мобильная заправка", number: 6} ,
            { service: "помощь на дороге", number: 1 },
            { service: "водитель автоконсьерж", number: 1 }
          ],
        },
      ]
    },
  ])
</script>

<template>
  <div class="page flex flex-col w-full max-w-1280px rounded-16px pt-30px pr-85px pl-104px box-border">
    <div class="page-header flex justify-between items-center">
      <h1 class="pl-24px not-italic font-500 text-64px leading-48px text-left">пакетные предложения *</h1>
      <span class="not-italic font-500 text-16px leading-20px text-left rounded-8px py-18px pr-65px pl-30px">экономьте до 27% в год на обслуживании авто</span>
      <img class="w-full max-w-220px -ml-100px" src="/images/offer-icons.png" alt="">
    </div>
    <DeliTabs 
      :tabs="tabs" 
      :selected="selected" 
      :classId="'tab-white'" 
      @selected="setSelected"
    >
      <DeliTab 
        v-for="tab in tabs" 
        :isSelected="selected === tab.name"
      >
        <div class="items flex flex-row justify-center w-full max-w-500px pr-20px" v-for="block in tab.content">
          <div class="item flex flex-col justify-between box-border rounded-16px w-full max-w-246px p-32px text-left " >
            <div class="div">
              <h1 class="title not-italic font-500 text-24px leading-30px m-0">{{ block.title}}</h1>
              <div class="services">
                <span class="service flex justify-between items-center not-italic font-300 text-14px leading-18px pb-12px pt-7px" v-for="service in block.services">
                  <div class="service-text font-300 text-14px leading-18px w-full max-w-149px">{{ service.service }}</div>
                  <div class="service-number rounded-4px not-italic font-300 text-12px leading-16px py-4px px-8px">{{ service.number }}</div>
                </span>
              </div>
            </div>
            <h2 class="price pt-10px not-italic font-500 text-24px leading-30px m-0">{{ block.price }}</h2>
          </div>
        </div>
      </DeliTab>
      
    </DeliTabs>
    <div class="page-text opacity-50 not-italic font-300 text-14px leading-18px pt-32px pb-50px">* войдите в мобильное приложение, чтобы узнать итоговую стоимость, рассчитанную именно для вашего автомобиля</div>
  </div>
</template>

<style lang="scss" scoped>
  .page {
    background-color: #152F4E;

    &-header {
      h1 {
        color: #FFFFFF;
        border-left: 8px solid #fff;
      }
      span {
        color: #FFFFFF;
        border: 1px solid #6CDDBB;

      }
      img {

      }
    }
    .items {
      .item {
        background: #FFFFFF;
        .title {
          color: #152F4E;
        }
        .services {
          
          .service {
          color: #152F4E;
          border-bottom: 1px solid #D5DCE6;

          &-text {
            color: #152F4E; 
          }
          &-number {
            background: #F2F5F8;
            color: #152F4E;
          }
        }
        }
        .price {
          color: #3FC099;
        }
      }
    }
    &-text {
      color: #FFFFFF;
    }
}

@media ( max-width: 991px ) {
  .page {


    &-header {
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 20px !important;
      }
      span {
        font-size: 15px;
      }
      img {
        width: 210px;
      } 
    }
    .items {

      .item {
        padding: 10px;
        // justify-content: start;
        // margin-right: 10px;
        div {

          .title {
            font-size: 22px;
          }
          .services {

            .service {
              padding-top: 4px;
              padding-bottom: 4px;
              &-text {
                font-size: 12px;
              }
              &-number {
                font-size: 12px;
              }
            }
          }
        }
        .price {
          font-size: 15px;
        }
      }
    }
  }
}

@media ( max-width: 768px ) {

  .page {
    // width: 100%;
    // max-width: 800px;
    align-items: center;

    &-header {

      h1 {
        border-left: none;
        padding: 0;
        width: 100%;
        font-size: 50px;
        line-height: 1;
        text-align: center;
      }
      span {
        display: none;
      }
      img {
        display: none;
      }

    }
    .items {
      // flex-direction: column;
      // flex-wrap: wrap;
        // display: flex;
        // flex-wrap: wrap;
        // width: 500px;
        min-height: 200px;
        margin-top: 20px;
        padding: 0;
        
      .item {
        // flex-wrap: wrap;
        // width: 50%;
      }
    }
  }
}
</style>




