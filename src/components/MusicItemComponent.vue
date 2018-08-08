<template>
  <div class="col-sm-3 music_card">
    <md-card class="md-elevation-13">
      <md-card-media-cover>
        <md-card-media md-ratio="16:9">
          <img src="../images/skyscraper.jpg" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{music.music_name}}</span>
            <span class="md-subhead">just enjoy it</span>
          </md-card-header>

          <md-card-actions >
            <md-card-expand-trigger>
              <md-button class="md-icon-button space-between">
                <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
            </md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon>delete</md-icon>
            </md-button>
          </md-card-actions>

          </md-card-area>
        </md-card-media-cover>
          <md-card-expand>
            <md-card-expand-content>
              <md-card-content>
                <p>{{music.band_name}}</p>
                <p>{{music.genre}}</p>
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>



    </md-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props:['music']
  }
</script>
