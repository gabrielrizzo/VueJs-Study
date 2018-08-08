<template>
    <h3>{{userEmail}}</h3>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: mapGetters({userEmail:'getUserEmail'})

  }
</script>

<style>
</style>
