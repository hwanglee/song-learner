<template>
  <b-row>
    <b-col v-for="(btn, index) in buttons" :key="index">
      <b-button :key="index" :pressed="btn.state" v-on:click="setButton(index)">
        {{ btn.caption }}
      </b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SpeedControls extends Vue {
  private selectedIndex = 2;
  private buttons = [
    { caption: "0.5x", state: true },
    { caption: "0.75x", state: false },
    { caption: "1x", state: false }
  ];

  private setButton(btnIndex: number) {
    this.buttons.forEach((btn, index) => {
      btn.state = index == btnIndex;
    });
  }
}
</script>
