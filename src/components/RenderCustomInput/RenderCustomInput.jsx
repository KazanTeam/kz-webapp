import React from "react";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const renderCustomInput = ({
 inputProps,
 input,
 ...custom
 }) => {
  inputProps = {...inputProps, ...input};
  return <CustomInput
    {...custom}
    inputProps={inputProps}
  />
};

export default renderCustomInput;
