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
  <div class="page">
    <div class="page-header">
      <h1 >пакетные предложения *</h1>
      <span>экономьте до 27% в год на обслуживании авто</span>
      <img src="/images/offer-icons.png" alt="">
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
        <div class="items" v-for="block in tab.content">
          <div class="item" >
            <div class="div">
              <h1 class="title">{{ block.title}}</h1>
              <div class="services">
                <span class="service" v-for="service in block.services">
                  <div class="service-text">{{ service.service }}</div>
                  <div class="service-number">{{ service.number }}</div>
                </span>
              </div>
            </div>
            <h2 class="price">{{ block.price }}</h2>
          </div>
        </div>
      </DeliTab>
      
    </DeliTabs>
    <div class="page-text">* войдите в мобильное приложение, чтобы узнать итоговую стоимость, рассчитанную именно для вашего автомобиля</div>
  </div>
</template>

<style lang="scss" scoped>
  .page {
    width: 100%;
    max-width: 1280px;
    background-color: #152F4E;
    border-radius: 16px;
    padding: 30px 85px 0px 104px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      

      h1 {
        padding-left: 24px;
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 48px;
        color: #FFFFFF;
        text-align: left;
        border-left: 8px solid #fff;
      }
      span {
        // width: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        text-align: left;
        border: 1px solid #6CDDBB;
        border-radius: 8px;
        padding: 18px 65px 18px 30px;
        // width: 185px;
      }
      img {
        width: 100%;
        max-width: 220px;
        margin-left:-100px ;
      }
    }
    .items {
      display: flex;
      width: 100%;
      max-width: 500px;
      flex-direction: row;
      justify-content: center;
      padding-right: 20px;
      .item {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        background: #FFFFFF;
        border-radius: 16px;
        width: 100%;
        max-width: 246px !important;
        // min-height: 302px;
        padding: 32px;
        text-align: left;
        .title {
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 30px;
          color: #152F4E;
          margin: 0px;
        }
        .services {
          
          .service {
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 18px;
          color: #152F4E;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #D5DCE6;
          padding-bottom: 12px;
          padding-top: 7px;
        

          

          &-text {
            font-weight: 300;
            font-size: 14px;
            line-height: 18px;
            color: #152F4E; 
            width: 100%;
            max-width: 149px;
          }
          &-number {
            background: #F2F5F8;
            border-radius: 4px;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 16px;
            color: #152F4E;
            padding: 4px 8px;
          }
        }
        }
        .price {
          padding-top: 10px;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 30px;
          color: #3FC099;
          margin: 0px;
        }
      }
    }
    &-text {
      color: #FFFFFF;
      opacity: 0.5;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 18px;
      padding: 32px 0px 50px 0px;
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




