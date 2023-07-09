import "./flat-background.css";

export default function FlatBackground(props: { children: React.ReactNode }) {
  return (
    <div
      id="flat-background"
      className="h-full bg-gradient-to-r from-secondary via-primary-focus to-info"
    >
      {props.children}
    </div>
  );
}
