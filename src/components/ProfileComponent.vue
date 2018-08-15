<template>
    <h3>{{email}}</h3>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    //computed: mapGetters({userEmail:'getUserEmail'}),

    data() {
      return {
        email:this.$route.params.user
      }
    }

  }
</script>

<style>
</style>
