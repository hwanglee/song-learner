<template>
  <b-row align-v="center">
    <b-col>
      <b-form-checkbox
        switch
        id="loop-checkbox"
        name="loop-checkbox"
        size="lg"
        @input="setLoopOn($event)"
      >
        On
      </b-form-checkbox>
    </b-col>
    <b-col>
      <b-input-group prepend="Start" class="mt-3">
        <b-form-input @input="setStartTime($event)" value="0:00"></b-form-input>
        <b-input-group-append>
          <b-button size="sm">Now</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
    <b-col>
      <b-input-group prepend="End" class="mt-3">
        <b-form-input @input="setEndTime($event)" value="0:00"></b-form-input>
        <b-input-group-append>
          <b-button size="sm">Now</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import AudioPlayer from "../../store/modules/audio-player";

@Component
export default class LoopControls extends Vue {
  private audioPlayerModule = getModule(AudioPlayer, this.$store);

  private setLoopOn(toggle: boolean) {
    this.audioPlayerModule.setLoopOn(toggle);
  }

  private setStartTime(text: string) {
    const time = this.convertToSeconds(text);
    if (!Number.isNaN(time)) {
      this.audioPlayerModule.setLoopStart(time);
    }
  }

  private setEndTime(text: string) {
    const time = this.convertToSeconds(text);
    if (!Number.isNaN(time)) {
      this.audioPlayerModule.setLoopEnd(time);
    }
  }

  private convertToSeconds(text: string) {
    const split = text.split(":");
    return +split[0] * 60 + +split[1];
  }
}
</script>
