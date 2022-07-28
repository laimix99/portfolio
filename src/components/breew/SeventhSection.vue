<script setup>
  const items = [
    {
      img: '/images/breew/seventh-section/user-1.png', 
      title: '“ Transactions are swift “', 
      description: 'I was skeptical about using it at first, but now I’m happy I did. All transactions  went through very fast. I am going to be a returning user', 
      name: 'Sandra Lee', 
      nick: '@sandralee', 
      grade: '/images/breew/seventh-section/grade.png' 
    },
    {
      img: '/images/breew/seventh-section/user-2.png', 
      title: '“ Love the easy to use layout “', 
      description: 'As a first time user, the layout really helped in guiding me through my first transaction. It is definitely a keeper.', 
      name: 'Ellie Rose', 
      nick: '@ellierose', 
      grade: '/images/breew/seventh-section/grade.png' 
    },
    {
      img: '/images/breew/seventh-section/user-3.png', 
      title: '“ Extremely cool rates “', 
      description: 'I heard about their low rates but I did’nt believeit until I tried selling crypto. I’m looking forward to making more transactions.', 
      name: 'Russ Daniel', 
      nick: '@russdaniel', 
      grade: '/images/breew/seventh-section/grade.png' 
    },
    {
      img: '/images/breew/seventh-section/user-4.png', 
      title: '“ Security measures are nice “', 
      description: 'I love all security authentication measures, they’ve kept me at ease during my transactions.', 
      name: 'Ying Joe', 
      nick: '@yingjoe', 
      grade: '/images/breew/seventh-section/grade.png' 
    },
  ]
</script>

<template>
  <div class="seventh-section">
    <div class="container">
      <div class="title">
        <h1>05</h1>
        <span>08</span>
      </div>
      <div class="subtitle">
        <p>See what people are saying about Breew</p>
        <div class="buttons">
          <button>Download app</button>
          <button>All reviews</button>
        </div>
      </div>
      <div class="items">
        <div class="item" v-for="item in items">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-description">{{ item.description }}</div>
          <div class="item-user">
            <img :src="item.img" alt="">
            <div class="item-user-info">
              <div class="item-user-info-name">{{ item.name }}</div>
              <div class="item-user-info-nick">{{ item.nick }}</div>
            </div>
            <img :src="item.grade" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .seventh-section {
    @apply flex flex-col items-center w-full pt-154px pb-200px;
    background: #B9B9B9;
    @media screen and (max-width: 767px) {
      @apply pb-50px;
    }
    .container {
      @apply w-full max-w-1500px flex flex-col items-start;
      @media screen and (max-width: 1500px) {
        @apply max-w-1100px px-10px items-center;
      }
      .title {
        @apply w-full max-w-198px flex justify-between relative;
        h1 {
          @apply text-35px font-700;
          color: #0582CA;
          &::after {
            content: '';
            height: 2px;
            width: 50px;
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
            right: 38%;
            top: 50%; 
          }
        }
        span {
          @apply text-35px font-700;
          color: #0582CA;
        }
      }
      .subtitle {
        @apply flex justify-between items-center w-full mt-42px;
        @media screen and (max-width: 1500px) {
          @apply flex-col items-center;
        }
        p {
          @apply text-75px leading-89px font-700 w-full max-w-750px text-left;
          color: #1A1A1A;
          @media screen and (max-width: 1500px) {
            @apply text-50px text-center;
          }
          @media screen and (max-width: 767px) {
            @apply text-40px;
          }
        }
        .buttons {
          @apply mt-34px flex;
          @media screen and (max-width: 767px) {
            @apply flex-col items-center ;
          }
          button {
            @apply text-24px leading-36px font-700 mr-40px text-white rounded-31px py-34px px-51px w-300px;
            background: #0582CA;
            white-space: nowrap;
            @media screen and (max-width: 767px) {
              @apply mr-0 mt-20px text-18px px-30px;
            }
            &:hover {
              color: #0582CA;
              background: #FFFFFF;
              outline: 1px solid rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
      .items {
        @apply w-full flex flex-wrap mt-150px;
        @media screen and (max-width: 1500px) {
          @apply flex-col items-center mt-80px;
        }
        .item {
          @apply flex flex-col items-start bg-white rounded-65px py-75px px-54px mx-25px mb-64px;
          width: calc(50% - 50px);
          @media screen and (max-width: 1500px) {
            width: 80% ;
            @apply mt-20px mb-0;
          }
          @media screen and (max-width: 767px) {
            @apply py-30px items-center px-20px;
          }
          &-title {
            @apply text-35px leading-41px font-700;
            color: #1A1A1A;
            @media screen and (max-width: 767px) {
              @apply text-20px;
            }
          }
          &-description {
            @apply text-22px leading-33px text-left w-full max-w-550px mt-32px h-105px;
            @media screen and (max-width: 767px) {
              @apply text-18px h-100px text-center;
            }
          }
          &-user {
            @apply flex mt-32px items-center;
            @media screen and (max-width: 767px) {
              @apply flex-col w-full items-center mt-10px;
            }
            img {
              @apply mr-23px;
              @media screen and (max-width: 767px) {
                @apply w-100px mr-0;
              }
            }
            &-info {
              @apply flex flex-col items-start mr-56px;
              color: #1A1A1A;
              @media screen and (max-width: 767px) {
                @apply mr-0;
              }
              &-name {
                @apply text-20px leading-30px font-700;
              }
              &-nick {
                @apply text-16px leading-24px text-black opacity-60;
              }
            }
          }
        }
      }
    }
  }
</style>
