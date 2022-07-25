<script setup>

</script>

<template>
  <div class="ninth-section">
    <div class="container">
      <h1>Sign up and get started with Trello today. A world of productive teamwork awaits!</h1>
      <div class="email">
        <input type="text" placeholder="Email">
        <a href="">
          <button>Sing up</button>
        </a>
      </div>
    </div>
    <div class="store">
      <span>Trello also works great on your smaller screen.</span>
      <div class="store-link">
      <a href="">
        <img src="/images/trello/ninth-section/app-store.svg" alt="">
      </a>
      <a href="">
        <img src="/images/trello/ninth-section/play-store.svg" alt="">
      </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .ninth-section {
    @apply flex flex-col items-center w-full pt-50px pb-50px; 
  }
  .container {
    @apply flex flex-col items-center w-full max-w-1100px rounded-10px py-30px;
    background: linear-gradient(rgb(64, 50, 148), rgb(76, 154, 255)) no-repeat;
  }
  h1 {
    @apply text-white text-1.5rem;
  }
  .email {
    @apply flex mt-60px w-full max-w-500px items-center justify-between;
  }
  input {
    @apply rounded-3px py-15px pl-15px w-full max-w-350px mr-20px;
    outline: 1px solid rgb(146, 144, 144);
    
  }
  input:focus {
  outline: 2px solid black;
  box-shadow: 1px 1px 2px 0 black;
  }
  button {
    @apply text-black py-15px px-30px rounded-3px;
    background-color: #fff;
  }
  button:hover {
    background-color: rgb(255, 255, 255, 0.5);
  }
  .store {
    @apply flex w-full max-w-1100px justify-center items-center mt-80px;
  }
  span {
    @apply text-20px mr-30px;
    color: rgb(9, 30, 66); 
  }
  .store-link {
    @apply flex ;
  }
  img {
    @apply w-full max-w-128px mr-30px;
  }
  @media screen and (max-width: 991px) {
    .container {
      @apply max-w-700px px-50px;
    }
    .store {
      @apply flex-col items-center;
    }
    .store-link {
      @apply mt-20px;
    }
    img {
      @apply max-w-200px;
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      @apply max-w-400px px-20px;
    }
    h1 {
      @apply text-center leading-35px;
    }
    .email {
      @apply justify-center;
    }
    input {
      display: none;
    }
    button {
      @apply max-w-300px;
    }
    span {
      @apply text-center mr-0;
    }
  }
  @media screen and (max-width: 479px) {
    .container {
      @apply max-w-350px ;
    }
    img {
      @apply max-w-150px;
    }
  }
</style>
