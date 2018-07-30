<template>
    <div class="from-inline">
      <h3>Sign in </h3>
      <div class="form-group">
        <md-input type="text" name="" placeholder="email" class=" input form-control-sm-2" v-model="email"></md-input>
        <md-input type="password" placeholder="password" class=" input form-control-sm-2" v-model="password"></md-input>
      </div>
      <br>
      <button class="btn btn-primary" @click="signIn"> Enviar </button>
      <br>
      <p>{{error.message}}</p>
      <br>
      <router-link to="/signup" >Not a user yet? Sign up!</router-link>
    </div>
</template>

<script>
  import {firebaseApp} from '../firebaseApp'
  export default {
    data() {
      return {
        email:'',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
      signIn() {
        firebaseApp.auth().signInWithEmailAndPassword(this.email,this.password)
        .catch( error => {
          this.error = error
        })
      }
    }
  }
</script>
