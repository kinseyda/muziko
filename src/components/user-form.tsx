import Centered from "./centered";

export default function UserForm(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-base-200">
      <Centered>
        <h2 className="mb-16 font-bold text-3xl">Muziko</h2>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            {props.children}
          </div>
        </div>
      </Centered>
    </div>
  );
}
