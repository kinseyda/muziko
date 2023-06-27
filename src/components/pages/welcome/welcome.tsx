import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Page from "../../common/page/page";
import Centered from "../../common/centered";
import { NavLink } from "react-router-dom";
import Background from "./background/background";
import { languages } from "../../../data/text/languages";

export default function Welcome() {
  const user = useSelector((state: RootState) => state.auth).user;
  const languageKey = useSelector(
    (state: RootState) => state.settings
  ).language;
  const text = languages[languageKey].welcomeText;
  return (
    <Page>
      <Background>
        <Centered>
          {user ? (
            <h2>Welcome {user?.email} </h2>
          ) : (
            <div className="text-center flex flex-col gap-10 ">
              <div className="text-5xl">{text.mainSlogan}</div>
              <div>
                <NavLink
                  to="/register"
                  className="btn rounded-full bg-base-100"
                >
                  {text.joinButton}
                </NavLink>
              </div>
            </div>
          )}
        </Centered>
      </Background>
    </Page>
  );
}
