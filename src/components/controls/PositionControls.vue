<template>
  <b-row>
    <b-col>
      <b-button>Loop Start</b-button>
    </b-col>
    <b-col>
      <b-button>-5 sec</b-button>
    </b-col>
    <b-col>
      <b-button>+5 sec</b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PositionControls extends Vue {
  private test() {
    console.log("test");
  }
}
</script>
