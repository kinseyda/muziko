import FlatBackground from "./flat-background/flat-background";
import WaveBackground from "./wave-background/wave-background";

function detectWebgl(): boolean {
  // Create canvas element. The canvas is not added to the
  // document itself, so it is never displayed in the
  // browser window.
  const canvas = document.createElement("canvas");

  // Get WebGLRenderingContext from canvas element.
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  return gl instanceof WebGLRenderingContext;
}
export default function Background(props: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      {detectWebgl() ? (
        <WaveBackground>{props.children}</WaveBackground>
      ) : (
        <FlatBackground>{props.children}</FlatBackground>
      )}
    </div>
  );
}
