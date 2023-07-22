// Separated by page/component
export interface Language {
  code: string;
  welcome: WelcomeText;
  stats: StatsText;
  search: SearchText;
  topicCard: TopicCardText;
  navbar: NavbarText;
  settings: SettingsText;
  themeSwitch: ThemeSwitchText;
  languageSwitch: LanguageSwitchText;
  footer: FooterText;
  topicDetails: TopicDetailsText;
  error: ErrorText;
  commentsSection: CommentsSectionText;
  recommendations: RecommendationsText;
  legal: LegalText;
  login: LoginText;
  register: RegisterText;
}

export interface WelcomeText {
  mainSlogan: JSX.Element;
  joinButton: JSX.Element;
  learnButton: JSX.Element;
  userWelcome: JSX.Element;
  blurb: JSX.Element;
}

export interface StatsText {
  totalUsers: JSX.Element;
  conversations: JSX.Element;
  discoveries: JSX.Element;
}

export interface SearchText {
  search: string;
  searchFor: JSX.Element;
  emptyQuery: JSX.Element;
  emptyQueryTitle: JSX.Element;
  queryLabel: JSX.Element;
  queryPlaceholder: string;
  include: JSX.Element;
  tracks: JSX.Element;
  releases: JSX.Element;
  artists: JSX.Element;
  noResults: JSX.Element;
}

export interface TopicCardText {
  details: JSX.Element;
  popularity: JSX.Element;
  track: JSX.Element;
  release: JSX.Element;
  artist: JSX.Element;
  artwork: string;
  by: JSX.Element;
  artistString: (artists: string[]) => JSX.Element;
}

export interface NavbarText {
  home: string;
  recommendations: string;
  user: string;
  search: string;
  login: JSX.Element;
  register: JSX.Element;
  logout: JSX.Element;
  profile: JSX.Element;
}
export interface SettingsText {
  settings: string;
}

export interface ThemeSwitchText {
  theme: JSX.Element;
  dark: JSX.Element;
  light: JSX.Element;
  oled: JSX.Element;
}

export interface FooterText {
  copyright: JSX.Element;
  about: JSX.Element;
  legal: JSX.Element;
  spotifyAttribution: JSX.Element;
}

export interface TopicDetailsText {
  details: JSX.Element;
  popularity: JSX.Element;
  track: JSX.Element;
  release: JSX.Element;
  artist: JSX.Element;
  artwork: string;
  loading: JSX.Element;
  parseError: JSX.Element;
  loadError: JSX.Element;
  viewOnSpotify: (topicName: string) => JSX.Element;
  artistString: (artists: string[]) => JSX.Element;
  explicit: JSX.Element;
  releasedOn: JSX.Element;
  trackNumber: JSX.Element;
  by: JSX.Element;
  length: JSX.Element;
  followers: JSX.Element;
  genres: JSX.Element;
}

export interface ErrorText {
  fourOhFour: JSX.Element;
}

export interface LanguageSwitchText {
  language: JSX.Element;
}

export interface CommentsSectionText {
  comments: JSX.Element;
  comment: JSX.Element;
  leaveAComment: string;
  loginToComment: string;
  noPosts: JSX.Element;
}

export interface RecommendationsText {
  recommendations: string;
  noResults: JSX.Element;
  emptyQuery: JSX.Element;
  available: JSX.Element;
  selected: JSX.Element;
  error: JSX.Element;
}

export interface LegalText {
  legalInfo: string;
  prose: JSX.Element;
}

export interface LoginText {
  login: string;
  email: JSX.Element;
  password: JSX.Element;
  newToMuziko: JSX.Element;
  register: JSX.Element;
  loginButton: JSX.Element;
}

export interface RegisterText {
  register: string;
  email: JSX.Element;
  password: JSX.Element;
  displayName: JSX.Element;
  haveAnAccount: JSX.Element;
  login: JSX.Element;
}
