<script setup>
  const items = [
    {title: '0', subtitle: 'Security incidents'},
    {title: '256 bits', subtitle: 'AES encryption'},
    {title: '100%', subtitle: 'Encrypted data'},
    {title: 'CISA+', subtitle: 'Security certification'},
  ]
</script>

<template>
  <div class="fourth-section">
    <div class="container">
      <div class="left-col">
        <img src="/images/breew/fourth-section/bg.png" alt="">
      </div>
      <div class="right-col">
        <div class="title">
          <h1>03</h1>
          <span>08</span>
        </div>
        <div class="text">Bullet proof security by design</div>
        <div class="description">Get all round security using our flawless security measures and unbreakable design structure.</div>
        <div class="items">
          <div class="item" v-for="item in items">
            <h2>{{ item.title }}</h2>
            <span>{{ item.subtitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .fourth-section {
    @apply w-full flex flex-col items-center pt-150px;
    .container {
      @apply w-full max-w-1500px flex justify-between items-center;
      .left-col {
        @apply ;
      }
      .right-col {
        @apply flex flex-col items-start w-full max-w-750px;
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
        .text {
          @apply text-75px leading-89px font-700 text-left w-full max-w-660px mt-52px;
          color: #1A1A1A;
        }
        .description {
          @apply text-22px leading-33px text-left mt-46px w-full max-w-660px;
          color: #1A1A1A;
        }
        .items {
          @apply w-full max-w-744px flex flex-wrap;
          .item {
            @apply w-full py-56px mr-30px mt-30px;
            width: calc(50% - 30px);
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 40px;
            h2 {
              @apply text-40px leading-47px font-700;
              color: #1A1A1A;
            }
            span {
              @apply text-22px leading-33px opacity-50;
              color: #1A1A1A;
            }
          }
        }
      }
    }
  }
</style>
