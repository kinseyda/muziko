import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchToken } from "../../../spotifySlice";
import { RootState, AppDispatch } from "../../../store";
import {
  S_AlbumObject,
  S_ArtistObject,
  S_Topic,
  S_TrackObject,
} from "../../../data/schema/spotify";
import NavPage from "../../common/page/nav-page";
import Topic from "../../../data/schema/domain/topic";
import { Track } from "../../../data/schema/domain/track";
import Release from "../../../data/schema/domain/release";
import { Artist } from "../../../data/schema/domain/artist";
import { languages } from "../../../data/text/languages";
import Centered from "../../common/centered";

const uriRegExp = /spotify:(?<type>(?:track|album|artist)):(?<id>\w*)/;

type Errors = "parse" | "dne";

export default function TopicDetails() {
  const [searchParams] = useSearchParams();
  const token = useSelector((state: RootState) => state.spotify.accessToken);
  const dispatch = useDispatch<AppDispatch>();

  const [topic, setTopic] = useState(undefined as Topic | undefined | Errors);

  const topicURL: string = searchParams.keys().next().value;

  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].topicDetails;
  useEffect(() => {
    if (!topicURL || !token) {
      setTopic(undefined);
      if (!token) {
        dispatch(fetchToken());
      }
    } else {
      const getTopic = async () => {
        const r = topicURL.match(uriRegExp);
        if (r === null) {
          setTopic("parse");
          return;
        }
        const topicType = r.groups?.type;
        const topicId = r.groups?.id;
        const values: any = (await (
          await fetch(`https://api.spotify.com/v1/${topicType}s/${topicId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token!!.token}` },
          })
        ).json()) as S_Topic | { error: { status: number; message: string } };

        if (values.error) {
          setTopic("dne");
          return;
        }
        let sValues;
        switch (topicType) {
          case "track":
            sValues = values as S_TrackObject;
            setTopic(
              new Track({
                id: sValues.id,
                name: sValues.name,
                imageLink: sValues.album.images[0].url,
                popularity: sValues.popularity || 0,
                uri: sValues.uri,
              })
            );
            break;
          case "album":
            sValues = values as S_AlbumObject;
            setTopic(
              new Release({
                id: sValues.id,
                name: sValues.name,
                imageLink: sValues.images[0].url,
                popularity: sValues.popularity || 0,
                uri: sValues.uri,
                type: sValues.album_type,
              })
            );
            break;
          case "artist":
            sValues = values as S_ArtistObject;
            setTopic(
              new Artist({
                id: sValues.id,
                name: sValues.name,
                imageLink: sValues.images[0].url,
                popularity: sValues.popularity || 0,
                uri: sValues.uri,
              })
            );
            break;
        }
      };
      getTopic();
    }
  }, [topicURL, token]);
  return (
    <NavPage title="Details">
      <div className="h-full flex flex-col m-3">
        <h2 className="text-3xl font-bold flex content-center items-center">
          {topic instanceof Topic && (
            <div>
              {topic.name} ({topic instanceof Track && text.track}
              {topic instanceof Release && text.release}
              {topic instanceof Artist && text.artist})
            </div>
          )}
          {topic === undefined && text.loading}
          {topic === "parse" && text.parseError}
          {topic === "dne" && text.loadError}
        </h2>
        <div className="m-1"></div>
        <div className="m-3 grow">
          {topic instanceof Topic && (
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ">
              <img src={topic.imageLink} className=""></img>
              <div>a</div>
              <div>b</div>
              <div>c</div>
            </div>
          )}
          {topic === undefined && (
            <Centered>
              <span className="loading loading-spinner w-16"></span>
            </Centered>
          )}
        </div>
      </div>
    </NavPage>
  );
}
