import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { XCircleIcon } from "@heroicons/react/24/outline";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import UserForm from "../../common/user-form";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export default function Login() {
  const navigate = useNavigate();
  const [backendError, setBackendError] = useState("");

  return (
    <UserForm title="Log in">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            signInWithEmailAndPassword(
              auth,
              values["email"],
              values["password"]
            )
              .then(() => {
                setSubmitting(false);
                navigate("/");
              })
              .catch(() => {
                setSubmitting(false);
                setBackendError("Invalid email / password");
              });
          }, 400);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div className="">
              <div className="form-control w-full max-w-xs">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
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
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
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
              <div className="card-actions justify-end">
                <button
                  className={`btn ${
                    Object.keys(errors).length || isSubmitting
                      ? "btn-disabled"
                      : "btn-primary"
                  }`}
                >
                  Log in
                </button>
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
