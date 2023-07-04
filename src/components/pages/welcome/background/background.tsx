import "./background.css";

export default function Background(props: { children: React.ReactNode }) {
  return (
    <div
      id="gradient-background"
      className="bg-gradient-to-r from-secondary via-primary-focus to-info"
    >
      {props.children}
    </div>
  );
}
