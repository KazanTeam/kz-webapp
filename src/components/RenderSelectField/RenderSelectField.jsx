import React from "react";
import CustomSelect from "../CustomSelect/CustomSelect";

const renderSelectField = ({
 input,
 label,
 meta: { touched, error },
 children,
 data
}) => {
  return <CustomSelect
    placeholder={label}
    error={touched && error}
    {...input}
    onChange={event => input.onChange(event.target.value)}
    children={children}
    data={data}
    input={input}
  />
};

export default renderSelectField;
