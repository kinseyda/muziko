import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Artist } from "../../../data/domain-classes/artist";
import { Release } from "../../../data/domain-classes/release";
import { Topic } from "../../../data/domain-classes/topic";
import { Track } from "../../../data/domain-classes/track";
import { S_SearchResponse } from "../../../data/spotify-classes";
import { spotifySlice } from "../../../spotifySlice";
import { RootState } from "../../../store";
import Centered from "../../centered";
import Page from "../../page/page";
import TopicList from "./topic-list";

function convertSpotifySchema(values: S_SearchResponse): Topic[] {
  const topicAr: Topic[] = [];
  if (values.tracks) {
    for (const track of values.tracks.items) {
      topicAr.push(
        new Track(
          track.id,
          track.name,
          track.album.images[0]?.url,
          track.popularity || 0
        )
      );
    }
  }
  if (values.albums) {
    for (const album of values.albums.items) {
      topicAr.push(
        new Release(
          album.id,
          album.name,
          album.images[0]?.url,
          album.popularity || 0,
          album.album_type
        )
      );
    }
  }
  if (values.artists) {
    for (const artist of values.artists.items) {
      topicAr.push(
        new Artist(
          artist.id,
          artist.name,
          artist.images[0]?.url,
          artist.popularity || 0
        )
      );
    }
  }

  topicAr.sort((x, y) => y.popularity - x.popularity);
  return topicAr;
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const token = useSelector((state: RootState) => state.spotify).accessToken;
  const dispatch = useDispatch();

  const [searchResults, setSearchResults] = useState([] as Topic[]);

  const searchVal = searchParams.keys().next().value;

  useEffect(() => {
    if (!searchVal) {
      setSearchResults([]);
    } else {
      const getSearch = async () => {
        let curToken = token;
        if (
          !token ||
          token.created + token.validityPeriod <
            Math.floor(new Date().getTime() / 1000)
        ) {
          const newToken = (
            await (
              await fetch("https://requesttoken-7ybywndcja-uc.a.run.app", {
                method: "GET",
              })
            ).json()
          ).token;
          const newTokenObj = {
            created: Math.floor(new Date().getTime() / 1000),
            token: newToken.access_token,
            validityPeriod: newToken.expires_in,
          };
          dispatch(spotifySlice.actions.setAccessToken(newTokenObj));
          curToken = newTokenObj;
        }

        const values = await (
          await fetch(
            "https://api.spotify.com/v1/search?" +
              new URLSearchParams({
                q: searchVal,
                type: ["artist", "album", "track"].join(),
              }),
            {
              method: "GET",
              headers: { Authorization: `Bearer ${curToken!!.token}` },
            }
          )
        ).json();

        setSearchResults(convertSpotifySchema(values as S_SearchResponse));
      };
      getSearch();
    }
  }, [searchVal]);

  return (
    <Page>
      <div className="drawer lg:drawer-open h-full">
        <input id="search-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col m-3">
          <h2 className="text-3xl font-bold flex content-center items-center">
            <label
              htmlFor="search-drawer"
              className="btn btn-circle drawer-button lg:hidden"
            >
              <AdjustmentsVerticalIcon className="h-8" />
            </label>
            <div className="m-3"></div>
            <div>Search: {searchVal}</div>
          </h2>
          <div className="m-1"></div>
          <div className="m-3 grow">
            {searchVal ? (
              searchResults?.length ? (
                <TopicList topics={searchResults} />
              ) : (
                <Centered>
                  <progress className="progress w-64" />
                </Centered>
              )
            ) : (
              <div>Enter a search query to see some results.</div>
            )}
          </div>
        </div>
        <div className="drawer-side h-full">
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
    </Page>
  );
}
