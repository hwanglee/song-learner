import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: false, name: "audioPlayer" })
export default class AudioPlayerModule extends VuexModule {
  src = "";
  loopStart = 0;
  loopEnd = 0;
  playbackSpeed = 1.0;
  isPlaying = false;
  isLoopOn = false;
  seek = 0;

  @Mutation
  public setSource(source: string) {
    this.src = source;
  }

  @Mutation
  public setPlaybackSpeed(speed: number) {
    this.playbackSpeed = speed;
  }

  @Mutation
  public setIsPlaying(isPlaying: boolean) {
    this.isPlaying = isPlaying;
  }

  @Mutation
  public setSeek(seek: number) {
    this.seek = seek;
  }

  @Mutation
  public setLoopStart(time: number) {
    this.loopStart = time;
  }

  @Mutation
  public setLoopEnd(time: number) {
    this.loopEnd = time;
  }

  @Mutation
  public setLoopOn(toggle: boolean) {
    this.isLoopOn = toggle;
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

  @Action
  public updateSeek(seek: number) {
    this.context.commit("setSeek", seek);
  }

  @Action
  public updateLoopStart(time: number) {
    this.context.commit("setLoopStart", time);
  }

  @Action
  public updateLoopEnd(time: number) {
    this.context.commit("setLoopEnd", time);
  }

  @Action
  public updateLoopOn(toggle: boolean) {
    this.context.commit("setLoopOn", toggle);
  }
}
