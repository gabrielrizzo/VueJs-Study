<template>
  <div id="app">
    <menu-component v-if="(!(Object.keys(getUser).length === 0 && getUser.constructor === Object)) && (path != '/')"></menu-component>
    <router-view></router-view>
  </div>
</template>


<script>
import MenuComponent from './MenuComponent'
import {mapGetters} from 'vuex'
  export default {
      components: {
        MenuComponent
      },
      data(){
        return {
          path:this.$router.currentRoute.path
        }
      },
      computed: mapGetters(['getUser']),
      mounted(){
        console.log(this.$router.currentRoute.path)
    }
  }
</script>
