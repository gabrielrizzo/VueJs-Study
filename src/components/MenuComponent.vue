<template>
  <div id="menu">
    <md-toolbar  class="md-primary">

      <div id="tabs" style="flex: 1">
        <md-tabs class="md-primary" md-alignment="fixed" md-sync-route>
            <md-tab id="tab-dashboard" md-label="Dashboard" to="/dashboard"></md-tab>
            <md-tab id="tab-material" md-label="Material" to="/material"></md-tab>
            <md-tab id="tab-event" md-label="Events" to="/event"></md-tab>
            <md-tab id="tab-favorites" md-label="Add Music" to="/music"></md-tab>
          </md-tabs>
      </div>
      <div class="">
        <md-menu md-direction="bottom-start">
          <md-button class="md-icon-button" md-menu-trigger><md-icon>more_vert</md-icon></md-button>
          <md-menu-content>
              <md-menu-item @click="">Profile</md-menu-item>
              <md-menu-item @click="signout">SignOut</md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>

    </md-toolbar>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        path: this.$router.currentRoute
      }
    },
    methods: mapActions({signout:'signOut'})
  }
</script>

<style>
  #menu {
    margin-bottom: 5%;

  }
</style>
