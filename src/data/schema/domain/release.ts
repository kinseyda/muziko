import { S_AlbumObject, S_SimplifiedAlbumObject } from "../spotify";
import Creation from "./creation";
import Topic, { TopicParams } from "./topic";

export default class Release extends Creation {
  type: string;

  constructor(sAlbum: S_SimplifiedAlbumObject) {
    super({
      id: sAlbum.id,
      imageLink: sAlbum.images[0]?.url,
      name: sAlbum.name,
      popularity: sAlbum.popularity || 0,
      uri: sAlbum.uri,
      url: sAlbum.external_urls.spotify,
      artists: sAlbum.artists.map((x) => x.name),
    });
    this.type = sAlbum.album_type;
  }
}
