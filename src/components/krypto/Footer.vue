<script setup>
 const links = [
  { name: 'How it works', link: '' },
  { name: 'Cryptos', link: '' },
  { name: 'Features', link: '' },
  { name: 'Testimonial', link: '' },
  { name: 'Blogs', link: '' },
 ];
 const legals = [
  { name: 'Terms of use', link: '' },
  { name: 'Terms of conditions', link: '' },
  { name: 'Privecy policy', link: '' },
  { name: 'Cookie policy', link: '' },
 ]
</script>

<template>
  <div class="footer">
    <div class="info">
      <div class="krypto">
        <h1>Krypto </h1>
        <span >Massa blandit semper varius faucibus. Suspendisse viverra venenatis placerat nam ut. Pellentesque sit id tempor turpis.</span>
      </div>
      <div class="links ">
        <h1>Links </h1>
        <span v-for="l in links">{{ l.name }}</span>

      </div>
      <div class="legal ">
        <h1>Legal </h1>
        <span v-for="legal in legals">{{ legal.name }}</span>
      </div>
      <div class="newsletter">
        <h1>Newsletter </h1>
        <span>Over 25000 people have subscribed</span>
        <div class="messages">
          <input type="search" placeholder="Enter your email" >
          <button type="submit">Subscribe</button>
        </div>
        <p>We dont sell your email and spam</p>
      </div>
    </div>
    <div class="social-networks">
      <div class="content">
        <div class="text">Privacy & Terms</div>
        <div class="text">Contact Us</div>
      </div>
      <div class="mail">Copyright @ 2022 xpence</div>
      <div class="applications ">
        <a href="">
          <img src="/images/krypto/footer/youtube.png" alt="">
        </a>
        <a href="">
          <img src="/images/krypto/footer/linkedin.png" alt="">
        </a>
        <a href="">
          <img src="/images/krypto/footer/facebook.png" alt="">
        </a>
        <a href="">
          <img src="/images/krypto/footer/bitcoin.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .footer {
    @apply flex flex-col items-center w-full lg:pt-80px lg:pb-90px pt-60px pb-40px max-w-1110px;
    .info {
      @apply flex flex-row w-full px-10px;
      @media screen and (max-width: 991px) {
        @apply flex-wrap justify-start; 
      }
      .krypto {
        @apply  flex flex-col items-start mr-29px;
        h1 {
          @apply text-24px leading-28px font-700 mb-30px uppercase;
          color: #EF443B;
          @media screen and (max-width: 767px) {
            @apply text-18px my-15px; 
          }
          
        }
        span {
          @apply w-full max-w-255px text-left text-18px leading-21px text-white;
          @media screen and (max-width: 767px) {
            @apply text-15px; 
          }
        }
      }
      .links {
        @apply flex flex-col items-start mr-87px;
        h1 {
          @apply text-24px leading-28px font-700 mb-30px uppercase;
          color: #EF443B;
          @media screen and (max-width: 767px) {
            @apply text-18px my-15px; 
          }
        }
        span{
          @apply w-full max-w-255px text-left mb-16px text-18px leading-21px text-white;
          @media screen and (max-width: 767px) {
            @apply text-15px; 
          }
        }
      }
      .legal {
        @apply flex flex-col items-start mr-117px;
        h1 {
          @apply text-24px leading-28px font-700 mb-30px uppercase ;
          color: #EF443B;
          @media screen and (max-width: 767px) {
            @apply text-18px my-15px; 
          }
        }
        span {
          @apply w-full max-w-255px text-left mb-16px text-18px leading-21px text-white;
          @media screen and (max-width: 767px) {
            @apply text-15px; 
          }
        }
      }
      .newsletter {
        @apply flex flex-col items-start;
        h1 {
          @apply text-24px leading-28px font-700 mb-30px uppercase;
          color: #EF443B;
          @media screen and (max-width: 767px) {
            @apply text-18px my-15px; 
          }
        }
        span {
          @apply w-full text-left mb-16px text-18px leading-21px text-white opacity-60;
          @media screen and (max-width: 767px) {
            @apply text-15px; 
          }
        }
        .messages {
          @apply relative;
          input[type="search"] {
            outline: none;
            border: 1px solid #FFFFFF;
            padding: 5px 100px 5px 30px;
            width: 100%;
            max-width: 349px;
            height: 62px;
            background: #fff;
            border-radius: 49px;
            @media screen and (max-width: 479px) {
            @apply w-300px h-50px; 
          }
          }
          button[type="submit"]{
            position: absolute; 
            top: 7px; 
            right: 10px;
            z-index: 9;
            outline: none;
            border: none;
            display: inline-block;
            background: #EF443B;
            border-radius: 40px;
            color: #fff;
            padding: 12px;
            text-transform: uppercase;
            cursor: pointer;
            font-size: 14px;
            @media screen and (max-width: 767px) {
            @apply text-10px; 
          }
          }
        }
        p {
          @apply text-14px leading-17px text-white opacity-60 mt-16px;
        }
      }
    }
    .social-networks {
      @apply mt-80px flex flex-row justify-between w-full;
      border-top: 1px solid rgb(255, 255, 255, 0.2);
      padding-top: 20px;
      @media screen and (max-width: 767px) {
            @apply mt-40px; 
          }
      .content {
        @apply flex flex-row;
        .text {
          @apply text-14px leading-17px text-white mr-10px;
          @media screen and (max-width: 767px) {
            @apply text-10px; 
          }
        }
      }
      .mail {
        @apply text-14px leading-17px text-white -ml-50px;
        @media screen and (max-width: 767px) {
          @apply text-10px; 
        }
      }
      .applications {
        @apply flex flex-row;
        a {
          img {
            @apply w-18px h-18px mr-10px;
            @media screen and (max-width: 767px) {
              @apply w-15px h-15px; 
            }
          }
        }
      }
    }
  }
</style>
