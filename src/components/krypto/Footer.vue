<template>
  <div class="footer flex flex-col items-center w-full pt-80px pb-90px max-w-1110px">
    <div class="info flex flex-row w-full">
      <div class="krypto flex flex-col items-start mr-29px">
        <h1 class="text-24px leading-28px font-700 mb-30px uppercase">Krypto </h1>
        <span class="w-full max-w-255px text-left text-18px leading-21px text-white">Massa blandit semper varius faucibus. Suspendisse viverra venenatis placerat nam ut. Pellentesque sit id tempor turpis.</span>
      </div>
      <div class="links flex flex-col items-start mr-87px">
        <h1 class="text-24px leading-28px font-700 mb-30px uppercase">Links </h1>
        <span class="w-full max-w-255px text-left mb-16px text-18px leading-21px text-white">How it works</span>
        <span class="w-full max-w-255px text-left mb-16px text-18px leading-21px text-white">Cryptos</span>
        <span class="w-full max-w-255px text-left mb-16px text-18px leading-21px text-white">Features</span>
        <span class="w-full max-w-255px text-left mb-16px text-18px leading-21px text-white">Testimonial</span>
        <span class="w-full max-w-255px text-left mb-16px text-18px leading-21px text-white">Blogs</span>
      </div>
      <div class="legal flex flex-col items-start mr-117px">
        <h1 class="text-24px leading-28px font-700 mb-30px uppercase ">Legal </h1>
        <span class="w-full max-w-255px text-left mb-16px text-18px leading-21px text-white">Terms of use</span>
        <span class="w-full max-w-255px text-left mb-16px text-18px leading-21px text-white">Terms of conditions</span>
        <span class="w-full max-w-255px text-left mb-16px text-18px leading-21px text-white">Privecy policy</span>
        <span class="w-full max-w-255px text-left mb-16px text-18px leading-21px text-white">Cookie policy</span>
      </div>
      <div class="legal flex flex-col items-start ">
        <h1 class="text-24px leading-28px font-700 mb-30px uppercase">Legal </h1>
        <span class="w-full text-left mb-16px text-18px leading-21px text-white opacity-60">Over 25000 people have subscribed</span>
        <div class="input relative">
          <input type="search" placeholder="Enter your email" >
          <button class="br" type="submit">Subscribe</button>
        </div>
        <span class="text-14px leading-17px text-white opacity-60 mt-16px">We dont sell your email and spam</span>
      </div>
    </div>
    <div class="social-networks mt-80px flex flex-row justify-between w-full">
      <div class="flex flex-row">
        <div class="text-14px leading-17px text-white">Privacy & Terms</div>
        <div class="text-14px leading-17px text-white">Contact Us</div>
      </div>
      <div class="text-14px leading-17px text-white -ml-50px">Copyright @ 2022 xpence</div>
      <div class="flex flex-row">
        <img class="w-18px h-18px mr-10px" src="/images/krypto/footer/youtube.png" alt="">
        <img class="w-18px h-18px mr-10px" src="/images/krypto/footer/linkedin.png" alt="">
        <img class="w-18px h-18px mr-10px" src="/images/krypto/footer/facebook.png" alt="">
        <img class="w-18px h-18px mr-10px" src="/images/krypto/footer/bitcoin.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  h1 {
    color: #EF443B;
  }
  input[type="search"]{
  outline: none;
  border: 1px solid #FFFFFF;
  padding: 5px 100px 5px 30px;
  width: 100%;
  max-width: 349px;
  height: 62px;
  background: #fff;
  border-radius: 49px;
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
}
.social-networks {
  border-top: 1px solid rgb(255, 255, 255, 0.2);
  padding-top: 20px;
}
</style>
