import Topic from "../../../data/schema/domain/topic";
import TopicCard from "./topic-card";

export default function TopicList(props: { topics: Topic[] }) {
  return (
    <div className="flex flex-col gap-3 place-items-center h-full overflow-auto">
      {props.topics.map((x) => {
        return <TopicCard key={x.id} topic={x} />;
      })}
    </div>
  );
}
