import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { F_PostStats, F_UserStats } from "../../../data/schema/firebase";
import { useEffect, useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { languages } from "../../../data/text/languages";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

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
  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].stats;
  return (
    <div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-figure text-accent">
            <UserIcon className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title">{text.totalUsers}</div>
          <div className="stat-value text-accent">{userStats?.count}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <ChatBubbleLeftRightIcon className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title">{text.conversations}</div>
          <div className="stat-value text-primary">
            {postStats?.uniqueTopicCount}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <HeartIcon className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title">{text.discoveries}</div>
          <div className="stat-value text-secondary">∞</div>
        </div>
      </div>
    </div>
  );
}
