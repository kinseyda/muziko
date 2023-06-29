import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Centered from "../../common/centered";
import NavPage from "../../common/page/nav-page";

export default function Error() {
  return (
    <NavPage title="Error">
      <Centered>
        <ExclamationTriangleIcon className="w-16 stroke-error" />
        <div>An error has occurred! This URL does not exist.</div>
      </Centered>
    </NavPage>
  );
}
