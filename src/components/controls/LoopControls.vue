<template>
  <b-row align-v="center">
    <b-col>
      <b-form-checkbox switch id="loop-checkbox" name="loop-checkbox" size="lg">
        Test
      </b-form-checkbox>
    </b-col>
    <b-col>
      <b-input-group prepend="Start" class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button>Now</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
    <b-col>
      <b-input-group prepend="End" class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button>Now</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoopControls extends Vue {
  private test() {
    console.log("test");
  }
}
</script>
