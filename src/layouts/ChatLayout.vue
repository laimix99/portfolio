<!-- <script setup>
// import { ref, computed, reactive } from 'vue';
// import Chat from '../components/chat/Chat.vue'
// import Login from '../components/chat/Login.vue'
// import firebase from 'firebase'
// import firebase from "firebase/compat/app";
import Nav from '../components/chat/Nav.vue'
  // const user = firebase.auth().currentUser
</script>

<template>
  <div>
    <Nav/>
  </div>
</template> -->


<template>
  <Nav />
  <Chat />
</template>

<script>
import Nav from '../components/chat/Nav.vue'
import Chat from '../components/chat/Chat.vue'
export default {
  name: 'App',
  components: { Nav, Chat }
}
</script>