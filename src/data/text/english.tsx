import { Language } from "./schema";

export const english: Language = {
  welcome: {
    mainSlogan: (
      <>
        <i>Muziko</i> brings people
        <br />
        <b>together</b>
      </>
    ),
    joinButton: <>Join the community today</>,
    learnButton: (
      <>
        Learn more about <i>Muziko</i>
      </>
    ),
    userWelcome: <>Welcome</>,
    blurb: (
      <>
        <i>Muziko</i> is a platform that understands how much you love music,
        and how much you need to tell people about it. Using <i>Muziko</i>, you
        can learn more about an artist, their releases, or their tracks, and
        comment on them to a community of other music lovers.
        <br />
        <b>Discover your new favourite song today.</b>
      </>
    ),
  },
  stats: {
    totalUsers: <>Total Users</>,
    conversations: <>Conversations</>,
    discoveries: <>Discoveries Waiting</>,
  },
  search: {
    search: "Search",
    searchFor: <>Search</>,
    emptyQuery: <>Enter a search query to see some results.</>,
    emptyQueryTitle: <>None</>,
    queryLabel: <>Search query</>,
    queryPlaceholder: "Search query",
    include: <>Include</>,
    tracks: <>Tracks</>,
    releases: <>Releases</>,
    artists: <>Artists</>,
  },
  topicCard: {
    details: <>Details</>,
    popularity: <>Popularity</>,
    track: <>Track</>,
    release: <>Release</>,
    artist: <>Artist</>,
    artwork: "Artwork",
  },
  navbar: {
    search: "Search",
    home: "Home",
    recommendations: "Recommendations",
    browse: "Browse",
    settings: "Settings",
    user: "User",
  },
  themeSwitch: {
    theme: <>Theme</>,
    dark: <>Dark theme</>,
    light: <>Light theme</>,
    oled: <>OLED theme</>,
  },
  languageSwitch: {
    language: <>Language</>,
  },
  footer: {
    copyright: <>Copyright © 2023 Muziko - Some rights reserved</>,
    about: <>About Muziko</>,
    legal: <>Legal Information</>,
    spotifyAttribution: (
      <>
        Search and metadata functionality is provided courtesy of Spotify.
        Content all belongs to artists and respective publishers. All rights to
        their respective holders.
      </>
    ),
  },
  topicDetails: {
    details: <>Details</>,
    popularity: <>Popularity</>,
    track: <>Track</>,
    release: <>Release</>,
    artist: <>Artist</>,
    artwork: "Artwork",
    loading: <>Loading...</>,
    loadError: <>Error when loading - is the URL correct?</>,
    parseError: <>Invalid URL</>,
  },
  error: {
    fourOhFour: <>An error has occurred! This URL does not exist.</>,
  },
};
