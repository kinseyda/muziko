import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function Welcome() {
  const user = useSelector((state: RootState) => state.auth).user;
  return <div>welcome {user?.email}</div>;
}
