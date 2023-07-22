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
      res = `${res} kaj ${artists[i]}`;
    } else {
      res = `${res}, ${artists[i]}`;
    }
  }
  return <>{res}</>;
};

export const esperanto: Language = {
  code: "eo",
  welcome: {
    mainSlogan: (
      <>
        <i>Muziko</i> <br /> <b>kunigas</b>
        <br />
        homojn
      </>
    ),
    joinButton: <>Aliĝu al la komunumo hodiaŭ</>,
    learnButton: (
      <>
        Lernu pli pri <i>Muziko</i>
      </>
    ),
    userWelcome: <>Bonvenon</>,
    blurb: (
      <>
        <i>Muziko</i> estas platformo kiu komprenas kiom multe vi amas muzikon,
        kaj kiom vi bezonas rakonti al homoj pri tio. Uzante <i>Muziko</i>, vi
        povas lerni pli pri artisto, iliaj albumoj, aŭ iliaj kantoj, kaj komentu
        ilin al komunumo de aliaj muzikamantoj.
        <br />
        <b>Malkovru vian novan plej ŝatatan kanton hodiaŭ.</b>
      </>
    ),
  },
  stats: {
    totalUsers: <>Tutaj Uzantoj</>,
    conversations: <>Konversacioj</>,
    discoveries: <>Malkovroj Atendantaj</>,
  },
  search: {
    search: "Serĉu",
    searchFor: <>Serĉu</>,
    emptyQuery: <>Enigu serĉpeton por vidi kelkajn rezultojn.</>,
    emptyQueryTitle: <>Neniu</>,
    queryLabel: <>Serĉa demando</>,
    queryPlaceholder: "Serĉa demando",
    include: <>Inkluzivi</>,
    tracks: <>Kantoj</>,
    releases: <>Albumoj</>,
    artists: <>Artistoj</>,
    noResults: <>Neniuj rezultoj trovitaj. Provu enigi alian demandon.</>,
  },
  topicCard: {
    details: <>Detaloj</>,
    popularity: <>Populareco</>,
    track: <>Kanto</>,
    release: <>Albumo</>,
    artist: <>Artisto</>,
    artwork: "Artaĵo",
    by: <>De</>,
    artistString: artistString,
  },
  navbar: {
    search: "Serĉu",
    home: "Hejmo",
    recommendations: "Rekomendoj",
    user: "Uzanto",
    login: <>Ensaluti</>,
    register: <>Registru</>,
    logout: <>Elsaluti</>,
    profile: <>Profilo</>,
  },
  settings: {
    settings: "Agordoj",
  },
  themeSwitch: {
    theme: <>Temo</>,
    dark: <>Malhela temo</>,
    light: <>Hela temo</>,
    oled: <>OLEDa temo</>,
  },
  languageSwitch: {
    language: <>Lingvo</>,
  },
  footer: {
    copyright: <>Copyright © 2023 Muziko - Iuj rajtoj rezervitaj</>,
    about: <>Pri Muziko</>,
    legal: <>Jura Informo</>,
    spotifyAttribution: (
      <>
        Serĉa kaj metadatuma funkcieco estas provizita ĝentile de Spotify.
        Enhavo ĉiuj apartenas al artistoj kaj respektivaj eldonejoj. Ĉiuj rajtoj
        al iliaj respektivaj posedantoj.
      </>
    ),
  },
  topicDetails: {
    details: <>Detaloj</>,
    popularity: <>Populareco</>,
    track: <>Kanto</>,
    release: <>Albumo</>,
    artist: <>Artisto</>,
    artwork: "Artaĵo",
    loading: <>Ŝarĝante...</>,
    loadError: <>Eraro dum ŝarĝo - ĉu la URL estas ĝusta?</>,
    parseError: <>Nevalida URL</>,
    viewOnSpotify: (topicName: string) => (
      <>
        Rigardu <i>{topicName}</i> ĉe Spotify
      </>
    ),
    explicit: <>Eksplicita</>,
    artistString: artistString,
    releasedOn: <>Liberigita sur</>,
    trackNumber: <>Kanto nombro</>,
    by: <>De</>,
    length: <>Longo</>,
    followers: <>Sekvantoj</>,
    genres: <>Ĝenroj</>,
  },
  error: {
    fourOhFour: <>Eraro okazis! Ĉi tiu URL ne ekzistas.</>,
  },
  commentsSection: {
    comments: <>Komentoj</>,
    comment: <>Komento</>,
    leaveAComment: "Leave a comment",
    loginToComment: "Ensalutu por lasi komenton",
    noPosts: <>Ankoraŭ neniuj afiŝoj!</>,
  },
  recommendations: {
    recommendations: "Rekomendoj",
    noResults: <>Neniuj rezultoj trovitaj. Provu elekti malsamajn ĝenrojn.</>,
    emptyQuery: <>Elektu kelkajn ĝenrojn por komenci.</>,
    available: <>Disponeblaj Ĝenroj</>,
    selected: <>Elektitaj Ĝenroj</>,
    error: <>Neniuj rezultoj trovitaj. Provu elekti malsamajn ĝenrojn.</>,
  },
  legal: {
    legalInfo: "Jura Informo",
    prose: (
      <>
        <h1>Leĝaj Informoj</h1>
        <h2>Atribuoj</h2>
        <p>
          La serĉo kaj datumfunkcieco de Muziko uzas tiun de {spotifyLink}{" "}
          {spotifyAPILink}. Muziko ne pretendas pri kopirajto de ajnaj datumoj
          por kiu la kreinto estas Spotify aŭ por kiu la permesilo estas
          nuntempe tenita de Spotify - video, audio, metadatenoj, rekomendoj, aŭ
          alie. La komentoj gastigitaj ĉe Muziko neniel estas aprobitaj de
          Spotify, kaj ne devus esti konsiderata kiel aliĝita al Spotify iel
          ajn.
        </p>
        <p>
          Muziko estas kreita per {reactLink}, kun {tailwindLink} kaj{" "}
          {daisyLink} komponantoj. La nekredebla ondo/gradienta efiko sur la
          bonvena paĝo estas malklarigita versio de tiu ĉe {stripeLink}
          la retejo de. Plena kredito por la malklarigado iras al Kevin Hufnagl,
          lia blogaĵo pri la efiko troviĝas ĉe lia {kevinLink}.
        </p>
        <h2>Privateco</h2>
        <p>
          Muziko uzas retumilajn kuketojn por konservi viajn agordajn preferojn.
          Ĉi tio inkluzivas vian elektitan temon kaj lingvon. Ĉi tiuj kuketoj
          neniam forlasas la retumilo.
        </p>
        <p>
          Muziko uzas Firestore-datumbazon por la komentoj. Neniu persona
          informoj estas konservitaj krom retpoŝtadresoj de uzantoj.
        </p>
        <p>
          Muziko estas tute malfermfonta laŭ la permesilo GPL-versio 3, krom por
          iuj Firebase-funkcioj por la backend. Ĉi tiuj estas uzataj por
          ĝisdatigi la retejo-statistikoj kaj krei prokurilon por la Spotify
          API, kaj estas konservita fermita fonto por certigi la sekurecon de la
          API-ŝlosilo. Fontkodo por la projekto troviĝas ĉe {muzikoGithubLink}.
        </p>
      </>
    ),
  },
  login: {
    login: "Ensaluti",
    email: <>Retpoŝto</>,
    password: <>Pasvorto</>,
    newToMuziko: <>Nova ĉe Muziko?</>,
    register: <>Registru</>,
    loginButton: <>Ensaluti</>,
  },
  register: {
    register: "Registru",
    email: <>Retpoŝto</>,
    password: <>Pasvorto</>,
    displayName: <>Montra nomo</>,
    haveAnAccount: <>Havas konton?</>,
    login: <>Ensaluti</>,
  },
};
