<template>
  <div class="padded">
    <h5>{{ title }}</h5>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ControlsSection extends Vue {
  @Prop() readonly title?: string;
}
</script>

<style scoped>
.padded {
  margin: 30px;
}
</style>
