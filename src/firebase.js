// import firebase from 'firebase/app'
// import { initializeApp } from "firebase/app";
// import 'firebase/auth'
// import 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { ref, onUnmounted, computed } from 'vue'

firebase.initializeApp(
  {
    apiKey: "AIzaSyDBFqKj_MJQseiO88kFAXc-tfjkmVO7nmU",
    authDomain: "chat-ccb54.firebaseapp.com",
    projectId: "chat-ccb54",
    storageBucket: "chat-ccb54.appspot.com",
    messagingSenderId: "100300431466",
    appId: "1:100300431466:web:f4917d8494acb660e8ea13",
    measurementId: "G-5RW6C28XM6"
  }
)

const auth = firebase.auth()
export function useAuth() {
  const user = ref(null)
  const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
  onUnmounted(unsubscribe)
  const isLogin = computed(() => user.value !== null)

  const singnIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(googleProvider)
  }
  const  signOut = () => auth.signOut()
  return { user, isLogin, singnIn, signOut }
}

const firestore = firebase.firestore()
const messagesCollection = firestore.collection('messages')
const messagesQuery = messagesCollection.orderBy('createAt', 'desc').limit(100)

export function useChat() {
  const messages = ref([])
  const unsubscribe = messagesQuery.onSnapshot(snapshot => {
    messages.value = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .reverse()
  })
  onUnmounted(unsubscribe)

  const { user, isLogin } = useAuth()
  const sendMessage = text => {
    if (!isLogin.value) return
    const { photoURL, uid, displayName } = user.value
    messagesCollection.add({
      userName: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp( )
    })
  }

  return { messages, sendMessage }
}

// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'

// // import Filter from 'bad-words'
// import { ref, onUnmounted, computed } from 'vue'

// firebase.initializeApp({
//     apiKey: "AIzaSyDbTcacK2sg9Sy7zKp3llyk3jShpU9QiXc",
//     authDomain: "chat-3a4e0.firebaseapp.com",
//     projectId: "chat-3a4e0",
//     storageBucket: "chat-3a4e0.appspot.com",
//     messagingSenderId: "789361236952",
//     appId: "1:789361236952:web:26d1e75b224a339785b0ad",
//     measurementId: "G-4YRLCWVHS9"
// })

// const auth = firebase.auth()

// export function useAuth() {
//   const user = ref(null)
//   const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
//   onUnmounted(unsubscribe)
//   const isLogin = computed(() => user.value !== null)

//   const signIn = async () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider()
//     await auth.signInWithPopup(googleProvider)
//   }
//   const signOut = () => auth.signOut()

//   return { user, isLogin, signIn, signOut }
// }

// const firestore = firebase.firestore()
// const messagesCollection = firestore.collection('messages')
// const messagesQuery = messagesCollection.orderBy('createdAt', 'desc').limit(100)
// const filter = new Filter()

// export function useChat() {
//   const messages = ref([])
//   const unsubscribe = messagesQuery.onSnapshot(snapshot => {
//     messages.value = snapshot.docs
//       .map(doc => ({ id: doc.id, ...doc.data() }))
//       .reverse()
//   })
//   onUnmounted(unsubscribe)

//   const { user, isLogin } = useAuth()
//   const sendMessage = text => {
//     if (!isLogin.value) return
//     const { photoURL, uid, displayName } = user.value
//     messagesCollection.add({
//       userName: displayName,
//       userId: uid,
//       userPhotoURL: photoURL,
//       text: text,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp()
//     })
//   }

//   return { messages, sendMessage }
// }
