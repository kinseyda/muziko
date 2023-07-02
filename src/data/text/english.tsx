import { Language } from "./schema";

export const english: Language = {
  welcome: {
    mainSlogan: (
      <div>
        <i>Muziko</i> brings people
        <br />
        <b>together</b>
      </div>
    ),
    joinButton: <span>Join the community today</span>,
    userWelcome: <span>Welcome</span>,
  },
  search: {
    search: "Search",
    searchFor: <span>Search</span>,
    emptyQuery: <div>Enter a search query to see some results.</div>,
  },
  topicCard: {
    details: <span>Details</span>,
    popularity: <span>Popularity</span>,
    track: <span>Track</span>,
    release: <span>Release</span>,
    artist: <span>Artist</span>,
    artwork: "Artwork",
  },
  navbar: {
    search: "Search",
  },
  themeSwitch: {
    dark: <span>Dark theme</span>,
    light: <span>Light theme</span>,
    oled: <span>OLED theme</span>,
  },
  topicDetails: {
    details: <span>Details</span>,
    popularity: <span>Popularity</span>,
    track: <span>Track</span>,
    release: <span>Release</span>,
    artist: <span>Artist</span>,
    artwork: "Artwork",
    loading: <span>Loading...</span>,
    loadError: <span>Error when loading - is the URL correct?</span>,
    parseError: <span>Invalid URL</span>,
  },
};
