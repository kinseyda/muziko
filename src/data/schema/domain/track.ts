import { S_TrackObject } from "../spotify";
import Creation from "./creation";

export class Track extends Creation {
  trackNumber: number;
  trackDenominator: number;
  releaseName: string;
  releaseDate: string;
  durationMs: number;
  explicit: boolean;

  constructor(sTrack: S_TrackObject) {
    super({
      id: sTrack.id,
      imageLink: sTrack.album.images[0]?.url || "",
      name: sTrack.name,
      popularity: sTrack.popularity || 0,
      uri: sTrack.uri,
      url: sTrack.external_urls.spotify,
      artists: sTrack.artists.map((x) => x.name),
    });
    this.trackNumber = sTrack.track_number;
    this.trackDenominator = sTrack.album.total_tracks;
    this.releaseName = sTrack.album.name;
    this.releaseDate = sTrack.album.release_date;
    this.durationMs = sTrack.duration_ms;
    this.explicit = sTrack.explicit;
  }

  get duration() {
    const date = new Date(this.durationMs);
    return `${date.getMinutes()}:${date.getSeconds()}`;
  }

  get posFraction() {
    return `${this.trackNumber}/${this.trackDenominator}`;
  }
}
