import Navbar from "../navbar";
import "./page.css";

export default function Page(content: { children: React.ReactNode }) {
  return (
    <div id="page-container" className="flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1">{content.children}</div>
    </div>
  );
}
