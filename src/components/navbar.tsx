import { UserIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ThemeSwitch from "./theme-switch";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [navbarSearch, setNavbarSearch] = useState("");
  const user = useSelector((state: RootState) => state.auth).user;
  return (
    <div className="navbar bg-base-300 gap-2">
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
        <NavLink
          to={{ pathname: "/search", search: "" }}
          className="btn btn-ghost btn-circle rounded-full"
        >
          <ListBulletIcon className="w-8" />
        </NavLink>
      </div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 input input-bordered w-full "
          onChange={(e) => setNavbarSearch(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter")
              navigate({ pathname: "/search", search: navbarSearch });
          }}
        />
      </div>
      <div>
        <ThemeSwitch />
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
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
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
            </Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}
