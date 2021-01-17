<template>
  <b-button size="lg">{{ isPlaying ? "Pause" : "Play" }}</b-button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PlaybackControls extends Vue {
  private isPlaying = false;
  private test() {
    console.log("test");
  }
}
</script>
