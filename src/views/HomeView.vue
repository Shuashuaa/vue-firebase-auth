<template>
  <div class="home">
      <h1>Welcome, {{name}}</h1>
    <router-link to="/about">about</router-link>
    <hr>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
  setup() {

    const name = ref("");

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          name.value = user.email.split('@')[0];
        }
      })
    })

    const logout = () => {
      firebase.auth().signOut().then(() => {
        console.log('signed out!')
      }).catch(err => {
        alert(err.message)
      })
    }
    return { name, logout }
  }
}
</script>
