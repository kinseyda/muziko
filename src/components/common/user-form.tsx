import Centered from "./centered";
import Page from "./page/page";
import SettingsButton from "./settings-button";

export default function UserForm(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Page title={props.title}>
      <div className="absolute top-0 right-0 m-5">
        <SettingsButton />
      </div>
      <div className="h-full bg-base-200">
        <Centered>
          <div className="prose">
            <h2 className="mb-16 ">Muziko</h2>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className="card-title">{props.title}</h1>
              {props.children}
            </div>
          </div>
        </Centered>
      </div>
    </Page>
  );
}
