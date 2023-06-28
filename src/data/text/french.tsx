import { Language } from "./schema";

export const french: Language = {
  welcome: {
    mainSlogan: (
      <div>
        <i>Muziko</i> but in
        <br />
        <b>French</b>
      </div>
    ),
    joinButton: <span>Join the community today (in French)</span>,
    userWelcome: <span>Bienvenue</span>,
  },
  search: {
    searchFor: <span>Recherche</span>,
    emptyQuery: (
      <div>
        Saisissez une requête de recherche pour afficher certains résultats.
      </div>
    ),
  },
  topicCard: {
    details: <span>Détails</span>,
    popularity: <span>Popularité</span>,
    track: <span>Chanson</span>,
    release: <span>Album</span>,
    artist: <span>Artiste</span>,
    artwork: "Ouvrages d'art",
  },
  navbar: {
    search: "Recherche",
  },
  themeSwitch: {
    dark: <span>Thème de la noir</span>,
    light: <span>Thème de la lumière</span>,
  },
  topicDetails: {
    details: <span>Détails</span>,
    popularity: <span>Popularité</span>,
    track: <span>Chanson</span>,
    release: <span>Album</span>,
    artist: <span>Artiste</span>,
    artwork: "Ouvrages d'art",
    loading: <span>Chargement...</span>,
    loadError: <span>todo</span>,
    parseError: <span>todo</span>,
  },
};
