import React from 'react';
import VerificationForm from './VerificationForm'
import {connect} from "react-redux";
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import withStyles from "material-ui/styles/withStyles";

const mapDispatch = ({ verification: { confirmSignUpAsync, resendSignUpAsync }}) => ({
  confirmSignUpAsync, resendSignUpAsync
});

class Verification extends React.PureComponent {

  handleSubmit = ({code}) => {
    return this.props.confirmSignUpAsync({code});
  };

  handleResend = () => {
    return this.props.resendSignUpAsync();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <VerificationForm onSubmit={this.handleSubmit} classes={classes} onResend={this.handleResend}/>
      </div>
    );
  }
}
export default connect(null, mapDispatch)(withStyles(registerPageStyle)(Verification))
