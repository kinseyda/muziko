import { S_TrackObject } from "../spotify";
import Topic, { TopicParams } from "./topic";

export class Track extends Topic {
  trackNumber: number;
  trackDenominator: number;
  releaseName: string;
  releaseDate: string;
  durationMs: number;

  constructor(sTrack: S_TrackObject) {
    super({
      id: sTrack.id,
      imageLink: sTrack.album.images[0].url,
      name: sTrack.name,
      popularity: sTrack.popularity || 0,
      uri: sTrack.uri,
    });
    this.trackNumber = sTrack.track_number;
    this.trackDenominator = sTrack.album.total_tracks;
    this.releaseName = sTrack.album.name;
    this.releaseDate = sTrack.album.release_date;
    this.durationMs = sTrack.duration_ms;
  }

  get duration() {
    const date = new Date(this.durationMs);
    return `${date.getMinutes()}:${date.getSeconds()}`;
  }

  get posFraction() {
    return `${this.trackNumber}/${this.trackDenominator}`;
  }
}
