<template>
  <b-row>
    <b-col v-for="(btn, index) in buttons" :key="index">
      <b-button :key="index" :pressed="btn.state" v-on:click="setButton(btn)">
        {{ btn.speed }}x
      </b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import AudioPlayer from "../../store/modules/audio-player";

interface Button {
  speed: number;
  state: boolean;
}

@Component
export default class SpeedControls extends Vue {
  private selectedIndex = 2;
  private buttons: Button[] = [
    { speed: 0.5, state: false },
    { speed: 0.75, state: false },
    { speed: 1, state: true }
  ];
  private audioPlayerModule = getModule(AudioPlayer, this.$store);

  private setButton(button: Button) {
    this.buttons.forEach(btn => {
      btn.state = btn == button;
    });

    this.audioPlayerModule.setPlaybackSpeed(button.speed);
  }
}
</script>
