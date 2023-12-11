import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Inavalid E-mail Format")
      .required("E-mail Required"),
    password: Yup.string().required("Password Required"),
  });
  const onSubmit = (values, onSubmitprops) => {
    console.log("Form Data", values);
    onSubmitprops.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="E-mail"
            />
            <FormikControl
              control="input"
              type="password"
              name="password"
              label="Password"
            />

            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
