import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Centered from "../../common/centered";
import NavPage from "../../common/page/nav-page";
import Background from "../welcome/background/background";
import { languages } from "../../../data/text/languages";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function Error() {
  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].error;
  return (
    <NavPage title="Error">
      <Background>
        <Centered>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <Centered>
                <ExclamationTriangleIcon className="w-16 stroke-error" />
                <div className="text-center">{text.fourOhFour}</div>
              </Centered>
            </div>
          </div>
        </Centered>
      </Background>
    </NavPage>
  );
}
