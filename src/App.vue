<template>
  <b-container fluid id="app">
    <b-row>
      <b-col align-self="center" cols="5">
        <file-picker />
      </b-col>
      <b-col align-self="center" cols="7">
        <controls-section title="Loop">
          <loop-controls />
        </controls-section>
        <controls-section title="Speed">
          <speed-controls />
        </controls-section>
        <controls-section title="Position">
          <position-controls />
        </controls-section>
        <controls-section title="Playback">
          <playback-controls />
        </controls-section>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FilePicker from "./components/FilePicker.vue";
import LoopControls from "./components/controls/LoopControls.vue";
import SpeedControls from "./components/controls/SpeedControls.vue";
import ControlsSection from "./components/controls/ControlsSection.vue";
import PositionControls from "./components/controls/PositionControls.vue";
import PlaybackControls from "./components/controls/PlaybackControls.vue";

@Component({
  components: {
    FilePicker,
    LoopControls,
    SpeedControls,
    PositionControls,
    PlaybackControls,
    ControlsSection
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-left: 80px;
  padding-right: 80px;
}
</style>
