import Navbar from "./navbar/navbar";

export default function Page(props: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex flex-col z-0">
      <Navbar></Navbar>
      <div className="grow">{props.children}</div>
    </div>
  );
}