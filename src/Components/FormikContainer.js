import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const radioOptions = [
    { key: "Select an option", value: "" },
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];
  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required!"),
    description: Yup.string().required("Required!"),
    selectOption: Yup.string().required("Required!"),
    radioOptions: Yup.string().required("Required!"),
  });
  const onSubmit = (values) => console.log("Form Data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            name="email"
            type="email"
            label="Email"
          />
          <FormikControl
            control="textarea"
            name="description"
            label="Description"
            type="text"
          />
          <FormikControl
            control="select"
            name="selectOption"
            label="Select A Topic "
            options={dropDownOptions}
          />
          <FormikControl
            control="radio"
            name="radioOptions"
            label="Radio Topic"
            options={radioOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
