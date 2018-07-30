<template>
  <div class="form-group">
    <h3>Sign Up</h3>
    <input type="email" class="form-control" placeholder="email" v-model="email">
    <input type="password" class="form-control" placeholder="password" v-model="password">
    <br>
    <button class="btn btn-primary" @click="signUp"> Sign Up </button>

    <br>
    <router-link to="/signin" >Already a user? Sign in!</router-link>
  </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'

export default {
  data() {
    return{
      email:'',
      password:'',
      error: {
        message:''
      }
    }
  },
  methods: {
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
      .catch(error=>{
        this.error=error
      })
    }
  }
}
</script>
