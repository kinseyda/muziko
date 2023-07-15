import Centered from "../../common/centered";
import NavPage from "../../common/page/nav-page";

export default function Legal() {
  return (
    <NavPage title="Legal Info">
      <Centered>
        <div className="prose">
          <div className="m-3 max-w-lg ">
            <h1>Legal Information</h1>
            <h2>Attributions</h2>
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
              . <i>Muziko</i> makes no claim to the copyright of any data for
              which the creator is Spotify or for which the license is currently
              held by Spotify - video, audio, metadata, recommendations, or
              otherwise. The comments hosted on <i>Muziko</i> are not in any way
              endorsed by Spotify, and should not be construed as being
              affiliated with Spotify in any way.
            </p>
            <p>
              <i>Muziko</i> is created using{" "}
              <a href="https://react.dev/" className="link">
                React
              </a>
              , with{" "}
              <a href="https://tailwindcss.com/" className="link">
                Tailwind CSS
              </a>{" "}
              and{" "}
              <a href="https://daisyui.com/" className="link">
                daisyUI
              </a>{" "}
              components. The incredible wave/gradient effect on the welcome
              page is a deobfuscated version of the one on{" "}
              <a href="stripe.com" className="link">
                Stripe
              </a>
              's website. Full credit for the deobfuscation goes to Kevin
              Hufnagl, his blog post on the effect can be found on his{" "}
              <a
                href="https://kevinhufnagl.com/how-to-stripe-website-gradient-effect/"
                className="link"
              >
                website
              </a>
              .
            </p>
            <h2>Privacy</h2>
            <p>
              <i>Muziko</i> uses browser cookies to store your settings
              preferences. This includes your chosen theme and language. These
              cookies never leave the browser.
            </p>
            <p>
              <i>Muziko</i> uses a Firestore database for the comments. No
              personal information is stored other than users' email addresses.
            </p>
            <p>
              <i>Muziko</i> is entirely open-source under the GPL version 3
              license, except for some Firebase functions for the backend. These
              are used to update the site statistics and to create a proxy for
              the Spotify API, and are kept closed source to ensure the security
              of the API key. Source code for the project can be found on{" "}
              <a href="https://github.com/kinseyda/muziko" className="link">
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </Centered>
    </NavPage>
  );
}
