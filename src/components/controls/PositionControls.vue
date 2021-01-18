<template>
  <b-row>
    <b-col v-for="(btn, index) in buttons" :key="index">
      <b-button :key="index">{{ btn.caption }}</b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PositionControls extends Vue {
  private buttons = [
    { caption: "Loop Start" },
    { caption: "- 5 sec" },
    { caption: "+5 sec" }
  ];

  private test() {
    console.log("test");
  }
}
</script>
