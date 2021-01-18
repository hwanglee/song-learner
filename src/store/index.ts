import Vue from "vue";
import Vuex from "vuex";
import AudioPlayer from "./modules/audio-player";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    audioPlayer: AudioPlayer
  }
});
