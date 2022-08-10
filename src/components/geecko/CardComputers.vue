<template>
  <div class="card-computers">
    <div class="container">
      <div class="cards">
        <div class="card-top">
          <div class="card-top-left-col"></div>
          <div class="card-top-right-col">
            <div class="card-top-right-col-title">
              <img class="card-top-right-col-title-cup" src="/images/geecko/card-computers/cup.png" alt="">
              <h1><span>Hard skill</span> tests</h1>
            </div>
            <div class="card-top-right-col-item">
              <h2 class="card-top-right-col-item-title"><span>50k+</span> hours of <br/> hard skill tests</h2>
              <span class="card-top-right-col-item-description">Unique live coding tests based on 20 parameters, helping you find the best developer to meet your needs. Find your hidden gem among thousands!</span>
            </div>
          </div>
        </div>
        <div class="card-down">
          <div class="card-down-left-col">
            <div class="card-down-left-col-title">
              <img class="card-down-left-col-title-ball" src="/images/geecko/card-computers/ball.png" alt="">
              <h1><span>Soft skill</span> evaluations</h1>
            </div>
            <div class="card-down-left-col-item">
              <div class="card-down-left-col-item-title">By our team of IT HR <br/> professionals</div>
              <div class="card-down-left-col-item-descriptiom">
                <h3>Only proactive candidates</h3>
                <h3>Improved employee retention</h3>
              </div>
              <div class="card-down-left-col-item-text">This ensures a better fit for your <br/> company culture.</div>
            </div>
          </div>
          <div class="card-down-right-col"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-computers {
  @apply flex flex-col items-center w-full -mt-70px;
  @media screen and (max-width: 767px) {
    @apply px-20px;
  }
  .container {
    @apply flex flex-col items-center w-full max-w-1180px;
    .cards {
      @apply flex flex-col items-center w-full;
      .card-top {
        @apply flex flex-row items-start w-full z-1;
        @media screen and (max-width: 767px) {
          @apply flex-col items-start relative;
        }
        &-left-col {
          @apply z-10;
          background: url('/images/geecko/card-computers/computers-1.png')center bottom/contain no-repeat;
          height: 650px;
          width: 100%;
          background-size: 750px;
          @media screen and (max-width: 767px) {
            @apply absolute -left-155px top-180px;
            width: 510px;
            height: 374px;
            background-size: cover;
            background-position: center;
          }
        }
        &-right-col {
          @apply flex flex-col items-center w-full -ml-200px mt-90px z-2;
          @media screen and (max-width: 767px) {
            @apply -ml-0 items-center relative;
          }
          &-title {
            @apply flex flex-row items-center pl-80px;
            @media screen and (max-width: 767px) {
              @apply pl-0 items-center w-full justify-center py-30px;
              background: rgba(72, 72, 72, 0.3);
              border: 0.5px solid #636363;
              border-radius: 15px;
            }
            &-cup {
              @apply w-51px mr-16px;
              @media screen and (max-width: 767px) {
                @apply w-35px;
              }
            }
            h1 {
              @apply text-32px font-400 text-white;
              @media screen and (max-width: 767px) {
                @apply text-22px; 
              }
              span {
                @apply font-600;
              }
            }
          }
          &-item {
            @apply flex flex-col items-start pt-48px w-600px pl-212px pr-57px pb-61px mt-20px;
            background: rgba(72, 72, 72, 0.3);
            border: 0.5px solid #636363;
            border-radius: 15px;
            @media screen and (max-width: 767px) {
              @apply w-full ;
              padding: 275px 45px 37px;
            }
            &-title {
              @apply text-32px font-400 text-left;
              line-height: 120%;
              color: #FFFFFF;
              @media screen and (max-width: 767px) {
                @apply text-24px;
              }
              span {
                @apply font-700;
              }
            }
            &-description {
              @apply text-16px font-400 text-left mt-24px;
              line-height: 140%;
              color: #FFFFFF;
              @media screen and (max-width: 767px) {
                @apply text-16px w-full max-w-200px;
              }
            }
          }
        }
      }
      .card-down {
        @apply flex flex-row items-start w-full -mt-200px z-5;
        @media screen and (max-width: 767px) {
          @apply -mt-0 relative;
        }
        &-left-col {
          @apply flex flex-col items-center w-full mt-100px;
          &-title {
            @apply flex flex-row items-start pr-120px;
            @media screen and (max-width: 767px) {
              @apply w-full justify-center py-30px pr-0;
              background: rgba(72, 72, 72, 0.3);
              border: 0.5px solid #636363;
              border-radius: 15px;
            }
            &-ball {
              @apply mr-15px;
              @media screen and (max-width: 767px) {
                @apply w-30px;
              }
            }
            h1 {
              @apply text-32px font-400;
              line-height: 140%;
              color: #FFFFFF;
              @media screen and (max-width: 767px) {
                @apply text-24px;
              }
              span {
                @apply font-600;
              }
            }
          }
          &-item {
            @apply flex flex-col items-start pt-31px pl-59px w-600px pb-57px mt-27px;
            background: rgba(72, 72, 72, 0.3);
            border: 0.5px solid #636363;
            border-radius: 15px;
            @media screen and (max-width: 767px) {
              @apply w-full;
              padding: 275px 45px 37px;
            }
            &-title {
              @apply text-32px font-400 text-left;
              line-height: 140%;
              color: #FFFFFF;
              @media screen and (max-width: 767px) {
                @apply text-24px;
              }
            }
            &-descriptiom {
              @apply mt-16px flex flex-col items-start lowercase;
              h3 {
                @apply text-16px font-100 flex flex-row items-center;
                flex-direction: row-reverse;
                line-height: 140%;
                color: #FFFFFF;
                &::after {
                  @apply mr-16px;
                  content: url('/images/geecko/card-computers/icon.png');
                }
              }
            }
            &-text {
              @apply text-18px font-400 text-left mt-16px;
              line-height: 140%;
              color: #FFFFFF;
            }
          }
        }
        &-right-col {
          @apply -ml-600px;
          background: url('/images/geecko/card-computers/computers-2.png')center bottom/contain no-repeat;
          height: 650px;
          width: 100%;
          background-size: 900px;
          @media screen and (max-width: 767px) {
            @apply absolute top-195px -left-210px ml-0 ;
            width: 550px;
            height: 354px;
            background-size: cover;
            background-position: center;
          }
        }
      }
    }
  }
}
</style>
