<template>
  <div>
    <md-dialog-confirm
      :md-active="active"
      :md-title="'Do you want to share '+obj.title+'?'"
      md-content="Just a test, it will not share in your social media"
      md-confirm-text="Share"
      md-cancel-text="Cancel"
      @md-cancel="onCancel"
      @md-confirm="onConfirm"/>

      <md-snackbar md-position="center" :md-duration="duration" :md-active.sync="showSnackbar" md-persistent>
        <span>{{message}}</span>
        <md-button class="md-primary" @click="showSnackbar = false">Dismiss</md-button>
      </md-snackbar>
 </div>
</template>

<script>
  export default {
    data() {
      return{
        duration:3000,
        showSnackbar:false,
        message:null
      }
    },
    props: ['active','obj'],
    methods: {
      onCancel() {
        this.confirm = 'Disagreed'
        this.message = 'Share cancelled'
        this.showSnackbar = true
        this.$emit('update:active',false) //Using sync at father component, to update the "active" value

      },
      onConfirm() {
        this.confirm = 'Agreed'
        this.message = 'Sharing...'
        this.showSnackbar = true
        this.$emit('update:active',false) //Using sync at father component, to update the "active" value
      },
      onClick: function(event) {
        this.$emit('click',event.target.value)
      }
    }
  }
</script>

<style>
</style>
