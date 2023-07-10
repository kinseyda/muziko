// Interfaces that partially match what Spotify's api actually returns. The
// Spotify objects will have strictly more or equal attributes. These will then
// be mapped to the domain classes, which may be slightly more conveniently
// linked.

// https://developer.spotify.com/documentation/web-api/reference/search
// https://developer.spotify.com/documentation/web-api/reference/get-an-artist
// https://developer.spotify.com/documentation/web-api/reference/get-an-album
// https://developer.spotify.com/documentation/web-api/reference/get-track

export interface S_SearchResponse {
  tracks?: {
    items: S_TrackObject[];
  };
  albums?: {
    items: S_SimplifiedAlbumObject[];
  };
  artists?: {
    items: S_ArtistObject[];
  };
}

interface S_ImageObject {
  url: string;
  height: number;
  width: number;
}

export interface S_TrackObject extends S_Helper {
  album: {
    images: S_ImageObject[];
    album_type: "album" | "single" | "compilation";
    total_tracks: number;
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
  };
  artists: S_ArtistObject[];
  popularity?: number;
  uri: string;
  track_number: number;
  disc_number: number;
  explicit: boolean;
  duration_ms: number;
}
export interface S_AlbumObject extends S_Helper {
  album_type: string;
  images: S_ImageObject[];
  popularity?: number;
  uri: string;
}
export interface S_SimplifiedAlbumObject extends S_Helper {
  album_type: string;
  images: S_ImageObject[];
  popularity?: number;
  uri: string;
}
export interface S_ArtistObject extends S_Helper {
  images: S_ImageObject[];
  popularity?: number;
  uri: string;
  followers: { total: number };
  genres: string[];
}

// Following are not actually Spotify schema but are helpful
interface S_Helper {
  id: string;
  name: string;
}
export type S_Topic = S_ArtistObject | S_AlbumObject | S_TrackObject;
export type S_SearchTopic =
  | S_ArtistObject
  | S_SimplifiedAlbumObject
  | S_TrackObject;
