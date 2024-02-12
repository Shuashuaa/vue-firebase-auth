<template>
    <div class="login">
        <h1>Register</h1>
        <form @submit.prevent="register">
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <input type="submit" value="register">
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    setup() {

        const email = ref("");
        const password = ref("");

        const register = () => {
            firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(user => {
                alert(user);
            })
            .catch(err => alert(err.message));
        }

        return { email, password, register }
    }
}
</script>
<style>

</style>