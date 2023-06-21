import Navbar from "../navbar";

export default function Page(content: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1">{content.children}</div>
    </div>
  );
}
