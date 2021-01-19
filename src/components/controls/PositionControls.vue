<template>
  <b-row>
    <b-col v-for="(btn, index) in buttons" :key="index">
      <b-button :key="index" v-on:click="setSeek(btn)">
        {{ btn.caption }}
      </b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import AudioPlayer from "../../store/modules/audio-player";

interface Button {
  caption: string;
  seek: number;
}

@Component
export default class PositionControls extends Vue {
  private buttons = [
    { caption: "Loop Start", seek: 0 },
    { caption: "-5 sec", seek: -5 },
    { caption: "+5 sec", seek: 5 }
  ];
  private audioPlayerModule = getModule(AudioPlayer, this.$store);

  private setSeek(button: Button) {
    this.audioPlayerModule.setSeek(button.seek);
  }
}
</script>
