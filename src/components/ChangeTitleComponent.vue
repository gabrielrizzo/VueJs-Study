<template>
  <div>
    <input id="title" :value="title"  type="text" @keyup=" changeTitle($event.target.value)" class="form-control-md-5">

  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default{
    computed: mapGetters({title:'getTitle'}),
    methods: mapActions({changeTitle:'changeTitle'})
  }
</script>
