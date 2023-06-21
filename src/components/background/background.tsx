import "./background.css";

export default function Background(props: { children: React.ReactNode }) {
  return (
    <div id="gradient-background" className="h-full w-full">
      {props.children}
    </div>
  );
}
