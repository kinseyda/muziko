import Topic from "../../../data/schema/domain/topic";
import Paginated from "../paginated";
import TopicCard from "./topic-card";

export default function TopicList(props: { topics: Topic[] }) {
  return (
    <Paginated
      pageSize={5}
      contents={props.topics.map((x) => {
        return <TopicCard key={x.id} topic={x} />;
      })}
    />
  );
}
