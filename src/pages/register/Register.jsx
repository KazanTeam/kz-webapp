import React from "react";
import {connect} from "react-redux";
import RegisterForm from "./RegisterForm";
import {SubmissionError} from "redux-form";

const mapDispatch = ({ register: { registerAsync }}) => ({
  registerAsync
});

class Register extends React.Component {
  handleSubmit = (data) => {
    return this.props.registerAsync(data).catch(error => {
      if (error.message === undefined) {
        throw new SubmissionError({_error: error})
      }
      throw new SubmissionError({_error: error.message});
    })
  };

  render() {
    return (
      <RegisterForm onSubmit={this.handleSubmit}/>
    );
  }
}

export default connect(null, mapDispatch)(Register);
