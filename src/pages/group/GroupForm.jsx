import React from "react";
import PropTypes from "prop-types";
import {select} from '@rematch/select';
import {connect} from 'react-redux';

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
import Danger from "components/Typography/Danger";

class GroupForm extends React.Component {

  render() {
    const {
      classes,
      handleSubmit,
      submitting,
      error,
      pathName
    } = this.props;
    
    return (
      <div className={classes.center}>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={6} md={5}>
            <RegularCard
              cardTitle={pathName === '/groups/edit' ? 'Edit Group': 'Create Group'}
              titleAlign="center"
              customCardTitleClasses={classes.cardTitle}
              customCardClasses={classes.cardClasses}
              content={
                <GridContainer>
                  <ItemGrid xs={12} sm={12} md={12}>
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

                      <div className={classes.center}>
                        <Button round color="primary" type="submit" disabled={submitting}>
                          Get started
                        </Button>
                      </div>
                    </form>
                  </ItemGrid>
                </GridContainer>
              }
            />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

GroupForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapState = state => ({
  initialValues: select.group.getGroup(state)
});

const mapDispatch = ({group: {setGroup}}) => ({
  setGroup
});

export default compose(
  withStyles(registerPageStyle, {
    name: 'GroupForm'
  }),
  connect(mapState, mapDispatch),
  reduxForm({
    form: 'GroupForm',
    enableReinitialize: true
  })
)(GroupForm);


