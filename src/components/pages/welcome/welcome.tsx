import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import NavPage from "../../common/page/nav-page";
import Centered from "../../common/centered";
import { NavLink } from "react-router-dom";
import { languages } from "../../../data/text/languages";
import Stats from "./stats";
import Background from "./background/background";
import { routes } from "../../../routes";

export default function Welcome() {
  const user = useSelector((state: RootState) => state.auth.user);
  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].welcome;
  return (
    <NavPage title="">
      <Background>
        <Centered>
          <div className="m-16 text-primary-content">
            {user ? (
              <h2 className="text-3xl font-bold">
                {text.userWelcome}, {user?.email}{" "}
              </h2>
            ) : (
              <div className="items-center text-center flex flex-col gap-10">
                <h2 className="text-5xl">{text.mainSlogan}</h2>
                <div>
                  <NavLink
                    to={routes.register.paths[languageKey]}
                    className="btn btn-info rounded-full btn-lg "
                  >
                    {text.joinButton}
                  </NavLink>
                </div>
                <p className="max-w-lg text-lg">
                  <i>Muziko</i> is a platform that understands how much you love
                  music, and how much you need to tell people about it. Using{" "}
                  <i>Muziko</i>, you can learn more about an artist, their
                  releases, or their tracks, and comment on them to a community
                  of other music lovers.
                  <br />
                  <b>Discover your new favourite song today.</b>
                </p>
                <Stats />
                <NavLink
                  to={routes.about.paths[languageKey]}
                  className="btn rounded-full btn-info"
                >
                  Learn more about <i>Muziko</i>
                </NavLink>
              </div>
            )}
          </div>
        </Centered>
      </Background>
    </NavPage>
  );
}
