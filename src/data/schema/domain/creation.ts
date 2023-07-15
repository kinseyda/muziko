import Topic, { TopicParams } from "./topic";

export interface CreationParams extends TopicParams {
  artists: string[];
}

export default abstract class Creation extends Topic {
  artists: string[];
  constructor(params: CreationParams) {
    super(params);
    this.artists = params.artists;
  }

  artistString(and: string) {
    if (this.artists.length === 1) {
      return this.artists[0];
    }
    let res = `${this.artists[0]}`;
    for (let i = 1; i < this.artists.length; i++) {
      if (i == this.artists.length - 1) {
        res = `${res} ${and} ${this.artists[i]}`;
      } else {
        res = `${res}, ${this.artists[i]}`;
      }
    }
    return res;
  }
}
