<template>
  <div id="menu">
    <md-tabs class="md-primary" md-alignment="centered" md-sync-route>
        <md-tab id="tab-dashboard" md-label="Dashboard" to="/dashboard"></md-tab>
        <md-tab id="tab-material" md-label="Material" to="/material"></md-tab>
        <md-tab id="tab-event" md-label="Events" to="/event"></md-tab>
        <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
      </md-tabs>
    </div>
</template>

<script>
  export default {
    date() {
      return {
        path: this.$router.currentRoute
      }
    }
  }
</script>

<style>
  #menu {
    margin-bottom: 30px;
  }
</style>
