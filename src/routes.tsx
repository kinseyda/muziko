import { createHashRouter } from "react-router-dom";
import About from "./components/pages/about/about";
import Error from "./components/pages/error/error";
import Legal from "./components/pages/legal/legal";
import Login from "./components/pages/login/login";
import Recommendations from "./components/pages/recommend/recommend";
import Register from "./components/pages/register/register";
import Search from "./components/pages/search/search";
import TopicDetails from "./components/pages/topic-details/topic-details";
import Welcome from "./components/pages/welcome/welcome";
import Profile from "./components/pages/profile/profile";
import { LanguageKey } from "./data/text/languages";

interface RouteObj {
  paths: { [language in LanguageKey]: string };
  element: JSX.Element;
}

// Used to make multiple paths acceptable, ie you can go to equivalent urls in both English and French
// Actual page content bilingualism is handled by React on the page components themselves, to ensure that content layout remains the same and easily maintainable.
export const routes: { [routeName: string]: RouteObj } = {
  login: {
    paths: { English: "/login", Français: "/connexion" },
    element: <Login />,
  },
  register: {
    paths: { English: "/register", Français: "/enregister" },
    element: <Register />,
  },
  search: {
    paths: { English: "/search", Français: "/recherche" },
    element: <Search />,
  },
  topic: {
    paths: { English: "/topic", Français: "/sujet" },
    element: <TopicDetails />,
  },
  about: {
    paths: { English: "/about", Français: "/à-propos" },
    element: <About />,
  },
  legal: {
    paths: { English: "/legal", Français: "/légale" },
    element: <Legal />,
  },
  recommend: {
    paths: { English: "/recommendations", Français: "/recommandations" },
    element: <Recommendations />,
  },
  profile: {
    paths: { English: "/profile", Français: "/profil" },
    element: <Profile />,
  },
};

function flattenRoutesList(routes: {
  [routeName: string]: RouteObj;
}): { path: string; element: JSX.Element }[] {
  const flat: { path: string; element: JSX.Element }[] = [
    { path: "*", element: <Error /> },
    { path: "/", element: <Welcome /> },
  ];

  for (const routeName in routes) {
    const rO = routes[routeName];
    for (const language in rO.paths) {
      flat.push({
        path: rO.paths[language as LanguageKey],
        element: rO.element,
      });
    }
  }

  return flat;
}

export const router = createHashRouter(flattenRoutesList(routes));
