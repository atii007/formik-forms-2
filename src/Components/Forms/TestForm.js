import React from "react";
import { Form, Formik } from "formik";

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values, onSubmitProp) => {
  console.log("Form Data", values);
  onSubmitProp.resetForm();
};
const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Required E-mail";
  }
  if (!values.password) {
    errors.password = "Password Required";
  }

  return errors;
};

function TestForm() {
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validate,
  //   });

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default TestForm;
