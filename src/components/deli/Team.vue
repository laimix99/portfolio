<script setup>
import { ref, computed, reactive, onMounted, watch } from 'vue';
import MySlider from '../MySlider.vue';
import DeliTabs from '../Tabs.vue'
import DeliTab from '../Tab.vue'
import PersonalCard from './PersonalCard.vue'
const selected = ref('драйверы')
const setSelected = (tab) => {
  selected.value = tab
}

const tabs = ref([
{
  name:'драйверы',
  content: {
    service: 'бережно доставят автомобиль в наш автосервис и вернут обратно',
    slider: [
      { img: '/images/team1.png', name: 'Сергей', age: 'Возраст: 33 года, стаж: 12 лет' },
      { img: '/images/team2.png', name: 'Антон', age: 'Возраст: 36 года, стаж: 15 лет' },
      { img: '/images/team3.png', name: 'Василий', age: 'Возраст: 40 года, стаж: 10 лет' },
      { img: '/images/team2.png', name: 'Вадим', age: 'Возраст: 31 года, стаж: 9 лет' },
      { img: '/images/team3.png', name: 'Арсен', age: 'Возраст: 45 года, стаж: 20 лет' },
      { img: '/images/team1.png', name: 'Николай', age: 'Возраст: 38 года, стаж: 11 лет' },
    ]
  }
}, 
{
  name: 'механики',
  content: {
    service: 'качественно отремонтируем ваш автомобиль',
    slider: [
      { img: '/images/team3.png', name: 'Денис', age: 'Возраст: 33 года, стаж: 12 лет' },
      { img: '/images/team1.png', name: 'Валерий', age: 'Возраст: 34 года, стаж: 8 лет' },
      { img: '/images/team2.png', name: 'Павел', age: 'Возраст: 38 года, стаж: 18 лет' },
      { img: '/images/team1.png', name: 'Анатолий', age: 'Возраст: 58 года, стаж: 12 лет' },
    ]
  }
},
])

</script>

<template>
  <div class="page">
    <div class="page-header">
      <div class="title">
        команда
      </div>
      <div  class="subtitle">
        <h1>Любишь автомобили, как любим их мы?</h1>
        <span>Присылай свои идеи и резюме!</span>
      </div>
    </div>

    <DeliTabs 
      :tabs="tabs" 
      :selected="selected" 
      :classId="'tab-blue'" 
      @selected="setSelected" 
      class="DeliTeamTabs"
    >
      <DeliTab 
        v-for="tab in tabs" 
        :isSelected="selected === tab.name" 
        class="deli-team-tab" 
      >
        <p>{{ tab.content.service }}</p>
        <MySlider 
          :arrayLength="tab.content.slider.length" 
          :maxSwipeSlides="1"
          :maxViewSlides="3"
          :widthSlider="'100%'"
          :navPosition="'slider-team'"

        >
          <PersonalCard
            v-for="item in tab.content.slider"
            :item_data="item"
            :slide="20"
            :margin="1"
            :viewSlides="3"
          />
        </MySlider>
      </DeliTab>
    </DeliTabs>
  </div>
</template>

<style lang="scss" scoped>
 .page {
   padding: 80px;
   display: flex;
   flex-direction: column;
   width: 100%;
   max-width: 1008px;
   box-sizing: border-box;


  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .title {
      color: #152F4E;
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 48px;
      border-left: 8px solid red;
      padding-left: 24px;
        
    }
    .subtitle {
      max-width: 280px;
      border: 1px solid #D5DCE6;
      border-radius: 16px;
      padding: 32px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      h1 {
        width: 210px;
        color: #152F4E;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        margin: 0px;
        text-align: left;
        
      }
      span {
        color: #152F4E;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        width: 165px;
        text-align: left;
        margin-top: 16px;
      }
    }
  }
  .DeliTeamTabs {
    margin-top: -170px;
    
  }
 }
 .deli-team-tab {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   
 }
 p {
   margin-top: 48px;
   max-width: 385px;
   text-align: left;
 }
 @media ( max-width: 768px ) {
  .page {

    &-header {
      flex-direction: column;
      align-items: center;
      .title {

      }
      .subtitle {
        margin-top: 30px ;
      }
      
     }
    .DeliTeamTabs {
      margin-top: 30px;
      align-items: flex-start;
     }
   }
 }
</style>


