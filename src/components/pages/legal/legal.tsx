import Centered from "../../common/centered";
import NavPage from "../../common/page/nav-page";

export default function Legal() {
  return (
    <NavPage title="Legal Info">
      <Centered>
        <p className="text-3xl font-bold">Legal Information</p>
        <div className="m-3 max-w-lg">
          <p className="">
            <i>Muziko</i>'s search and data functionality utilizes{" "}
            <a href="https://open.spotify.com/" className="link">
              Spotify
            </a>
            's{" "}
            <a
              href="https://developer.spotify.com/documentation/web-api"
              className="link"
            >
              API
            </a>
            . The comments hosted on <i>Muziko</i> are not in any way endorsed
            by Spotify, and should not be construed as being affiliated with
            Spotify in any way.
          </p>
          <br />
          <p>
            <i>Muziko</i> is entirely open-source under the GPL version 3
            license, except for a Firebase proxy function to ensure the security
            of Spotify API keys. Source code can be found on{" "}
            <a href="https://github.com/kinseyda/muziko" className="link">
              GitHub
            </a>
            .
          </p>
        </div>
      </Centered>
    </NavPage>
  );
}
