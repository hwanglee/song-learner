<template>
  <div id="filepicker" @drop="dropLinkHandler" @dragover="dragOverHandler">
    <h3>{{ title }}</h3>
    <input
      type="file"
      id="song"
      name="song"
      accept="mp3"
      @change="inputChangeHandler"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Howl } from "howler";
import { getModule } from "vuex-module-decorators";
import AudioPlayer from "../store/modules/audio-player";

@Component
export default class FilePicker extends Vue {
  private title = "Please choose a song";
  private audioPlayerModule = getModule(AudioPlayer, this.$store);
  private howl?: Howl;
  private firstLoad = false;

  created() {
    this.$store.watch(
      state => state.audioPlayer.isPlaying,
      value => {
        if (value == false) {
          this.howl?.pause();
        } else {
          this.howl?.play();
        }
      }
    );

    this.$store.watch(
      state => state.audioPlayer.playbackSpeed,
      value => {
        this.howl?.rate(value);
      }
    );

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "setSeek") {
        const seek = this.howl?.seek() + state.audioPlayer.seek;
        this.howl?.seek(seek);
      }
    });
  }

  private inputChangeHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];

    this.handleFile(file);
  }

  private dropLinkHandler(event: DragEvent) {
    event.preventDefault();

    if (event.dataTransfer?.items.length == 1) {
      const element = event.dataTransfer?.items[0];

      if (element.type == "audio/mpeg") {
        const file = element.getAsFile();
        if (file) {
          this.handleFile(file);
        }
      } else {
        alert("Please only drop 1 file");
      }
    }
  }

  private dragOverHandler(event: DragEvent) {
    event.preventDefault();
  }

  private handleFile(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;

      if (base64data) {
        this.howl = new Howl({
          src: [base64data?.toString()]
        });

        this.audioPlayerModule.setSource(base64data?.toString());
        this.audioPlayerModule.setIsPlaying(true);
        this.howl.rate(this.audioPlayerModule.playbackSpeed);
        this.howl.play();
      }
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
