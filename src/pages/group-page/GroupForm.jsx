import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";

// @material-ui/icons
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import Send from '@material-ui/icons/Send'

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import compose from "recompose/compose";
import {Field, reduxForm} from "redux-form";

//phone number
import 'react-phone-number-input/rrui.css'
import 'react-phone-number-input/style.css'
import PhoneNumber from 'react-phone-number-input'
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, handleSubmit, submitting, isCreated } = this.props;
    return (
      <div className={classes.container} >
        <GridContainer justify="center" spacing={8}>
          <ItemGrid xs={12} sm={4} md={4}>
            {!isCreated && (
              <RegularCard
                cardTitle="Create Group"
                titleAlign="center"
                customCardTitleClasses={classes.cardTitle}
                customCardClasses={classes.cardClasses}
                content={
                  <GridContainer justify="center" >
                    <ItemGrid xs={12} sm={10} md={10}>
                      <form className={classes.form} onSubmit={handleSubmit}>
                        <Field
                          name="name"
                          component={(field) => (<CustomInput
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
                                  <SupervisorAccount className={classes.inputAdornmentIcon} />
                                </InputAdornment>
                              ),
                              placeholder: "Group name...",
                              name:"name",
                              ...field.input
                            }}
                          />)}
                          label="GroupName"
                        />
                        <Field
                          name="groupNotifyBot"
                          component={(field) => (<CustomInput
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
                                  <SupervisorAccount className={classes.inputAdornmentIcon} />
                                </InputAdornment>
                              ),
                              placeholder: "Group notify bot...",
                              name:"groupNotifyBot",
                              ...field.input
                            }}
                          />)}
                        />
                        <Field
                          name="groupAlertBot"
                          component={(field) => (<CustomInput
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
                                  <SupervisorAccount className={classes.inputAdornmentIcon} />
                                </InputAdornment>
                              ),
                              placeholder: "Group alert bot...",
                              name:"groupAlertBot",
                              ...field.input
                            }}
                          />)}
                          label="GroupName"
                        />

                        <div className={classes.center}>
                          <Button round color="primary" type="submit">
                            Get started
                          </Button>
                        </div>
                      </form>
                    </ItemGrid>
                  </GridContainer>
                }
              />
            )}
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

GroupForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(registerPageStyle, {
    name: 'GroupForm'
  }),
  reduxForm({
    form: 'GroupForm'
  })
)(GroupForm);


