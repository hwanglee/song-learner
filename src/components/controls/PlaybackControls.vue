<template>
  <b-button block v-on:click="toggleIsPlaying()">
    {{ isPlaying ? "Pause" : "Play" }}
  </b-button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import AudioPlayer from "../../store/modules/audio-player";

@Component
export default class PlaybackControls extends Vue {
  private isPlaying = false;
  private audioPlayerModule = getModule(AudioPlayer, this.$store);

  toggleIsPlaying() {
    this.audioPlayerModule.setIsPlaying(!this.isPlaying);
  }

  created() {
    this.$store.watch(
      (state, getters) => getters.playing,
      (newValue, oldValue) => {
        if (this.audioPlayerModule.src != "") {
          this.isPlaying = newValue;
        }
      }
    );
  }
}
</script>
