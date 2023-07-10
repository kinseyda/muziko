import {
  UserIcon as UserIconOutlined,
  ListBulletIcon,
  MusicalNoteIcon,
  PowerIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { UserIcon as UserIconFilled } from "@heroicons/react/24/solid";
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
import { languages } from "../../../../data/text/languages";
import { routes } from "../../../../routes";
import LanguageSwitch from "./language-switch";

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
      <div className="flex-none tooltip tooltip-bottom" data-tip={text.home}>
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
      <div className="tooltip tooltip-bottom" data-tip={text.recommendations}>
        <NavLink
          to={{ pathname: routes.recommend.paths[languageKey] }}
          className="btn btn-ghost btn-circle rounded-full"
        >
          <MusicalNoteIcon className="w-8" />
        </NavLink>
      </div>
      <div className="tooltip tooltip-bottom" data-tip={text.browse}>
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
          disabled={Object.values(routes.search.paths).includes(
            location.pathname
          )}
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
        <div className="dropdown dropdown-end ">
          <div className="tooltip tooltip-bottom" data-tip={text.settings}>
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar transition transform focus:rotate-[30deg] "
            >
              <div className={`w-10 rounded-full `}>
                <Cog6ToothIcon />
              </div>
            </label>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-md dropdown-content bg-base-200 rounded-box w-64"
          >
            <li>
              <ThemeSwitch />
            </li>
            <li>
              <LanguageSwitch />
            </li>
          </ul>
        </div>
      </div>
      <div className="dropdown dropdown-end ">
        <div className="tooltip tooltip-bottom" data-tip={text.user}>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {user ? (
              <div className="w-10 rounded-full outline outline-primary">
                <UserIconFilled className="fill-primary" />
              </div>
            ) : (
              <div className="w-10 rounded-full outline outline-neutral">
                <UserIconOutlined />
              </div>
            )}
          </label>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-md dropdown-content bg-base-200 rounded-box w-64"
        >
          {user ? (
            <>
              <li className="w-full">
                <span className="active w-full">
                  Logged in as:{" "}
                  <span className="truncate">{user.displayName}</span>
                </span>
              </li>
              <li>
                <NavLink
                  to={routes.profile.paths[languageKey]}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "" : ""
                  }
                >
                  <UserIconOutlined className="w-4" /> Profile
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
