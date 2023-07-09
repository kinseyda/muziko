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

// Used to make multiple paths acceptable, ie you can go to equivalent urls in both english and french
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
    paths: { English: "/topic", Français: "/TODO" },
    element: <TopicDetails />,
  },
  about: {
    paths: { English: "/about", Français: "/TODO" },
    element: <About />,
  },
  legal: {
    paths: { English: "/legal", Français: "/TODO" },
    element: <Legal />,
  },
  recommend: {
    paths: { English: "/recommend", Français: "/TODO" },
    element: <Recommendations />,
  },
  profile: {
    paths: { English: "/profile", Français: "/TODO" },
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
