<template>
  <div class="row">
    <div v-for="(event_item, index) in getEvents" class="col-sm-3">
      <md-card class="md-elevation-13">
        <md-card-area md-inset>
          <md-card-media md-ratio="16:9">
              <img src="../images/house.jpg" alt="Coffee House">
            </md-card-media>
        </md-card-area>
            <div class="event-card">
              <md-card-header>
                <h4 class="card-title">{{event_item.title}}</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Date:{{event_item.date}}
                  </li>
                </ul>
              </md-card-header>
              <md-card-content>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Location:{{event_item.location}}
                  </li>
                  <li class="list-group-item">
                    Host:{{event_item.email}}
                  </li>
                </ul>
              </md-card-content>
              <md-card-content>
                <li class="list-group-item">
                  Description:{{event_item.description}}
                </li>
              </md-card-content>
              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>favorite</md-icon>
                </md-button>
                <md-button class="md-icon-button" @click="active = true">
                  <md-icon>share</md-icon>
                </md-button>
                <md-button class="md-icon-button" @click="delEvent(index,event_item.id)">
                  <md-icon>delete</md-icon>
                </md-button>
              </md-card-actions>
            </div>
          </md-card-area>
        </md-card>
        <md-dialog-confirm
          :md-active.sync="active"
          :md-title="'Do you want to share '+event_item.title+'?'"
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
    </div>


</template>

<script>
import {firebaseApp, eventsRef} from '../firebaseApp'
import {mapActions, mapGetters} from 'vuex'
import store from '../vuex/store'
export default {
  data() {
    return {
      active: false,
      confirm: null,
      message: null,
      showSnackbar:false,
      duration:3000
    }
  },
  props: ['event','index'],
  methods: mapActions({deleteEvent:'deleteEvent'}),
  computed: mapGetters(['getEvents']),
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
  },
  mounted() {
    eventsRef.on('value', snap =>{
      let events =[]
      snap.forEach(event => {
        let event_temp = event.val()
        event_temp.id = event.key
        events.push(event_temp)
      })
      this.$store.dispatch('setEvent',events)
      console.log(events)
    })

  }
}
</script>

<style>

</style>
