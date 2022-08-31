<script setup>
const items = [
  {prize: '/images/avito-layout/fourth-section/prize-1.png', place: '/images/avito-layout/fourth-section/place-1.png', description: 'Планшет <br/> Samsung Galaxy Tab S5e'},
  {prize: '/images/avito-layout/fourth-section/prize-2.png', place: '/images/avito-layout/fourth-section/place-2.png', description: 'Bluetooth гарнитура Sony WH-XB900N'},
  {prize: '/images/avito-layout/fourth-section/prize-3.png', place: '/images/avito-layout/fourth-section/place-3.png', description: 'Lego <br/> Technic'},
]
</script>

<template>
  <div class="fourth-section">
    <div class="container">
      <h1>получи Призы за код</h1>
      <div class="items">
        <div 
          v-for="item in items"
          class="item"
        >
          <div 
          :style="{ background: `url('${item.prize}')center center/contain no-repeat` }"
          class="prize"
          />
          <!-- <img class="prize" :src="item.prize" alt=""> -->
          <img class="place" :src="item.place" alt="">
          <span v-html="item.description"/>
        </div>
        <div class="item-big">
          <h2>а также</h2>
          <p>Еженедельные призы для лучших игроков в командах</p>
          <img class="sweater" src="/images/avito-layout/fourth-section/sweater.png" alt="">
          <img class="jacket" src="/images/avito-layout/fourth-section/jacket.png" alt="">
          <img class="scarf" src="/images/avito-layout/fourth-section/scarf.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fourth-section {
  @apply flex flex-col items-center w-full pt-85px pb-30px;
  .container {
    @apply flex flex-col items-center w-full max-w-1150px;
    h1 {
      @apply text-40px font-800 uppercase;
      font-family: 'Jost', sans-serif;
      color: #01002A;
    }
    .items {
      @apply flex flex-row w-full mt-54px;
      .item {
        @apply flex flex-col items-center mx-15px pb-27px px-10px;
        width: calc(16.66% - 30px);
        background: #F1EFE5;
        border: 2px solid #000000;
        box-shadow: 4px 4px 0px rgba(134, 126, 118, 0.62);
        border-radius: 12px;
        
        
        .prize {
          @apply -mt-55px w-147px h-170px;
        }
        .place {
          @apply mt-8px;
        }
        span {
          @apply text-16px font-500 mt-10px;
          line-height: 120%;
          color: #01002A;
        }
      }
      .item-big {
        @apply ml-15px flex flex-col items-center pt-15px pl-67px pr-98px relative;
        width: calc(16.66% * 3 - 15px);
        background: #F1EFE5;
        border: 2px solid #000000;
        box-shadow: 4px 4px 0px rgba(134, 126, 118, 0.62);
        border-radius: 12px;
        h2 {
          @apply text-20px font-600 italic;
          color: #9F4837;
          font-family: 'Jost', sans-serif;
        }
        p {
          @apply text-24px font-500;
          line-height: 120%;
          color: #01002A;
          font-family: 'Jost', sans-serif;
        }
        .sweater {
          @apply absolute;
          bottom: 10px;
          left: 15%;
        }
        .jacket {
          @apply absolute;
          bottom: -3px;
          left: 35%;
        }
        .scarf {
          @apply absolute;
          bottom: 10px;
          left: 60%;
        }
      }
    }
  }
}
</style>
