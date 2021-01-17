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

@Component
export default class FilePicker extends Vue {
  private title = "Please choose a song";

  private inputChangeHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];

    this.howlFromFile(file, howl => {
      howl.play();
    });
  }

  private dropLinkHandler(event: DragEvent) {
    event.preventDefault();

    if (event.dataTransfer?.items.length == 1) {
      for (const item in event.dataTransfer?.items) {
        if (
          Object.prototype.hasOwnProperty.call(event.dataTransfer?.items, item)
        ) {
          const element = event.dataTransfer?.items[item];

          if (element.type == "audio/mpeg") {
            const file = element.getAsFile();
            console.log("TEST");
            if (file) {
              this.howlFromFile(file, howl => {
                console.log("test");
                howl.play();
              });
            }
          }
        }
      }
    } else {
      alert("Please only drop 1 file");
    }
  }

  private dragOverHandler(event: DragEvent) {
    event.preventDefault();
  }

  private howlFromFile(file: File, completion: (howl: Howl) => void) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;

      if (base64data) {
        const howl = new Howl({
          src: [base64data?.toString()]
        });

        completion(howl);
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
