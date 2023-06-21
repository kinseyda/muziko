import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Page from "../../page/page";
import Centered from "../../centered";
import { NavLink } from "react-router-dom";

export default function Welcome() {
  const user = useSelector((state: RootState) => state.auth).user;
  return (
    <Page>
      <Centered>
        {user ? (
          <h2>Welcome {user?.email} </h2>
        ) : (
          <div className="text-center flex flex-col gap-10 ">
            <div className="text-5xl">
              <i>Muziko</i> brings people <br />
              <b>together</b>
            </div>
            <div>
              <NavLink to="/register" className="link text-primary">
                Join the community today
              </NavLink>
            </div>
          </div>
        )}
      </Centered>
    </Page>
  );
}
