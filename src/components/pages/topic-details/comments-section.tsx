import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { Post } from "../../../data/schema/domain/post";
import { F_TopicDoc } from "../../../data/schema/firebase";
import CommentBubble from "./comment-bubble";
import Centered from "../../common/centered";

function convertFirebasePostSchema(postObjs: F_TopicDoc, topicId: string) {
  const posts: Post[] = [];
  for (const postTime in postObjs) {
    const postObj = postObjs[postTime];
    posts.push(
      new Post(
        topicId,
        postObj.time,
        postObj.content,
        postObj.userId,
        postObj.userDisplayName
      )
    );
  }
  return posts;
}

export default function CommentsSection(props: { topicId: string }) {
  const [posts, setPosts] = useState([] as Post[]);
  const [errors, setErrors] = useState(undefined as undefined | "No posts");

  const fetchPost = async () => {
    const docRef = doc(db, "posts", props.topicId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPosts(
        convertFirebasePostSchema(docSnap.data() as F_TopicDoc, props.topicId)
      );
    } else {
      setErrors("No posts");
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      <h2 className="m-3 text-3xl font-bold flex flex-row items-center gap-3">
        <ChatBubbleLeftEllipsisIcon className="h-12" /> Comments
      </h2>
      <div className="m-3">
        {errors === undefined && posts.length === 0 && (
          <Centered>
            <span className="loading loading-spinner w-16"></span>
          </Centered>
        )}
        {errors === "No posts" && "No posts yet!"}
        {posts && posts.map((x) => <CommentBubble key={x.time} post={x} />)}
      </div>
    </div>
  );
}
