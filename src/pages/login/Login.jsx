import React from 'react';
import {connect} from "react-redux";
import withStyles from "material-ui/styles/withStyles";

import LoginForm from './LoginForm';

import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

const mapDispatch = ({ login: { loginAsync }}) => ({
  loginAsync
})

class Login extends React.Component {

  handleSubmit = (data) => {
    return this.props.loginAsync(data);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <div className={classes.container}>
          <LoginForm onSubmit={this.handleSubmit} classes={classes}/>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatch)(withStyles(loginPageStyle)(Login))
