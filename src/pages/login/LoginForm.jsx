import React from 'react';
import { Field, reduxForm} from 'redux-form';

// material-ui components
import InputAdornment from "material-ui/Input/InputAdornment";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import LoginCard from "components/Cards/LoginCard.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

const renderCustomInput = ({
  inputProps,
  input,
  ...custom
}) => {
  inputProps = {...inputProps, ...input};
  return <CustomInput        
      {...custom}
      inputProps={inputProps}
  />
};

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  render() {
    const {handleSubmit, error, submitting, classes} = this.props;
    return (
      <GridContainer justify="center">
        <ItemGrid xs={12} sm={6} md={4}>
          <form onSubmit={handleSubmit}>
            <LoginCard
              customCardClass={classes[this.state.cardAnimaton]}
              headerColor="rose"
              cardTitle="Login"
              cardSubtitle="Or Be Classical"
              footerAlign="center"
              footer={
                <Button type="submit" color="roseNoBackground" wd size="lg">
                  Let's Go
                </Button>
              }
              socials={[
                "fab fa-facebook-square",
                "fab fa-twitter",
                "fab fa-google-plus"
              ].map((prop, key) => {
                return (
                  <Button
                    color="simple"
                    justIcon
                    key={key}
                    customClass={classes.customButtonClass}
                  >
                    <i className={prop} />
                  </Button>
                );
              })}
              content={
                <div>
                  <Field
                    labelText="Username"                    
                    name="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Face className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                    component={renderCustomInput}
                  />                      
                  <Field
                    labelText="Password"
                    name="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOutline
                            className={classes.inputAdornmentIcon}
                          />
                        </InputAdornment>
                      ),
                      type: "password"
                    }}
                    component={renderCustomInput}
                  />
                </div>
              }
            />
          </form>
        </ItemGrid>
      </GridContainer>
    );
  }
}

export default reduxForm({
  form: 'LoginForm', // a unique identifier for this form
})(LoginForm)
