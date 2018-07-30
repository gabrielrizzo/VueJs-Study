<template>
  <div class="content">
    <h3> Events Dashboard </h3>
    <router-link to="/material">Material</router-link>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out </button>
    <h4>Hello {{getUserEmail}}, good {{salutation()}}</h4>
    <hr>
    <add-event-component></add-event-component>
    <hr>
    <div class="row">
        <event-item-component v-for="(event_item, index) in getEvents" :event="event_item" :index="index" key="index"></event-item-component>
    </div>
    <hr>
  </div>
</template>

<script>
import {firebaseApp, eventsRef} from '../firebaseApp'
import {mapActions, mapGetters} from 'vuex'
import AddEventComponent from './AddEventComponent'
import EventItemComponent from './EventItemComponent'
import ChangeTitleComponent from './ChangeTitleComponent'
import MenuComponent from './MenuComponent'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    },

    salutation() {
      let current= new Date();

      let time = current.getHours();

      if(time < 12 && time > 3) {
        let salutation = 'morning'
        return salutation
      }
      if (time >= 12 && time <= 17 ) {
        let salutation = 'afternoon'
        return salutation
      }

      if ( time >= 18 || (time < 12 && time < 3)) {
        let salutation = 'evening'
        return salutation
      }
    }
  },
  computed: mapGetters(['getUser','getUserEmail','getEvents','getTitle']),
  components: {
    AddEventComponent,
    EventItemComponent,
    ChangeTitleComponent,
    MenuComponent
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

<style  lang="scss">
</style>
