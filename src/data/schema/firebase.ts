export interface F_Collections {
  posts: { [topicId: string]: F_TopicDoc };
  stats: { users: F_UserStats; posts: F_PostStats };
  users: { [userId: string]: F_User };
}

export interface F_User {
  displayName: string;
}

export interface F_UserStats {
  count: number;
}
export interface F_PostStats {
  totalCount: number;
  uniqueTopicCount: number;
}
export interface F_TopicDoc {
  [time: number]: F_PostMap;
}

export interface F_PostMap {
  time: string;
  content: string;
  userId: string;
  userDisplayName: string;
}
