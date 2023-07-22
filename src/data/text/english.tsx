import {
  daisyLink,
  kevinLink,
  muzikoGithubLink,
  reactLink,
  spotifyAPILink,
  spotifyLink,
  stripeLink,
  tailwindLink,
} from "./external-links";
import { Language } from "./schema";

const artistString = (artists: string[]) => {
  if (artists.length === 1) {
    return <>{artists[0]}</>;
  }
  let res = `${artists[0]}`;
  for (let i = 1; i < artists.length; i++) {
    if (i == artists.length - 1) {
      res = `${res} and ${artists[i]}`;
    } else {
      res = `${res}, ${artists[i]}`;
    }
  }
  return <>{res}</>;
};

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
    artistString: artistString,
  },
  navbar: {
    search: "Search",
    home: "Home",
    recommendations: "Recommendations",
    user: "User",
    login: <>Log in</>,
    register: <>Register</>,
    logout: <>Log out</>,
    profile: <>Profile</>,
  },
  settings: {
    settings: "Settings",
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
    viewOnSpotify: (topicName: string) => (
      <>
        View <i>{topicName}</i> on Spotify
      </>
    ),
    explicit: <>Explicit</>,
    artistString: artistString,
    releasedOn: <>Released on</>,
    trackNumber: <>Track number</>,
    by: <>By</>,
    length: <>Length</>,
    followers: <>Followers</>,
    genres: <>Genres</>,
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
  recommendations: {
    recommendations: "Recommendations",
    noResults: <>No results found. Try selecting different genres.</>,
    emptyQuery: <>Select some genres to get started.</>,
    available: <>Available Genres</>,
    selected: <>Selected Genres</>,
    error: <>No results found. Try selecting different genres.</>,
  },
  legal: {
    legalInfo: "Legal Info",
    prose: (
      <>
        <h1>Legal Information</h1>
        <h2>Attributions</h2>
        <p>
          Muziko's search and data functionality utilizes {spotifyLink}'s{" "}
          {spotifyAPILink}. Muziko makes no claim to the copyright of any data
          for which the creator is Spotify or for which the license is currently
          held by Spotify - video, audio, metadata, recommendations, or
          otherwise. The comments hosted on Muziko are not in any way endorsed
          by Spotify, and should not be construed as being affiliated with
          Spotify in any way.
        </p>
        <p>
          Muziko is created using {reactLink}, with {tailwindLink} and{" "}
          {daisyLink} components. The incredible wave/gradient effect on the
          welcome page is a deobfuscated version of the one on {stripeLink}
          's website. Full credit for the deobfuscation goes to Kevin Hufnagl,
          his blog post on the effect can be found on his {kevinLink}.
        </p>
        <h2>Privacy</h2>
        <p>
          Muziko uses browser cookies to store your settings preferences. This
          includes your chosen theme and language. These cookies never leave the
          browser.
        </p>
        <p>
          Muziko uses a Firestore database for the comments. No personal
          information is stored other than users' email addresses.
        </p>
        <p>
          Muziko is entirely open-source under the GPL version 3 license, except
          for some Firebase functions for the backend. These are used to update
          the site statistics and to create a proxy for the Spotify API, and are
          kept closed source to ensure the security of the API key. Source code
          for the project can be found on {muzikoGithubLink}.
        </p>
      </>
    ),
  },
  login: {
    login: "Log In",
    email: <>Email</>,
    password: <>Password</>,
    newToMuziko: <>New to Muziko?</>,
    register: <>Register</>,
    loginButton: <>Log In</>,
  },
  register: {
    register: "Register",
    email: <>Email</>,
    password: <>Password</>,
    displayName: <>Display name</>,
    haveAnAccount: <>Have an account?</>,
    login: <>Log In</>,
  },
};
