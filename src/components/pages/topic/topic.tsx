import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchToken } from "../../../spotifySlice";
import { RootState, AppDispatch } from "../../../store";
import { S_Topic } from "../../../data/schema/spotify";
import Page from "../../common/page/page";

const uriRegExp = /spotify:(?<type>\w*):(?<id>\w*)/;

type Errors = "parse" | "dne";

export default function Topic() {
  const [searchParams] = useSearchParams();
  const token = useSelector((state: RootState) => state.spotify).accessToken;
  const dispatch = useDispatch<AppDispatch>();

  const [topic, setTopic] = useState(undefined as S_Topic | undefined | Errors);

  const searchVal: string = searchParams.keys().next().value;

  useEffect(() => {
    if (!searchVal || !token) {
      setTopic(undefined);
      if (!token) {
        dispatch(fetchToken());
      }
    } else {
      const getTopic = async () => {
        const r = searchVal.match(uriRegExp);
        if (r === null) {
          setTopic("parse");
          return;
        }
        const topicType = r.groups?.type;
        const topicId = r.groups?.id;
        const values = await (
          await fetch(`https://api.spotify.com/v1/${topicType}s/${topicId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token!!.token}` },
          })
        ).json();

        if (!values) {
          setTopic("dne");
          return;
        }

        setTopic(values);
      };
      getTopic();
    }
  }, [searchVal, token]);
  return (
    <Page>
      topic
      <div>
        {JSON.stringify(topic)}
        {topic === undefined && <div>loading</div>}
        {topic === "parse" && <div>invalid url</div>}
        {topic === "dne" && (
          <div>Error finding topic. is the url formed right?</div>
        )}
      </div>
    </Page>
  );
}
