import { NavLink } from "react-router-dom";

export default function Test1() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-primary">Button</button>
      <NavLink to="/test2" className="btn btn-primary">
        To test 2
      </NavLink>
    </div>
  );
}
