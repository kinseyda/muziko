import {
  UserIcon,
  ListBulletIcon,
  MusicalNoteIcon,
  PowerIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import ThemeSwitch from "./theme-switch";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase";
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Fragment, useState } from "react";
import SettingsButton from "./settings-button";
import { languages } from "../../../../data/text/languages";
import { routes } from "../../../../routes";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [navbarSearch, setNavbarSearch] = useState("");
  const user = useSelector((state: RootState) => state.auth.user);
  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].navbar;
  return (
    <div className="navbar bg-base-300 gap-2 z-10">
      <div className="flex-none tooltip tooltip-bottom" data-tip="Home">
        <NavLink
          to="/"
          className="hidden md:inline-flex btn btn-ghost normal-case text-xl"
        >
          Muziko
        </NavLink>
        <NavLink
          to="/"
          className="hidden sm:inline-flex md:hidden btn btn-ghost btn-circle normal-case text-xl"
        >
          M
        </NavLink>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Recommendations">
        <NavLink
          to={{ pathname: routes.recommend.paths[languageKey] }}
          className="btn btn-ghost btn-circle rounded-full"
        >
          <MusicalNoteIcon className="w-8" />
        </NavLink>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Browse">
        <NavLink
          to={{ pathname: routes.search.paths[languageKey] }}
          className="btn btn-ghost btn-circle rounded-full"
        >
          <ListBulletIcon className="w-8" />
        </NavLink>
      </div>
      <div className="flex-1">
        <input
          type="text"
          name="navbarSearch"
          placeholder={text.search}
          className="flex-1 input input-bordered w-full"
          disabled={location.pathname === routes.search.paths[languageKey]}
          onChange={(e) => setNavbarSearch(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              if (location.pathname === routes.search.paths[languageKey]) {
                setSearchParams(`query=${encodeURIComponent(navbarSearch)}`);
              } else {
                navigate({
                  pathname: routes.search.paths[languageKey],
                  search: `query=${encodeURIComponent(navbarSearch)}`,
                });
              }
            }
          }}
        />
      </div>
      <div>
        <SettingsButton />
      </div>
      <div className="dropdown dropdown-end ">
        <div className="tooltip tooltip-bottom" data-tip="User">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div
              className={`w-10 rounded-full outline ${
                user ? "outline-primary" : "outline-neutral"
              }`}
            >
              <UserIcon />
            </div>
          </label>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-md dropdown-content bg-base-200 rounded-box w-64"
        >
          {user ? (
            <>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "" : ""
                  }
                >
                  <UserIcon className="w-4" /> Profile
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() =>
                    signOut(auth)
                      .then(() => navigate("/"))
                      .catch(() =>
                        console.log(
                          "Error when signing out - how did this happen?"
                        )
                      )
                  }
                >
                  <ArrowLeftOnRectangleIcon className="w-4" /> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={routes.login.paths[languageKey]} className="">
                  <ArrowRightOnRectangleIcon className="w-4" /> Log in
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.register.paths[languageKey]} className="">
                  <UserPlusIcon className="w-4" /> Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
