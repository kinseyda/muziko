import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import NavPage from "../../common/page/nav-page";
import Centered from "../../common/centered";
import { NavLink } from "react-router-dom";
import Background from "./background/background";
import { languages } from "../../../data/text/languages";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  F_PostStats,
  F_TopicDoc,
  F_UserStats,
} from "../../../data/schema/firebase";
import { useEffect, useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Stats() {
  const [userStats, setUserStats] = useState(
    undefined as F_UserStats | undefined
  );
  const [postStats, setPostStats] = useState(
    undefined as F_PostStats | undefined
  );

  const fetchStats = async () => {
    const usersDocRef = doc(db, "stats", "users");
    const usersDocSnap = await getDoc(usersDocRef);
    if (usersDocSnap.exists()) {
      setUserStats(usersDocSnap.data() as F_UserStats);
    }

    const postsDocRef = doc(db, "stats", "posts");
    const postsDocSnap = await getDoc(postsDocRef);
    if (postsDocSnap.exists()) {
      setPostStats(postsDocSnap.data() as F_PostStats);
    }
  };
  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-figure text-accent">
            <UserIcon className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-accent">{userStats?.count}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <ChatBubbleLeftRightIcon className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title">Conversations</div>
          <div className="stat-value text-primary">
            {postStats?.uniqueTopicCount}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <HeartIcon className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title">Discoveries Waiting</div>
          <div className="stat-value text-secondary">∞</div>
        </div>
      </div>
    </div>
  );
}
