import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
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
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import renderCustomInput from "components/RenderCustomInput/RenderCustomInput";

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
                            name:"name"
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
                                <SupervisorAccount className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Group notify bot...",
                            name:"groupNotifyBot"
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
                                <SupervisorAccount className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Group alert bot...",
                            name:"groupAlertBot"
                          }}
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


