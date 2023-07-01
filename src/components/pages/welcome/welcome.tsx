import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import NavPage from "../../common/page/nav-page";
import Centered from "../../common/centered";
import { NavLink } from "react-router-dom";
import Background from "./background/background";
import { languages } from "../../../data/text/languages";

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
          <div className="m-16">
            {user ? (
              <h2 className="text-3xl font-bold">
                {text.userWelcome}, {user?.email}{" "}
              </h2>
            ) : (
              <div className="items-center text-center flex flex-col gap-10">
                <h2 className="text-5xl">{text.mainSlogan}</h2>
                <div>
                  <NavLink
                    to="/register"
                    className="btn rounded-full btn-primary "
                  >
                    {text.joinButton}
                  </NavLink>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit vitae eius, maxime aut non deleniti commodi quae dolor a
                  itaque, fugit neque similique, consequatur iusto illo! Maiores
                  aut voluptas eveniet.
                </p>
              </div>
            )}
          </div>
        </Centered>
      </Background>
    </NavPage>
  );
}
