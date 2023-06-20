import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function Welcome() {
  const auth = useSelector((state: RootState) => state.firebase).auth;
  return <div>welcome {auth.currentUser?.email}</div>;
}
