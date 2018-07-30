<template>
  <div class="">
      <h4>Add Event <md-checkbox type="checkbox" class="md-primary" v-model="form"></md-checkbox></h4>
    <div v-if="form" class="form">
      <div class="form-group">
        <md-field>
          <label>Title</label>
          <md-input type="text" v-model="event.title">
          </md-input>
        </md-field>
      </div>
      <div class="form-group">
        <md-field>
          <label>Description</label>
          <md-input type="text" v-model="event.description">
          </md-input>
        </md-field>
      </div>
      <div class="form-group">
        <md-field>
          <label>Date</label>
          <md-input type="date" v-model="event.date" placeholder="DD/MM/AAAA">
          </md-input>
        </md-field>
      </div>
      <div class="form-group">
        <md-field>
          <label>Location</label>
          <md-input type="text" v-model="event.location">
          </md-input>
        </md-field>
      </div>
      <md-button  type="button" class="md-raised md-primary" @click="addEvent">Add an Event!</md-button >
    </div>
  </div>
</template>

<script>
import { eventsRef } from '../firebaseApp'
import { mapGetters } from 'vuex'
export default{
  data() {
    return {
      event: {
        title:'',
        description:'',
        date:'',
        location:'',
        email:'',
        id:null
      },
      form:false
    }
  },
  computed: mapGetters(['getUserEmail']),
  methods: {
    addEvent() {
      this.event.email = this.$store.getters.getUserEmail
      eventsRef.push(this.event)
    }
  }

}
</script>

<style lang="sass">

</style>
