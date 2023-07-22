export interface TopicParams {
  id: string;
  name: string;
  imageLink: string;
  popularity: number;
  uri: string;
  url: string;
}

export default abstract class Topic {
  id: string;
  name: string;
  imageLink: string;
  popularity: number;
  uri: string;
  url: string;

  constructor(params: TopicParams) {
    this.id = params.id;
    this.name = params.name;
    this.imageLink = params.imageLink;
    this.popularity = params.popularity;
    this.uri = params.uri;
    this.url = params.url;
  }
}
