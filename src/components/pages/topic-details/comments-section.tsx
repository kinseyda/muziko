import {
  ChatBubbleLeftEllipsisIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { Post } from "../../../data/schema/domain/post";
import { F_PostMap, F_TopicDoc } from "../../../data/schema/firebase";
import { db } from "../../../firebase";
import { RootState } from "../../../store";
import Centered from "../../common/centered";
import CommentBubble from "./comment-bubble";
import { languages } from "../../../data/text/languages";
import Paginated from "../../common/paginated";

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

const commentSchema = Yup.object().shape({
  commentText: Yup.string().required("Required"),
});

export default function CommentsSection(props: { topicId: string }) {
  const user = useSelector((state: RootState) => state.auth.user);
  const [posts, setPosts] = useState([] as Post[]);
  const [errors, setErrors] = useState(undefined as undefined | "No posts");
  const [backendError, setBackendError] = useState(
    undefined as undefined | "Firebase"
  );

  const fetchPost = async () => {
    const docRef = doc(db, "posts", props.topicId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPosts(
        convertFirebasePostSchema(docSnap.data() as F_TopicDoc, props.topicId)
      );
      setErrors(undefined);
    } else {
      setErrors("No posts");
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].commentsSection;
  return (
    <div>
      <div className="prose">
        <h2 className="m-3 flex flex-row items-center gap-3">
          <ChatBubbleLeftEllipsisIcon className="h-12" /> {text.comments}
        </h2>
      </div>
      <div className="m-3 flex justify-center gap-3 w-full items-center">
        <div className="w-full md:w-1/2">
          <Formik
            initialValues={{ commentText: "" }}
            validationSchema={commentSchema}
            onSubmit={async (values, { setSubmitting }) => {
              if (!user) {
                console.log("Tried to post comment without logging in!");
                return;
              }
              const docRef = doc(db, "posts", props.topicId);
              const docSnap = await getDoc(docRef);
              const curTime = new Date();
              const post: F_PostMap = {
                time: curTime.toISOString(),
                content: values.commentText,
                userId: user.email,
                userDisplayName: user.displayName,
              };
              const updateWith: { [time: number]: F_PostMap } = {};
              updateWith[curTime.getTime()] = post;
              if (docSnap.exists()) {
                await updateDoc(docRef, updateWith);
                setSubmitting(false);
              } else {
                await setDoc(docRef, updateWith);
                setSubmitting(false);
              }
              fetchPost();
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-center items-center gap-3">
                    <div className="form-control w-full ">
                      <label htmlFor="commentText" className="label">
                        <span className="label-text">Comment</span>
                      </label>
                      <Field
                        type="text"
                        as="textarea"
                        name="commentText"
                        placeholder={
                          user ? text.leaveAComment : text.loginToComment
                        }
                        disabled={!user}
                        className={`textarea textarea-md textarea-bordered w-full ${
                          "commentText" in errors && "commentText" in touched
                            ? "textarea-error"
                            : ""
                        }`}
                      />
                      <label className="label">
                        <ErrorMessage
                          name="commentText"
                          component="div"
                          className="label-text-alt text-error -mb-4"
                        />
                      </label>
                    </div>
                    <button
                      type="submit"
                      className={`btn ${
                        !user || Object.keys(errors).length || isSubmitting
                          ? "btn-disabled"
                          : "btn-primary"
                      }`}
                    >
                      Post
                    </button>
                  </div>
                  {backendError && (
                    <div className="my-5">
                      <div className="alert alert-error">
                        <XCircleIcon className="shrink-0 h-6 w-6" />
                        <span>{backendError}</span>
                      </div>
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
          {errors === undefined && posts.length === 0 && (
            <Centered>
              <span className="loading loading-spinner w-16"></span>
            </Centered>
          )}
          {errors === "No posts" && text.noPosts}
          {posts && (
            <Paginated
              pageSize={10}
              contents={posts.map((x) => (
                <CommentBubble key={x.time} post={x} />
              ))}
            />
          )}
        </div>
      </div>
    </div>
  );
}
