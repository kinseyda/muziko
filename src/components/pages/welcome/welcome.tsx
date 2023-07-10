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
          <div className="p-16 text-primary-content">
            {user ? (
              <div className="prose">
                <h2 className=" text-primary-content">
                  {text.userWelcome}, {user?.displayName}
                </h2>
              </div>
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
                <p className="max-w-lg text-lg">{text.blurb}</p>
                <Stats />
                <NavLink
                  to={routes.about.paths[languageKey]}
                  className="btn rounded-full btn-info"
                >
                  {text.learnButton}
                </NavLink>
              </div>
            )}
          </div>
        </Centered>
      </Background>
    </NavPage>
  );
}
