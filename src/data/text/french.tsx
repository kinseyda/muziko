import {
  spotifyLink,
  spotifyAPILink,
  reactLink,
  tailwindLink,
  daisyLink,
  stripeLink,
  kevinLink,
  muzikoGithubLink,
} from "./external-links";
import { Language } from "./schema";

const artistString = (artists: string[]) => {
  if (artists.length === 1) {
    return <>{artists[0]}</>;
  }
  let res = `${artists[0]}`;
  for (let i = 1; i < artists.length; i++) {
    if (i == artists.length - 1) {
      res = `${res} et ${artists[i]}`;
    } else {
      res = `${res}, ${artists[i]}`;
    }
  }
  return <>{res}</>;
};

export const french: Language = {
  code: "fr",
  welcome: {
    mainSlogan: (
      <>
        <i>Muziko</i> rapproche les gens
        <br />
        <b>ensemble</b>
      </>
    ),
    joinButton: <>Rejoignez la communauté aujourd'hui</>,
    learnButton: (
      <>
        En savoir plus sur <i>Muziko</i>
      </>
    ),
    userWelcome: <>Bienvenue</>,
    blurb: (
      <>
        <i>Muziko</i> est une plateforme qui comprend à quel point vous aimez la
        musique et à quel point vous avez besoin d'en parler autour de vous. En
        utilisant <i>Muziko</i>, vous pouvez en apprendre plus sur un artiste,
        ses sorties ou ses morceaux, et les commenter à une communauté d'autres
        amateurs de musique.
        <br />
        <b>Découvrez votre nouvelle chanson préférée dès aujourd'hui.</b>
      </>
    ),
  },
  stats: {
    totalUsers: <>Total des utilisateurs</>,
    conversations: <>Conversations</>,
    discoveries: <>Découvertes en attente</>,
  },
  search: {
    search: "Recherche",
    searchFor: <>Recherche</>,
    emptyQuery: (
      <>Saisissez une requête de recherche pour afficher certains résultats.</>
    ),
    emptyQueryTitle: <>Aucun</>,
    queryLabel: <>Requête de recherche</>,
    queryPlaceholder: "Requête de recherche",
    include: <>Inclure</>,
    tracks: <>Pistes</>,
    releases: <>Albums</>,
    artists: <>Artistes</>,
    noResults: (
      <>Aucun résultat n'a été trouvé. Essayez de saisir une autre requête.</>
    ),
  },
  topicCard: {
    details: <>Détails</>,
    popularity: <>Popularité</>,
    track: <>Chanson</>,
    release: <>Album</>,
    artist: <>Artiste</>,
    artwork: "Ouvrages d'art",
    by: <>Par</>,
    artistString: artistString,
  },
  navbar: {
    search: "Recherche",
    home: "Accueil",
    recommendations: "Recommandations",
    user: "Utilisateur",
    login: <>Connexion</>,
    register: <>Enregister</>,
    logout: <>Déconnexion</>,
    profile: <>Profil</>,
  },
  settings: {
    settings: "Paramètres",
  },
  themeSwitch: {
    theme: <>Thème</>,
    dark: <>Thème de la noir</>,
    light: <>Thème de la lumière</>,
    oled: <>Thème de l'OLED</>,
  },
  languageSwitch: {
    language: <>Langue</>,
  },
  footer: {
    copyright: <>Copyright © 2023 Muziko - Certains droits réservés</>,
    about: <>À propos de Muziko</>,
    legal: <>Informations juridiques</>,
    spotifyAttribution: (
      <>
        Les fonctions de recherche et de métadonnées sont fournies par Spotify.
        Le contenu est la propriété des artistes et éditeurs respectifs. Tous
        les droits leur appartiennent.
      </>
    ),
  },
  topicDetails: {
    details: <>Détails</>,
    popularity: <>Popularité</>,
    track: <>Chanson</>,
    release: <>Album</>,
    artist: <>Artiste</>,
    artwork: "Ouvrages d'art",
    loading: <>Chargement...</>,
    loadError: <>Erreur lors du chargement - l'URL est-elle correcte ?</>,
    parseError: <>URL invalide</>,
    viewOnSpotify: (topicName: string) => (
      <>
        Voir <i>{topicName}</i> sur Spotify
      </>
    ),
    explicit: <>Explicite</>,
    artistString: artistString,
    releasedOn: <>Publié sur</>,
    trackNumber: <>Numéro de piste</>,
    by: <>Par</>,
    length: <>Durée</>,
    followers: <>Suiveurs</>,
    genres: <>Genres</>,
  },
  error: {
    fourOhFour: <>Une erreur s'est produite ! Cette URL n'existe pas.</>,
  },
  commentsSection: {
    comments: <>Commentaires</>,
    comment: <>Commentaire</>,
    leaveAComment: "Laisser un commentaire",
    loginToComment: "Se connecter pour laisser un commentaire",
    noPosts: <>Aucun message n'a encore été publié !</>,
  },
  recommendations: {
    recommendations: "Recommandations",
    noResults: (
      <>
        Aucun résultat n'a été trouvé. Essayez de sélectionner d'autres genres.
      </>
    ),
    emptyQuery: <>Sélectionnez quelques genres pour commencer.</>,
    available: <>Genres Disponibles</>,
    selected: <>Genres Sélectionnés</>,
    error: (
      <>
        Aucun résultat n'a été trouvé. Essayez de sélectionner d'autres genres.
      </>
    ),
  },
  legal: {
    legalInfo: "Informations juridiques",
    prose: (
      <>
        <h1>Informations juridiques</h1>
        <h2>Attributions</h2>
        <p>
          La fonctionnalité de recherche et de données de Muziko utilise{" "}
          {spotifyLink}'s {spotifyAPILink}. Muziko ne revendique aucun droit
          d'auteur sur les données dont le créateur est Spotify ou dont la
          licence est détenue par Spotify - vidéo Spotify - vidéo, audio,
          métadonnées, recommandations ou autres. recommandations ou autres. Les
          commentaires hébergés sur Muziko ne sont en aucun cas approuvés par
          Spotify. par Spotify et ne doivent pas être interprétés comme étant
          affiliés à Spotify de quelque manière que ce soit. Spotify de quelque
          manière que ce soit.
        </p>
        <p>
          Muziko est créé en utilisant {reactLink}, avec les composants{" "}
          {tailwindLink} et {daisyLink}. L'incroyable effet de vague/gradient
          sur la page d'accueil est une version désobfusquée de celui du site
          web de {stripeLink}'s website. Le mérite de la désobfuscation revient
          à Kevin Hufnagl, son billet de blog sur l'effet se trouve sur son{" "}
          {kevinLink}.
        </p>
        <h2>Confidentialité</h2>
        <p>
          Muziko utilise des cookies de navigateur pour enregistrer vos
          préférences en matière de paramètres. Cela comprend le thème et la
          langue que vous avez choisis. Cela inclut le thème et la langue que
          vous avez choisis. Ces cookies ne quittent jamais le navigateur.
        </p>
        <p>
          Muziko utilise une base de données Firestore pour les commentaires.
          Aucune information aucune information personnelle n'est stockée, à
          l'exception de l'adresse électronique des utilisateurs.
        </p>
        <p>
          Muziko est entièrement open-source sous licence GPL version 3, à
          l'exception de de quelques fonctions Firebase pour le backend.
          Celles-ci sont utilisées pour mettre à jour statistiques du site et
          pour créer un proxy pour l'API Spotify. sont maintenues fermées pour
          assurer la sécurité de la clé de l'API. Le code source du projet se
          trouve sur {muzikoGithubLink}.
        </p>
      </>
    ),
  },
  login: {
    login: "Connexion",
    email: <>Courriel</>,
    password: <>Mot de passe</>,
    newToMuziko: <>Nouveau sur Muziko ?</>,
    register: <>Enregister</>,
    loginButton: <>Connexion</>,
  },
  register: {
    register: "Enregister",
    email: <>Courriel</>,
    password: <>Mot de passe</>,
    displayName: <>Nom d'affichage</>,
    haveAnAccount: <>Vous avez un compte ?</>,
    login: <>Connexion</>,
  },
};
