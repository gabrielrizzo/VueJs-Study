<template>
  <div class="content">

    <add-music-component></add-music-component>
    <br>
    <div class="row music_card">
      <music-item-component v-for="(music,index) in musics" :music="music" :index="index" :key="index"></music-item-component>
    </div>
  </div>
</template>


<script>
import AddMusicComponent from './AddMusicComponent'
import MusicItemComponent from './MusicItemComponent'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  components: {
    AddMusicComponent,
    MusicItemComponent
  },
  computed: mapGetters({'musics':'getMusics'}),
  methods: mapActions({'setMusics':'setAllMusic'}),
  mounted() {
    this.$store.dispatch('setAllMusic')
    //{{setMusics}}
    //{{setAllMusic}}
  }

}
</script>
