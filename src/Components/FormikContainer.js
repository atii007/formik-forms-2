import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkboxOption: [],
    birthDate: null,
  };

  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "option 1", value: "Option 1" },
    { key: "option 2", value: "Option 2" },
    { key: "option 3", value: "Option 3" },
  ];

  const radioOptions = [
    { key: "option 1", value: "rOption 1" },
    { key: "option 2", value: "rOption 2" },
    { key: "option 3", value: "rOption 3" },
  ];

  const checkboxOptions = [
    { key: "option 1", value: "cOption 1" },
    { key: "option 2", value: "cOption 2" },
    { key: "option 3", value: "cOption 3" },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().required("Required!"),
    description: Yup.string().required("Required!"),
    selectOption: Yup.string().required("Required!"),
    radioOptions: Yup.string().required("Required!"),
    checkboxOption: Yup.array()
      .min(1, "Select at least one option")
      .required("Required"),
    birthDate: Yup.date().required("Required"),
  });
  const onSubmit = (values) => console.log("Form Values", values);

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
          <FormikControl
            control="checkbox"
            name="checkboxOption"
            label="Pick Options"
            options={checkboxOptions}
          />
          <FormikControl control="date" name="birthDate" label="Pick a date" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
