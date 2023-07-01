export interface F_Collections {
  posts: { [topicId: string]: F_TopicDoc };
  stats: { users: { count: number } };
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
