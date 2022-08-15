<script setup>
const blocks = [
  {
    number: '1',
    description: 'HDD на 1 тб + футболка',
    color: 'linear-gradient(180deg, #FFCD1D 0%, #F5DEA3 57.28%, #DCB141 57.29%)',
  },
  {
    number: '2',
    description: 'Рюкзак',
    color: 'linear-gradient(180deg, #FFFFFF 57.8%, #B0ACAC 57.81%, #FFFFFF 100%)',
  },
  {
    number: '3',
    description: 'Толстовка',
    color: 'linear-gradient(180deg, #985D33 9.38%, #B18208 56.24%, #7A4616 56.25%, #8D5827 69.79%)',
  },
]
</script>

<template>
<div class="third-section">
  <div class="container">
    <div class="blocks">
      <div class="block" v-for="block in blocks">
        <div class="content">
          <div class="ball" :style="{ 'background': block.color }"></div>
          <h1 :style="{ 'background': block.color, '-webkit-background-clip': 'text',  }">{{block.number}}</h1>
          <span>место</span>
        </div>
        <p>{{ block.description }}</p>
      </div> 
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.third-section {
  @apply flex flex-col items-center w-full py-88px;
  .container {
    @apply flex flex-col items-center w-full max-w-877px;
    .blocks {
      @apply flex flex-row w-full justify-between;
      .block {
        @apply flex flex-col items-center;
        .content {
          @apply w-207px h-207px flex flex-col justify-center relative;
          background: url('/images/sber/third-section/item.png')center center/cover no-repeat;
          .ball {
            @apply w-36px h-36px rounded-50px absolute top-17px left-37px;
            // background: linear-gradient(180deg, #FFCD1D 0%, #F5DEA3 57.28%, #DCB141 57.29%);
            border: 4px solid #2B9A4A;
          }
          h1 {
            @apply text-66px font-600 relative;
            font-family: 'SB Sans Interface';
            background: linear-gradient(180deg, #FFCD1D 0%, #F5DEA3 57.28%, #DCB141 57.29%);
            // background: linear-gradient(180deg, #FFFFFF 57.8%, #B0ACAC 57.81%, #FFFFFF 100%);
            // -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            // background-clip: text;
            // text-fill-color: transparent;
          }
          span {
            @apply font-600 text-30px ;
            color: #FFFFFF;
            opacity: 0.5;
            font-family: 'SB Sans Interface';
          };
        }
        p {
          @apply text-20px mt-10px;
          color: #FFFFFF;
          opacity: 0.5;
          font-family: 'SB Sans Interface';
        }
      }
    }
  }
}
</style>
