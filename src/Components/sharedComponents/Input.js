import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field
        type="text"
        id={name}
        name={name}
        {...rest}
        placeholder="Enter your E-Mail"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
