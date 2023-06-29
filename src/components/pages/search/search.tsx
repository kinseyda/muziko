import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { S_SearchResponse } from "../../../data/schema/spotify";
import { fetchToken } from "../../../spotifySlice";
import { AppDispatch, RootState } from "../../../store";
import Centered from "../../common/centered";
import NavPage from "../../common/page/nav-page";
import TopicList from "./topic-list";
import { Track } from "../../../data/schema/domain/track";
import { Artist } from "../../../data/schema/domain/artist";
import Topic from "../../../data/schema/domain/topic";
import Release from "../../../data/schema/domain/release";
import { languages } from "../../../data/text/languages";

export function convertSpotifySearchSchema(values: S_SearchResponse): Topic[] {
  const topicAr: Topic[] = [];
  if (values.tracks) {
    for (const track of values.tracks.items) {
      topicAr.push(
        new Track({
          id: track.id,
          imageLink: track.album.images[0]?.url,
          name: track.name,
          popularity: track.popularity || 0,
          uri: track.uri,
        })
      );
    }
  }
  if (values.albums) {
    for (const album of values.albums.items) {
      topicAr.push(
        new Release({
          id: album.id,
          imageLink: album.images[0]?.url,
          name: album.name,
          popularity: album.popularity || 0,
          type: album.album_type,
          uri: album.uri,
        })
      );
    }
  }
  if (values.artists) {
    for (const artist of values.artists.items) {
      topicAr.push(
        new Artist({
          id: artist.id,
          imageLink: artist.images[0]?.url,
          name: artist.name,
          popularity: artist.popularity || 0,
          uri: artist.uri,
        })
      );
    }
  }

  topicAr.sort((x, y) => y.popularity - x.popularity);
  return topicAr;
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const token = useSelector((state: RootState) => state.spotify).accessToken;
  const dispatch = useDispatch<AppDispatch>();

  const [searchResults, setSearchResults] = useState([] as Topic[]);

  const searchVal = searchParams.keys().next().value;

  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].search;

  useEffect(() => {
    if (!searchVal || !token) {
      setSearchResults([]);
      if (!token) {
        dispatch(fetchToken());
      }
    } else {
      const getSearch = async () => {
        const values = (await (
          await fetch(
            "https://api.spotify.com/v1/search?" +
              new URLSearchParams({
                q: searchVal,
                type: ["artist", "album", "track"].join(),
              }),
            {
              method: "GET",
              headers: { Authorization: `Bearer ${token!!.token}` },
            }
          )
        ).json()) as S_SearchResponse;

        setSearchResults(convertSpotifySearchSchema(values));
      };
      getSearch();
    }
  }, [searchVal, token]);

  return (
    <NavPage title={`${text.search}: "${searchVal}"`}>
      <div className="drawer lg:drawer-open h-full">
        <input id="search-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <h2 className="text-3xl font-bold flex content-center items-center m-3">
            <label
              htmlFor="search-drawer"
              className="btn btn-circle drawer-button lg:hidden"
            >
              <AdjustmentsVerticalIcon className="h-8" />
            </label>
            <div className="m-3"></div>
            <div>
              {text.searchFor}: {searchVal ? `"${searchVal}"` : "None"}
            </div>
          </h2>
          <div className="grow">
            {searchVal ? (
              searchResults?.length ? (
                <TopicList topics={searchResults} />
              ) : (
                <Centered>
                  <span className="loading loading-spinner w-16"></span>
                </Centered>
              )
            ) : (
              <div className="m-5">{text.emptyQuery}</div>
            )}
          </div>
        </div>
        <div className="drawer-side h-full z-20">
          <label htmlFor="search-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </NavPage>
  );
}
