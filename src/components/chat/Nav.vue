<!-- <script>
  import { useAuth } from '../../firebase'

  export default {

    setup() {
      const { user, isLogin, signOut, signIn } = useAuth()
      return { user, isLogin, signOut, signIn }
    }
  }
</script>

<template>
  <nav>
    <div>
      <h1>Chat</h1>
      <div v-if="isLogin">
        <button @click="signOut">Sign Out</button>
      </div>
      <button v-else @click="signIn">Sign In</button>
    </div>
  </nav>
</template> -->

<script>
  import { useAuth } from '../../firebase'
  export default {
    setup() {
      const { user, isLogin, signOut, signIn } = useAuth()
      return { user, isLogin, signOut, signIn }
    }
  }
</script>

<template>
  <nav>
    <div class="flex flex-row items-center w-full justify-between">
      <h1><strong>Vue</strong> Chat App</h1>

      <div v-if="isLogin" class="login">
        <button @click="signOut">
          Sign Out
        </button>
      </div>

      <button v-else @click="signIn">
        Sign in
      </button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  button {
    @apply text-40px text-red-500 py-5px px-10px rounded-16px;
    background-color: black;
    &:hover {
      background-color: aqua;
    }
  }
</style>
