import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../features/users/usersSlice";
import { useDispatch } from "react-redux";

function LearnForm() {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Nama tidak boleh kosong"),
    email: Yup.string()
      .email("Format email salah")
      .required("Email tidak boleh kosong"),
    password: Yup.string()
      .min(3, "Password haris lebih dari 3 karakter")
      .required("Password tidak boleh kosong"),
  });
  return (
    <div className="w-1/3 mx-auto my-9 bg-blue-100 p-6 rounded-md">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(value) => {
          dispatch(registerUser(value));
        }}
      >
        {(props) => {
          console.log(props);
          return (
            <div>
              <p className="text-xl font-bold text-center mb-6">
                Page Register
              </p>
              <Form>
                <div className="flex flex-col mb-6">
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" class="border-2" />
                  <ErrorMessage
                    component="div"
                    name="name"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <label htmlFor="email">Email</label>
                  <Field type="text" name="email" class="border-2" />
                  <ErrorMessage
                    component="div"
                    name="email"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <label htmlFor="password">Password</label>
                  <Field type="password" name="password" class="border-2" />
                  <ErrorMessage
                    component="div"
                    name="password"
                    style={{ color: "red" }}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 py-2 px-3 rounded-md mt-6 text-white font-bold"
                >
                  Submit
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default LearnForm;
