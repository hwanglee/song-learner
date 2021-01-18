import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: false, name: "audioPlayer" })
export default class AudioPlayerModule extends VuexModule {
  src = "";
  playbackSpeed = 1.0;
  isPlaying = false;

  @Mutation
  public setSource(source: string) {
    this.src = source;
    this.isPlaying = true;
  }

  @Mutation
  public setPlaybackSpeed(speed: number) {
    this.playbackSpeed = speed;
  }

  @Mutation
  public setIsPlaying(isPlaying: boolean) {
    this.isPlaying = isPlaying;
  }

  @Action
  public updateSrc(src: string) {
    this.context.commit("setSource", src);
  }

  @Action
  public updatePlaybackSpeed(speed: number) {
    this.context.commit("setPlaybackSpeed", speed);
  }

  @Action
  public updateIsPlaying(isPlaying: boolean) {
    this.context.commit("setIsPlaying", isPlaying);
  }

  get playing() {
    return this.isPlaying;
  }
}
