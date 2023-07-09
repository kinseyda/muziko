import { S_ArtistObject } from "../spotify";
import Topic from "./topic";

export class Artist extends Topic {
  constructor(sArtist: S_ArtistObject) {
    super({
      id: sArtist.id,
      imageLink: sArtist.images[0]?.url,
      name: sArtist.name,
      popularity: sArtist.popularity || 0,
      uri: sArtist.uri,
    });
  }
}
