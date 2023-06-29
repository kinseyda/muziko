export class Post {
  topicId: string;
  time: string;
  content: string;
  userId: string;
  userDisplayName: string;

  constructor(
    topicId: string,
    time: string,
    content: string,
    userId: string,
    userDisplayName: string
  ) {
    this.topicId = topicId;
    this.time = time;
    this.content = content;
    this.userId = userId;
    this.userDisplayName = userDisplayName;
  }
}
