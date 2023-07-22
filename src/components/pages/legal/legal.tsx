import { useSelector } from "react-redux";
import { languages } from "../../../data/text/languages";
import { RootState } from "../../../store";
import Centered from "../../common/centered";
import NavPage from "../../common/page/nav-page";

export default function Legal() {
  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].legal;
  return (
    <NavPage title={text.legalInfo}>
      <Centered>
        <div className="prose">
          <div className="m-3 max-w-lg ">{text.prose}</div>
        </div>
      </Centered>
    </NavPage>
  );
}
