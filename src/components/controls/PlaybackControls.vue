<template>
  <b-button>Play</b-button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PlaybackControls extends Vue {
  private test() {
    console.log("test");
  }
}
</script>
