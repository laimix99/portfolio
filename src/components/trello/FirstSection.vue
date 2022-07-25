<script setup>
const items = [
 {
  title: '',
  description: '',
  // img: '/images/trello/first-section/bg.webp',
}
]
</script>

<template>
  <div class="first-section">
    <div class="container">
      <div class="left-col">
        <h1>Trello helps teams move work forward.</h1>
        <span>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</span>
        <div class="email">
          <input type="text" placeholder="Email">
          <a href="">
            <button>Sign up - it’s free</button>
          </a>
        </div>
      </div>
      <div class="right-col">
        <img src="/images/trello/first-section/bg.webp" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .first-section {
    @apply flex flex-col items-center w-full pt-100px;
  }
  .container {
    @apply flex justify-between  w-full max-w-1100px px-0px ;
  }
  .left-col {
    @apply flex flex-col items-start pt-80px;
  }
  h1 {
    @apply text-3rem leading-50px text-black;
  }
  span {
    @apply text-20px mt-20px leading-30px;
    color: rgb(9, 30, 66);
  }
  .email {
    @apply flex mt-40px w-full items-center;
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
    @apply text-white py-15px rounded-3px px-15px;
    background-color: #0065FF;
  }
  button:hover {
    background-color: rgb(5, 71, 172);
  }

@media screen and (max-width: 991px) {
  .container {
    @apply px-50px items-center;
  }
  h1 {
    @apply text-2rem;
  }
  span {
    /* @apply text-15px; */
  }
  button {
    @apply text-13px leading-20px py-10px py-10px;
  }
};
@media screen and (max-width: 767px) {
  .container {
    @apply flex-col items-center px-20px;
    flex-direction: column-reverse;
  }
  h1 {
    @apply text-center;
  }
  span {
    @apply text-center;
  }
  .email {
    @apply justify-center;
  }
  input {
    display: none;
  }
  button {
    @apply w-full max-w-300px;
  }
  img {
    @apply w-full max-w-350px;
  }
}
</style>
