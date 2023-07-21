import { Language } from "./schema";

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
    and: "et",
  },
  navbar: {
    search: "Recherche",
    home: "Accueil",
    recommendations: "Recommandations",
    browse: "Parcourir",
    settings: "Paramètres",
    user: "Utilisateur",
    login: <>Connexion</>,
    register: <>Enregister</>,
    logout: <>Déconnexion</>,
    profile: <>Profil</>,
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
    and: "et",
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
    noResults: (
      <>
        Aucun résultat n'a été trouvé. Essayez de sélectionner d'autres genres.
      </>
    ),
    emptyQuery: <>Sélectionnez quelques genres pour commencer.</>,
    update: <>Actualise</>,
    available: <>Genres Disponibles</>,
    selected: <>Genres Sélectionnés</>,
    error: (
      <>
        Aucun résultat n'a été trouvé. Essayez de sélectionner d'autres genres.
      </>
    ),
  },
};
