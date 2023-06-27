import { NavLink } from "react-router-dom";
import { Track } from "../../../data/schema/search/track";
import { Artist } from "../../../data/schema/search/artist";
import Release from "../../../data/schema/search/release";
import Topic from "../../../data/schema/search/topic";

function TrackContent(track: Track) {
  return <div>Track</div>;
}
function ReleaseContent(release: Release) {
  return <div>Release ({release.type})</div>;
}
function ArtistContent(artist: Artist) {
  return <div>Artist</div>;
}

function ContentSwitch(props: { topic: Topic }) {
  if (props.topic instanceof Track) return TrackContent(props.topic);
  if (props.topic instanceof Release) return ReleaseContent(props.topic);
  if (props.topic instanceof Artist) return ArtistContent(props.topic);
  return <div>Error!</div>;
}

export default function TopicCard(props: { topic: Topic }) {
  return (
    <div className="card card-side card-bordered bg-base-100 shadow-xl w-full max-w-3xl ">
      <figure>
        <img
          className="aspect-square max-h-16 lg:max-h-32"
          src={props.topic.imageLink}
          alt="Artwork"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.topic.name}</h2>
        <ContentSwitch topic={props.topic} />
        <p>Popularity: {props.topic.popularity}/100</p>
        <div className="card-actions justify-end">
          <NavLink
            to={{ pathname: "/topic", search: props.topic.uri }}
            className="btn btn-ghost rounded-full"
          >
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}
