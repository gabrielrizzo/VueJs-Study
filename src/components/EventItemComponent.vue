<template>

  <div class="col-sm-3">
    <md-card class="md-elevation-13">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
            <img src="../images/house.jpg" alt="Coffee House">
          </md-card-media>
          <div class="event-card">
            <md-card-header>
              <h4 class="card-title">{{event.title}}</h4>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Date:{{event.date}}
                </li>
              </ul>
            </md-card-header>
            <md-card-content>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Location:{{event.location}}
                </li>
                <li class="list-group-item">
                  Host:{{event.email}}
                </li>
              </ul>
            </md-card-content>
            <md-card-content>
              <li class="list-group-item">
                {{event.description}}
              </li>
            </md-card-content>
            <md-card-actions>
              <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="active = true">
              <md-icon>share</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="delEvent(index,event.id)">
              <md-icon>delete</md-icon>
            </md-button>
            </md-card-actions>

      </div>
    </md-card-area>
  </md-card>
  <md-dialog-confirm
    :md-active.sync="active"
    :md-title="'Do you want to share '+event.title+'?'"
    md-content="Just a test, it will not share in your social media"
    md-confirm-text="Share"
    md-cancel-text="Cancel"
    @md-cancel="onCancel"
    @md-confirm="onConfirm"/>

    <md-snackbar md-position="center" md-duration="3000" :md-active.sync="showSnackbar" md-persistent>
      <span>{{message}}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Dismiss</md-button>
    </md-snackbar>
</div>

</template>

<script>

import {mapActions} from 'vuex'
import store from '../vuex/store'
export default {
  data() {
    return {
      active: false,
      confirm: null,
      message: null,
      showSnackbar:false
    }
  },
  props: ['event','index'],
  methods: mapActions({deleteEvent:'deleteEvent'}),
  methods: {
    delEvent(index,id) {
      let array = new Array();
      array.push(index)
      array.push(id)
      store.dispatch('deleteEvent',{index: array[0],id: array[1]})
    },
    onCancel() {
      this.confirm = 'Disagreed'
      this.message = 'Share cancelled'
      this.showSnackbar = true

    },
    onConfirm() {
      this.confirm = 'Agreed'
      this.message = 'Sharing Event...'
      this.showSnackbar = true
    }
  }
}
</script>

<style>

</style>
