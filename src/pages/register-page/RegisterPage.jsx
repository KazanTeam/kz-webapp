import React from "react";
import {connect} from "react-redux";
import RegisterForm from "./RegisterForm";

//mapping dispatch
const mapDispatch = ({ register: { registerAsync }}) => ({
  registerAsync
});

class RegisterPage extends React.Component {
  handleSubmit = (data) => {
    return this.props.registerAsync(data);
  };

  render() {
    return (
      <RegisterForm onSubmit={this.handleSubmit}/>
    );
  }
}

export default connect(null, mapDispatch)(RegisterPage);
