import { Language } from "./schema";

export const english: Language = {
  code: "en",
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
    noResults: <>No results found. Try entering a different query.</>,
  },
  topicCard: {
    details: <>Details</>,
    popularity: <>Popularity</>,
    track: <>Track</>,
    release: <>Release</>,
    artist: <>Artist</>,
    artwork: "Artwork",
    by: <>By</>,
    and: "and",
  },
  navbar: {
    search: "Search",
    home: "Home",
    recommendations: "Recommendations",
    browse: "Browse",
    settings: "Settings",
    user: "User",
    login: <>Log in</>,
    register: <>Register</>,
    logout: <>Log out</>,
    profile: <>Profile</>,
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
    and: "and",
  },
  error: {
    fourOhFour: <>An error has occurred! This URL does not exist.</>,
  },
  commentsSection: {
    comments: <>Comments</>,
    comment: <>Comment</>,
    leaveAComment: "Leave a comment",
    loginToComment: "Log in to leave a comment",
    noPosts: <>No posts yet!</>,
  },
};
