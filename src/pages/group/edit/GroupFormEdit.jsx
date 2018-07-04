import React from "react";
import PropTypes from "prop-types";

// material-ui components
import InputAdornment from "material-ui/Input/InputAdornment";

// @material-ui/icons
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";

// core components
import Button from "components/CustomButtons/Button.jsx";

import {Field, reduxForm} from "redux-form";

//phone number
import renderCustomInput from "components/RenderCustomInput/RenderCustomInput";
import renderSelectField from "../../../components/RenderSelectField/RenderSelectField";
import Role from "../../../resources/role";
import Danger from "../../../components/Typography/Danger";

class GroupFormEdit extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.initialize(this.props.group)
  }

  render() {
    const {
      classes,
      handleSubmit,
      submitting,
      id,
      error
    } = this.props;
    console.log(id);
    return (
      <div>
        <div className={classes.center}>
          <Danger>{error}</Danger>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Field
            name="name"
            formControlProps={{
              fullWidth: true,
              className: classes.customFormControlClasses
            }}
            inputProps={{
              disabled: true,
              startAdornment: (
                <InputAdornment
                  position="start"
                  className={classes.inputAdornment}
                >
                  <SupervisorAccount className={classes.inputAdornmentIcon}/>
                </InputAdornment>
              ),
              placeholder: "Group name...",
              name: "name",
            }}
            component={renderCustomInput}
          />
          <Field
            name="groupNotifyBot"
            formControlProps={{
              fullWidth: true,
              className: classes.customFormControlClasses
            }}
            inputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  className={classes.inputAdornment}
                >
                  <SupervisorAccount className={classes.inputAdornmentIcon}/>
                </InputAdornment>
              ),
              placeholder: "Group notify bot...",
              name: "groupNotifyBot",
            }}
            component={renderCustomInput}
          />
          <Field
            name="groupAlertBot"
            component={renderCustomInput}
            formControlProps={{
              fullWidth: true,
              className: classes.customFormControlClasses
            }}
            inputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  className={classes.inputAdornment}
                >
                  <SupervisorAccount className={classes.inputAdornmentIcon}/>
                </InputAdornment>
              ),
              placeholder: "Group alert bot...",
              name: "groupAlertBot"
            }}
          />
          <Field
            name="role"
            component={renderSelectField}
            data={Role}
          />
          <div className={classes.center}>
            <Button round color="primary" type="submit" disabled={submitting}>
              Get started
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

GroupFormEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'GroupFormEdit',
  enableReinitialize: true,
  dirty: true
}) ( GroupFormEdit );


