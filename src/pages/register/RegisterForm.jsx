import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import Send from '@material-ui/icons/Send'

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import Button from "components/CustomButtons/Button.jsx";

import compose from "recompose/compose";
import {Field, reduxForm} from "redux-form";

//phone number
import 'react-phone-number-input/rrui.css'
import 'react-phone-number-input/style.css'
import PhoneNumber from 'react-phone-number-input'
import customRegisterPageStyled from './styled.jsx'
import Danger from "components/Typography/Danger";
import renderCustomInput from "components/RenderCustomInput/RenderCustomInput";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      phone: ''
    };
  }
  openInNewTab = (e) => {
    e.preventDefault();
    const win = window.open("http://t.me/KazanTradingBot", '_blank');
    win.focus();
  };

  render() {
    const { classes, handleSubmit, submitting, error } = this.props;
    return (
      <div className={classes.container} >
        <GridContainer justify="center" spacing={8}>
          <ItemGrid xs={12} sm={8} md={8}>
            <RegularCard
              cardTitle="Register"
              titleAlign="center"
              customCardTitleClasses={classes.cardTitle}
              customCardClasses={classes.cardClasses}
              content={
                <form className={classes.form} onSubmit={handleSubmit}>
                  <GridContainer justify="center" >
                    <ItemGrid xs={12} sm={10} md={10}>
                      <Field
                        name="username"
                        component={renderCustomInput}
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start"
                                            className={classes.inputAdornment}
                            >
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "Username"
                        }}
                      />
                    </ItemGrid>
                  </GridContainer>
                  <GridContainer justify="center" ><ItemGrid xs={12} sm={10} md={10}>
                    <Field
                      name="password"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start"
                                          className={classes.inputAdornment}
                          >
                            <LockOutline className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Password",
                        type: "password"
                      }}
                      component={renderCustomInput}
                    />
                  </ItemGrid>
                  </GridContainer>
                  <GridContainer justify="center" >
                    <ItemGrid xs={12} sm={10} md={10}>
                      <Field
                      name="email"
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
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Email *"
                      }}
                      component={renderCustomInput}
                  />
                    </ItemGrid>
                  </GridContainer>
                  <GridContainer justify="center">
                    <ItemGrid xs={8} sm={8} md={7}>
                      <Field
                        name="telegramUsername"
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
                              <Send
                                className={classes.inputAdornmentIcon}
                              />
                            </InputAdornment>
                          ),
                          placeholder: "TelegramID...",
                        }}
                        component={renderCustomInput}
                      />
                    </ItemGrid>
                    <ItemGrid xs={4} sm={4} md={3}>
                      <Button round color="primary" onClick={this.openInNewTab} customClass={classes.telegramMargin}>
                        Get TelegramId
                      </Button>
                    </ItemGrid>
                  </GridContainer>
                  <GridContainer justify="center">
                    <ItemGrid xs={12} sm={10} md={10} className={classes.phoneNumber}>
                      <Field
                        name="phoneNumber"
                        component={(field) => (
                          <PhoneNumber {...field.input}/>
                        )}
                      />
                    </ItemGrid>
                  </GridContainer>
                  <GridContainer justify="center" ><ItemGrid xs={12} sm={10} md={10}><Field
                    name="firstName"
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
                          <Face
                            className={classes.inputAdornmentIcon}
                          />
                        </InputAdornment>
                      ),
                      placeholder: "FirstName..."
                    }}
                    component={renderCustomInput}
                  /></ItemGrid></GridContainer>
                  <GridContainer justify="center" >
                    <ItemGrid xs={12} sm={10} md={10}><Field
                      name="lastName"
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
                            <Face
                              className={classes.inputAdornmentIcon}
                            />
                          </InputAdornment>
                        ),
                        placeholder: "Last Name..."
                      }}
                      component={renderCustomInput}
                    /></ItemGrid>
                  </GridContainer>
                  <GridContainer justify="center"><ItemGrid xs={12} sm={10} md={10}>
                    <div className={classes.center}>
                      <Button round color="primary" type="submit" disabled={submitting}>
                        Get started
                      </Button>
                    </div>
                    <div className={classes.center}>
                      <Danger>{error}</Danger>
                    </div>
                  </ItemGrid></GridContainer>
                </form>
              }
            />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(customRegisterPageStyled, {
    name: 'RegisterForm'
  }),
  reduxForm({
    form: 'RegisterForm'
  })
)(RegisterForm);


