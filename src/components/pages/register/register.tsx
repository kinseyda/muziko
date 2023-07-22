import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { XCircleIcon } from "@heroicons/react/24/outline";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import UserForm from "../../common/user-form";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { routes } from "../../../routes";
import { F_User } from "../../../data/schema/firebase";
import { doc, setDoc } from "firebase/firestore";
import { languages } from "../../../data/text/languages";

const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  displayName: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export default function Login() {
  const navigate = useNavigate();
  const [backendError, setBackendError] = useState("");
  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].register;
  return (
    <UserForm title={text.register}>
      <Formik
        initialValues={{ email: "", password: "", displayName: "" }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          createUserWithEmailAndPassword(
            auth,
            values["email"],
            values["password"]
          )
            .then((uc) => {
              setDoc(doc(db, "users", uc.user.uid), {
                displayName: values.displayName,
              } as F_User);
              setSubmitting(false);
              navigate("/");
            })
            .catch(() => {
              setSubmitting(false);
              setBackendError("Invalid email / password");
            });
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div className="">
              <div className="form-control w-full max-w-xs">
                <label htmlFor="email" className="label">
                  <span className="label-text">{text.email}</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  className={`input input-bordered w-full max-w-xs ${
                    "email" in errors && "email" in touched ? "input-error" : ""
                  }`}
                />
                <label className="label">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="label-text-alt text-error -mb-4"
                  />
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label htmlFor="displayName" className="label">
                  <span className="label-text">{text.displayName}</span>
                </label>
                <Field
                  type="displayName"
                  name="displayName"
                  className={`input input-bordered w-full max-w-xs ${
                    "displayName" in errors && "displayName" in touched
                      ? "input-error"
                      : ""
                  }`}
                />
                <label className="label">
                  <ErrorMessage
                    name="displayName"
                    component="div"
                    className="label-text-alt text-error -mb-4"
                  />
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label htmlFor="password" className="label">
                  <span className="label-text">{text.password}</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  className={`input input-bordered w-full max-w-xs ${
                    "password" in errors && "password" in touched
                      ? "input-error"
                      : ""
                  }`}
                />
                <label className="label">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="label-text-alt text-error -mb-4"
                  />
                </label>
              </div>
              <div className="card-actions justify-between align-middle items-center">
                <span>
                  {text.haveAnAccount}{" "}
                  <NavLink
                    to={routes.login.paths[languageKey]}
                    className="link link-primary"
                  >
                    {text.login}
                  </NavLink>
                </span>
                <div className="w-full flex justify-end">
                  <button
                    className={`btn ${
                      Object.keys(errors).length || isSubmitting
                        ? "btn-disabled"
                        : "btn-primary"
                    }`}
                  >
                    {text.register}
                  </button>
                </div>
              </div>
              {backendError ? (
                <div className="my-5">
                  <div className="alert alert-error">
                    <XCircleIcon className="shrink-0 h-6 w-6"></XCircleIcon>
                    <span>{backendError}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </Form>
        )}
      </Formik>
    </UserForm>
  );
}
