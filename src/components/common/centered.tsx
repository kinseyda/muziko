export default function Centered(props: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex flex-col content-center justify-center items-center">
      {props.children}
    </div>
  );
}
