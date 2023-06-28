// Separated by page
export interface Language {
  welcome: WelcomeText;
  search: SearchText;
  topicCard: TopicCardText;
  navbar: NavbarText;
  themeSwitch: ThemeSwitchText;
  topicDetails: TopicDetailsText;
}

export interface WelcomeText {
  mainSlogan: JSX.Element;
  joinButton: JSX.Element;
  userWelcome: JSX.Element;
}

export interface SearchText {
  searchFor: JSX.Element;
  emptyQuery: JSX.Element;
}

export interface TopicCardText {
  details: JSX.Element;
  popularity: JSX.Element;
  track: JSX.Element;
  release: JSX.Element;
  artist: JSX.Element;
  artwork: string;
}

export interface NavbarText {
  search: string;
}
export interface ThemeSwitchText {
  dark: JSX.Element;
  light: JSX.Element;
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
}
