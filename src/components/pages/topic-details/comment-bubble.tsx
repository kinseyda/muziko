import { Post } from "../../../data/schema/domain/post";

export default function CommentBubble(props: { post: Post }) {
  return (
    <div className="chat chat-start">
      <div className="chat-header flex gap-3 items-baseline">
        {props.post.userDisplayName}
        <time className="text-xs opacity-50">{props.post.time}</time>
      </div>
      <div className="chat-bubble">{props.post.content}</div>
    </div>
  );
}
