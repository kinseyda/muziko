import Topic, { TopicParams } from "./topic";

export interface ReleaseParams extends TopicParams {
  type: string;
}

export default class Release extends Topic {
  type: string;

  constructor(params: ReleaseParams) {
    super(params);
    this.type = params.type;
  }
}
