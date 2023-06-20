import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Page from "../../page/page";

export default function Welcome() {
  const user = useSelector((state: RootState) => state.auth).user;
  return <Page>welcome {user?.email}</Page>;
}
