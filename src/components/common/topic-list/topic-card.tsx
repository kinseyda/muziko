import { NavLink } from "react-router-dom";
import { Track } from "../../../data/schema/domain/track";
import { Artist } from "../../../data/schema/domain/artist";
import Release from "../../../data/schema/domain/release";
import Topic from "../../../data/schema/domain/topic";
import { languages } from "../../../data/text/languages";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { routes } from "../../../routes";

export default function TopicCard(props: { topic: Topic }) {
  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].topicCard;

  function TrackContent(track: Track) {
    return (
      <>
        <div>{text.track}</div>
        <div>
          {text.by} {text.artistString(track.artists)}
        </div>
      </>
    );
  }
  function ReleaseContent(release: Release) {
    return (
      <>
        <div>
          {text.release} ({release.type})
        </div>
        <div>
          {text.by} {text.artistString(release.artists)}
        </div>
      </>
    );
  }
  function ArtistContent(artist: Artist) {
    return <div>{text.artist}</div>;
  }

  function ContentSwitch(props: { topic: Topic }) {
    if (props.topic instanceof Track) return TrackContent(props.topic);
    if (props.topic instanceof Release) return ReleaseContent(props.topic);
    if (props.topic instanceof Artist) return ArtistContent(props.topic);
    return <div>Error!</div>;
  }

  return (
    <div className="card card-side card-bordered bg-base-100 shadow-xl w-full max-w-3xl ">
      <figure>
        <img
          className="aspect-square max-h-24 lg:max-h-32 m-3"
          src={props.topic.imageLink}
          alt={text.artwork}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.topic.name}</h2>
        <ContentSwitch topic={props.topic} />
        <p>
          {text.popularity}: {props.topic.popularity}/100
        </p>
        <div className="card-actions justify-end">
          <NavLink
            to={{
              pathname: routes.topic.paths[languageKey],
              search: props.topic.uri,
            }}
            className="btn rounded-full"
          >
            {text.details}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
