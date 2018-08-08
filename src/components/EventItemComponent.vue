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
  <share-dialog-component :active.sync="active" :event="event"></share-dialog-component>
</div>

</template>

<script>

import {mapActions} from 'vuex'
import store from '../vuex/store'
import ShareDialogComponent from './ShareDialogComponent'
export default {
  data() {
    return {
      active: false,
      //confirm: null,
      message: null,
      showSnackbar:false,
      duration:3000
    }
  },
  components:{ShareDialogComponent},
  props: ['event','index'],
  methods: mapActions({deleteEvent:'deleteEvent'}),
  methods: {
    delEvent(index,id) {
      let array = new Array();
      array.push(index)
      array.push(id)
      store.dispatch('deleteEvent',{index: array[0],id: array[1]})
    }
  }
}
</script>

<style>

</style>
