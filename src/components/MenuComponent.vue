<template>
  <div id="menu">
    <md-toolbar class="md-primary">
      <div id="tabs">
        <md-tabs class="md-primary" md-alignment="fixed" md-sync-route>
            <md-tab id="tab-dashboard" md-label="Dashboard" to="/dashboard"></md-tab>
            <md-tab id="tab-material" md-label="Material" to="/material"></md-tab>
            <md-tab id="tab-event" md-label="Events" to="/event"></md-tab>
            <md-tab id="tab-favorites" md-label="Add Music" to="/music"></md-tab>
          </md-tabs>
      </div>
    </md-toolbar>
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
    justify-content: flex-start !important;
  }

  #tabs {
    display: flex;
    justify-content: center;
  }
</style>
