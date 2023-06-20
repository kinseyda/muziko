import { useState } from "react";
import Input, { InputFields } from "../../input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

const fields: InputFields[] = [
  {
    id: "email",
    name: "email",
    labelFor: "email",
    labelText: "Email",
    placeholder: "user@muziko.com",
  },
  {
    id: "password",
    name: "password",
    labelFor: "password",
    labelText: "Password",
  },
];
let fieldsState: { [id: string]: string } = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: { target: { id: any; value: any } }) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  return (
    <div className="w-100 h-100 flex content-center justify-center">
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            customClass={""}
          />
        ))}
        <button
          className="btn btn-primary"
          onClick={() =>
            signInWithEmailAndPassword(
              auth,
              loginState["email"],
              loginState["password"]
            )
              .then(() => navigate("/"))
              .catch(() => console.log("bad credentials"))
          }
        >
          Log in
        </button>
        {Object.keys(loginState).map((x) => `${x}=>'${loginState[x]}'`)}
      </div>
    </div>
  );
}
