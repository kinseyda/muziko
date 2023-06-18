import { NavLink } from "react-router-dom";

export default function Test2() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-primary">Button</button>
      <NavLink to="/test1" className="btn btn-primary">
        To test 1
      </NavLink>
    </div>
  );
}
