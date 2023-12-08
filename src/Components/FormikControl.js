import React from "react";
import Input from "./sharedComponents/Input";
import TextArea from "./sharedComponents/TextArea";
import Select from "./sharedComponents/Select";
import Radio from "./sharedComponents/Radio";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
