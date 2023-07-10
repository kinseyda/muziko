import Centered from "./centered";
import Page from "./page/page";

export default function UserForm(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Page title={props.title}>
      <div className="h-full bg-base-200">
        <Centered>
          <div className="prose">
            <h2 className="mb-16 ">Muziko</h2>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{props.title}</h2>
              {props.children}
            </div>
          </div>
        </Centered>
      </div>
    </Page>
  );
}
