import React from "react";
import PropTypes from "prop-types";
import {select} from '@rematch/select';
import {connect} from 'react-redux';

// material-ui components
import InputAdornment from "material-ui/Input/InputAdornment";

// @material-ui/icons
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import Button from "components/CustomButtons/Button.jsx";

import compose from "recompose/compose";
import {Field, reduxForm} from "redux-form";

//phone number
import renderCustomInput from "components/RenderCustomInput/RenderCustomInput";
import renderSelectField from "../../components/RenderSelectField/RenderSelectField";
import Role from "../../resources/role";
import groupService from 'services/GroupService.js';

class GroupForm extends React.Component {

  componentDidMount() {
    // this.handleInitData()
  }

  handleInitData() {
    if(this.props.id) {
      const initData = groupService.findById(this.props.id);
      this.props.initialize(initData[0])
    } else {
      this.props.clear();
    }
  }

  render() {
    const {
      classes,
      handleSubmit,
      submitting,
      id 
    } = this.props;
    return (
      <form className={classes.form} onSubmit={handleSubmit}>
        <Field
          name="name"
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
            placeholder: "Group name...",
            name: "name"
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
            name: "groupNotifyBot"
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
        {id ? ( <Field
          name="role"
          component={renderSelectField}
          data={Role}
        />) : ''}
        <div className={classes.center}>
          <Button round color="primary" type="submit" disabled={submitting}>
            Get started
          </Button>
        </div>
      </form>
    );
  }
}

GroupForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapState = (state) => {
  return {
    group: select.group.getGroups(state)
  }
};

const mapDispatch = ({group: {setGroup, clear}}) => ({
  setGroup, clear
});

export default reduxForm({
  form: 'GroupForm',
  enableReinitialize: true
})(GroupForm);


