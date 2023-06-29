import Footer from "./footer";
import Navbar from "./navbar/navbar";
import Page from "./page";

export default function NavPage(props: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Page title={props.title}>
      <div className="min-h-screen h-full w-screen flex flex-col z-0">
        <Navbar />
        <div className="grow">{props.children}</div>
        <Footer />
      </div>
    </Page>
  );
}
