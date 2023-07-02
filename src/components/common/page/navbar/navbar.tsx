import {
  UserIcon,
  ListBulletIcon,
  MusicalNoteIcon,
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
      <div className="flex-none">
        <NavLink
          to="/"
          className="hidden sm:inline-flex btn btn-ghost normal-case text-xl"
        >
          Muziko
        </NavLink>
        <NavLink
          to="/"
          className="inline-flex sm:hidden btn btn-ghost btn-circle normal-case text-xl"
        >
          M
        </NavLink>
      </div>
      <div>
        <div>
          <NavLink
            to={{ pathname: "/recommend" }}
            className="btn btn-ghost btn-circle rounded-full"
          >
            <MusicalNoteIcon className="w-8" />
          </NavLink>
        </div>
        <NavLink
          to={{ pathname: "/search" }}
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
          disabled={location.pathname === "/search"}
          onChange={(e) => setNavbarSearch(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              if (location.pathname === "/search") {
                setSearchParams(`query=${encodeURIComponent(navbarSearch)}`);
              } else {
                navigate({
                  pathname: "/search",
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
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div
            className={`w-10 rounded-full outline ${
              user ? "outline-primary" : "outline-neutral"
            }`}
          >
            <UserIcon />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          {user ? (
            <Fragment>
              <li>
                <NavLink to="/profile">Profile</NavLink>
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
                  Logout
                </button>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <NavLink to="/login" className="">
                  Log in
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="">
                  Register
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}
