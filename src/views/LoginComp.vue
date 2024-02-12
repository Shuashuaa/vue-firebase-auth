<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <input type="submit" value="Login">
            <p>Register an Account <router-link to="/register">register here</router-link></p>
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

        const login = () => {
            try {
                firebase.auth().signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(err => {
                    if(err.message.includes('auth/invalid-email')){
                        alert("email address in invalid")
                    }else if(err.message.includes('auth/invalid-credential')){
                        alert("account is not registered")
                    }else if(err.message.includes('auth/user-disabled')){
                        alert("account has been suspended, please contact nothing. this is non-negotiable :D")
                    }else{
                        console.log(err.message)
                    }
                });
            } catch (error) {
                console.log(error)
            }
            
        }

        return { email, password, login }
    }
}
</script>
<style>

</style>