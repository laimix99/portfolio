<script setup>
const items = [
  {img: '1', title: 'Включить «аварийку» и выйти из машины, предварительно убедившись в своей безопасности'},
  {img: '2', title: 'Установить знак «Аварийной остановки» и обеспечить личную безопасность и безопасный проезд другим транспортным средствам'},
  {img: '3', title: 'Позвонить аварийному комиссару по номеру телефона 8-965-532-50-20'},
]
</script>

<template>
  <div class="regulations">
    <div class="container">
      <h1>Что нужно делать если попали в ДТП?</h1>
      <div class="items">
        <div class="item" v-for="item in items">
          <svg v-if="item.img === '1'" xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 48 48"><path d="M6.2 19.65q0-4.05 1.7-7.675T12.75 5.8l2.05 2.25q-2.65 2.15-4.125 5.175T9.2 19.65Zm32.65 0q0-3.4-1.4-6.425T33.4 8.05l2.05-2.25q3.1 2.6 4.75 6.2t1.65 7.65ZM8 38v-3h4.2V19.7q0-4.1 2.475-7.425T21.2 8.1V6.65q0-1.15.825-1.9T24 4q1.15 0 1.975.75.825.75.825 1.9V8.1q4.05.85 6.55 4.175 2.5 3.325 2.5 7.425V35H40v3Zm16-14.75ZM24 44q-1.6 0-2.8-1.175Q20 41.65 20 40h8q0 1.65-1.175 2.825Q25.65 44 24 44Zm-8.8-9h17.65V19.7q0-3.75-2.55-6.325T24.05 10.8q-3.75 0-6.3 2.575T15.2 19.7Z"/></svg>
          <svg v-if="item.img === '2'" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 48 48"><path d="M2 42 24 4l22 38Zm5.2-3h33.6L24 10Zm17-2.85q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Zm-1.5-5.55h3V19.4h-3Zm1.3-6.1Z"/></svg>
          <svg v-if="item.img === '3'" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 48 48"><path d="M38.8 23.65q-.25-6.05-4.45-10.25T24.1 8.95v-3q3.6.1 6.775 1.525Q34.05 8.9 36.45 11.3q2.4 2.4 3.825 5.575Q41.7 20.05 41.8 23.65Zm-8.45 0q-.25-2.5-2-4.225Q26.6 17.7 24.1 17.45v-3q3.75.25 6.375 2.85t2.875 6.35ZM39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z"/></svg>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <a href="tel:89655325020">
        <button>Вызвать коммисара</button>
      </a>
    </div>
    <!-- <h3 class="relative z-4" style="color: red; font-size:42px;">Секция 3: нужен текст</h3> -->

  </div>
</template>

<style scoped lang="scss">
  .regulations {
    @apply flex flex-col w-full items-center py-50px;
    // background-color: #21283F;
    // color: #fff !important;
    color: rgb(29, 28, 28);
    
    .container {
      @apply flex flex-col items-center w-full max-w-1100px;
      @media screen and (max-width: 991px) {
        @apply px-10px;
      }
      h1 {
        @apply text-46px font-700;
        color: rgb(29, 28, 28);
        // color: rgb(29, 28, 28);
        @media screen and (max-width: 767px) {
          @apply text-30px;
        }
      }
      .items {
        @apply flex flex-col items-start mt-50px w-full max-w-850px;
        @media screen and (max-width: 767px) {
          @apply mt-20px;
        }
        .item {
          @apply flex items-center mt-30px;
          @media screen and (max-width: 767px) {
            @apply mt-20px;
          }
          svg {
            @apply mr-20px;
            fill: rgb(29, 28, 28);
          }
          span {
            @apply text-22px text-left leading-30px;
            // color: rgba(29, 28, 28, 0.6);
            @media screen and (max-width: 767px) {
              @apply text-18px leading-25px;
            }
          }
        }
      }
      a {

        button {
          @apply text-24px py-20px px-20px mt-40px rounded-8px;
          // background-color: #CE253D;
          background-color: #0C698F;
          color: #F2F2F4;
          @media screen and (max-width: 767px) {
            @apply text-18px;
          }
          &:hover {
            // background-color: rgb(127, 26, 41);
            background-color: hwb(197 4% 62%);
          }
        }
      }
    }

  }
</style>

