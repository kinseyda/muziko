import { Gradient } from "./gradient";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import { ThemeKey } from "../../../../../settingsSlice";
import { themes } from "../../../../../themes";

export default function WaveBackground(props: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.settings.theme);

  useEffect(() => {
    const canvas = document.getElementById("gradient-canvas")!!;
    if (theme) {
      canvas.style.setProperty(
        "--gradient-color-1",
        themes[theme as ThemeKey].primary
      );
      canvas.style.setProperty(
        "--gradient-color-2",
        themes[theme as ThemeKey].info
      );
      canvas.style.setProperty(
        "--gradient-color-3",
        themes[theme as ThemeKey].error
      );
      canvas.style.setProperty(
        "--gradient-color-4",
        themes[theme as ThemeKey].secondary
      );
    } else {
      // Default colors from the example code
      canvas.style.setProperty("--gradient-color-1", "#6ec3f4");
      canvas.style.setProperty("--gradient-color-2", "#3a3aff");
      canvas.style.setProperty("--gradient-color-3", "#ff61ab");
      canvas.style.setProperty("--gradient-color-4", "#e63946");
    }

    var gradient = new Gradient() as any;
    gradient.initGradient("#gradient-canvas");
  }, [theme]);
  return (
    <div className="h-full">
      <canvas
        id="gradient-canvas"
        className="absolute bottom-0 -z-50 h-full w-full bg-gradient-to-r from-secondary via-primary-focus to-info"
      />
      {props.children}
    </div>
  );
}
