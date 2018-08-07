<template>
  <div class="">
    <md-content>
      <h3> Add your Favorite Music ! </h3>
    <div class="form-group-sm">
      <md-field>
        <label> Music Name</label>
        <md-input v-model="music.music_name"></md-input>
      </md-field>
    </div>
    <div class="form-group">
      <md-field>
        <label> Band Name </label>
        <md-input v-model="music.band_name"></md-input>
      </md-field>
    </div>
    <div class="form-group">
      <md-field>
        <label>Genre</label>
        <md-input v-model="music.genre"></md-input>
      </md-field>
    </div>
    <md-button  type="button" class="md-raised md-primary" @click="setMusic(music)">Add an Event!</md-button >
  </md-content>
  </div>

</template>


<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        music: {
          music_name:'',
          band_name:'',
          genre:''
        }
      }
    },
    methods: mapActions(['setMusic']),
    computed: mapGetters({'musics':'getMusics'})
}
</script>
