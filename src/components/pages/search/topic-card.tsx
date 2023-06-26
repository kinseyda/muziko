import { Artist } from "../../../data/domain-classes/artist";
import { Release } from "../../../data/domain-classes/release";
import { Topic } from "../../../data/domain-classes/topic";
import { Track } from "../../../data/domain-classes/track";

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
        <p>Popularity: {props.topic.popularity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  );
}
