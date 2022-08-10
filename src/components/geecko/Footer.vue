<script setup>

</script>

<template>
  <div class="footer">
    <div class="container">
      <img src="/images/geecko/footer/logo.png" alt="">
      <span class="geecko-text">@ 2022 Geecko, Inc.</span>
      <div class="info-block">
        <div class="legal">
          <h1>Legal info</h1>
          <div class="links">
            <a href="">Terms of service</a>
            <a href="">Privacy policy</a>
          </div>
        </div>
        <div class="get">
          <h1>Get in touch</h1>
          <a href="">Linkedin</a>
        </div>
        <div class="project">
          <h1>Projects</h1>
          <div class="links">
            <a href="">Luxcity </a>
            <a href="">Cybercode</a>
            <a href="">Sberсraft</a>
            <a href="">Mantel group</a>
            <a href="">Telus</a>
          </div>
        </div>
      </div>
      <span class="address">1160 Battery Street East, Suites 100, <br/> CA, San Francisco, California, 94111, <br/> United States of America (Levis Plaza)</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  @apply flex flex-col items-center w-full pb-82px;
  .container {
    @apply flex flex-row items-start w-full justify-between max-w-1100px pt-48px;
    border-top: 1px solid #D5D5D5;
    @media screen and (max-width: 991px) {
      @apply flex-col items-center px-20px;
      flex-flow: column wrap;
    }
    @media screen and (max-width: 767px) {
      @apply items-start;
    }
    .geecko-text {
      @apply text-12px font-400 text-left leading-16px;
      color: #858A9C;
      @media screen and (max-width: 991px) {
        order: 2;
      }
      @media screen and (max-width: 767px) {
        @apply mt-40px;
      }
    }
    .address {
      @apply text-12px font-400 text-left leading-16px;
      color: #858A9C;
      @media screen and (max-width: 991px) {
        order: 3;
        @apply mt-10px;
      }
    }
    .info-block {
      @apply flex flex-row justify-between w-full max-w-500px;
      @media screen and (max-width: 991px) {
        @apply mt-30px;
        order: 1;
      }
      @media screen and (max-width: 767px) {
        @apply flex-wrap w-full max-w-300px;
      }
      .legal {
        @apply flex flex-col items-start;
        @media screen and (max-width: 767px) {
          width: 50%;
          order: 1;
        }
        h1 {
          @apply text-16px font-600;
          color: #101014;
        }
        .links {
          @apply flex flex-col items-start mt-12px text-14px font-400;
          color: #4D4E57;
          a {
            @apply mt-12px;
          }
        }
      }
      .get {
        @apply flex flex-col items-start;
        @media screen and (max-width: 767px) {
          width: 50%;
          order: 3;
          margin-top: -50px;
        }
        h1 {
          @apply text-16px font-600;
          color: #101014;
        }
        a {
          @apply mt-24px text-14px font-400;
          color: #4D4E57;
        }
      }
      .project {
        @apply flex flex-col items-start;
        @media screen and (max-width: 767px) {
          width: 50%;
          order: 2;
        }
        h1 {
          @apply text-16px font-600;
          color: #101014;
        }
        .links {
          @apply flex flex-col items-start mt-12px text-14px font-400;
          color: #4D4E57;
          a {
            @apply mt-12px;
          }
        }
      }
    }
  }
}
</style>
