<script setup>
  defineProps({
    info: {
      type: Object,
      default: () => {}
    }
  })
</script>

<template>
<div class="card">
  <img :src="info.img" alt="">
  <div class="content">
    <div class="description">
      <div class="title">{{ info.name }}</div>
      <div class="subtitle">{{info.description}}</div>
    </div>
    <div class="price">
      <div class="number">{{info.price}}</div>
      <button>Trade now</button>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
  .card {
    @apply flex flex-col h-full bg-white rounded-16px ;
    @media screen and (max-width: 767px) {
      @apply w-300px;
    }
    @media screen and (max-width: 479px) {
      @apply w-250px
    }

    img {
      @apply w-2/1;
      border-top-right-radius: 16px ;
      border-top-left-radius: 16px ;
      height: 50%;
      // border: 1px solid green;
    }
    .content {
      @apply  flex flex-col items-start;
      .description {
        @apply  pt-24px pl-24px pr-24px; 
        .title {
          @apply  text-left text-24px font-500 leading-28px ;
        }
        .subtitle {
          @apply  text-left text-18px font-400 opacity-60 leading-25px mt-12px;
          @media screen and (max-width: 1300px) {
            display:none;
          }
        }
      }
      .price {
        @apply  flex flex-row px-24px pt-90px pb-20px w-full justify-between items-center;
        .number {
          @apply  text-36px font-700 leading-43px;
          @media screen and (max-width: 1300px) {
            @apply text-20px;
          }
        }
        button {
          @apply py-18px px-24px uppercase text-16px text-white;
          background: #EF443B;
          border-radius: 40px;
          @media screen and (max-width: 1300px) {
            @apply text-12px;
          }
        }
      }
    }
  }

  // @media screen and (max-width: 1300px) {
  //   .card {
  //     height: 400px;
  //     width: 250px;
  //     // margin-right: 10px;
  //   }
    
  //   .description {
  //     padding: 10px 10px 0 10px;
  //     .title {
  //       font-size: 18px;
        
  //     }
  //     .subtitle {
  //       font-size: 14px;
  //       line-height: 20px;
  //       margin-top: 7px;
  //     }
  //   }
  //   .price {
  //     padding: 35px 10px 0px 10px;
      
  //     .number {
  //       font-size: 20px;
  //     }
  //     button {
  //       font-size: 10px;
  //     }
  //   }
  // }
  // @media screen and (max-width: 1000px) {
  //   .card {
  //     height: 250px;
  //     width: 170px;
  //   }
  //   .description {
  //     .subtitle {
  //       display: none;
  //     }
  //   }
  //   .price {
  //     .number {
  //       font-size: 15px;
  //     }
  //     button {
  //       font-size: 9px;
  //       padding: 8px 12px;
  //     } 
  //   }
  // }
  // @media screen and (max-width: 767px) {
  //   .card {
  //     height: 120px;
  //     width: 80px;
  //     background-color: rgb(255, 255, 255, 0.6);
  //     img {
  //       display: none;
  //     }
  //     .description {
  //       .title {
  //         font-size: 15px;
  //       }
  //     }
  //     .price {
  //       button {
  //         display: none;
  //       }
  //     }
  //   }
  // }
  @media screen and (max-width: 1300px){
    .card {
      height: 400px;
    }
  }
</style>
