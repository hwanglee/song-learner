<template>
  <b-row>
    <b-col>
      <b-button size="lg">0.5x</b-button>
    </b-col>
    <b-col>
      <b-button size="lg">0.75x</b-button>
    </b-col>
    <b-col>
      <b-button size="lg">1x</b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SpeedControls extends Vue {
  private test() {
    console.log("test");
  }
}
</script>
