import Navbar from "../navbar";

export default function Page(props: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1">{props.children}</div>
    </div>
  );
}
