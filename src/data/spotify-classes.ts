// Interfaces that partially match what Spotify's api actually returns. The
// Spotify objects will have strictly more or equal attributes. These will then
// be mapped to the domain classes, which may be slightly more conveniently
// linked. https://developer.spotify.com/documentation/web-api/reference/search

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

// Not actually a Spotify object, just holds the common attributes they all have.
interface S_Helper {
  id: string;
  name: string;
}
interface S_ImageObject {
  url: string;
  height: number;
  width: number;
}

export interface S_TrackObject extends S_Helper {
  album: {
    images: S_ImageObject[];
  };
  popularity?: number;
}
export interface S_SimplifiedAlbumObject extends S_Helper {
  album_type: string;
  images: S_ImageObject[];
  popularity?: number;
}
export interface S_ArtistObject extends S_Helper {
  images: S_ImageObject[];
  popularity?: number;
}
