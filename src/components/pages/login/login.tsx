import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import Centered from "../../centered";
import { XCircleIcon } from "@heroicons/react/24/outline";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

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
    <div className="h-full bg-base-300">
      <Centered>
        <h2 className="mb-16 font-bold text-3xl">Muziko</h2>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Log in</h2>
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
                          "email" in errors && "email" in touched
                            ? "input-error"
                            : ""
                        }`}
                      />
                      <label className="label">
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="label-text-alt text-error -my-2"
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
                          className="label-text-alt text-error -my-2"
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
          </div>
        </div>
      </Centered>
    </div>
  );
}
