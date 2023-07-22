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
}
