import { S_AlbumObject } from "../spotify";
import Topic, { TopicParams } from "./topic";

export default class Release extends Topic {
  type: string;

  constructor(sAlbum: S_AlbumObject) {
    super({
      id: sAlbum.id,
      imageLink: sAlbum.images[0]?.url,
      name: sAlbum.name,
      popularity: sAlbum.popularity || 0,
      uri: sAlbum.uri,
    });
    this.type = sAlbum.album_type;
  }
}
