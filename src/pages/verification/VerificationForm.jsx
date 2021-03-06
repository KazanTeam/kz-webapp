import React from "react";
import PropTypes from "prop-types";

import InputAdornment from "material-ui/Input/InputAdornment";

// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Danger from "components/Typography/Danger.jsx";

import {Field, reduxForm} from "redux-form";
import renderCustomInput from "components/RenderCustomInput/RenderCustomInput";

class VerificationForm extends React.Component {

  render() {
    const { classes, handleSubmit, onResend, error } = this.props;
    return (
      <div className={classes.container} >
        <GridContainer justify="center" spacing={8}>
          <ItemGrid xs={12} sm={4} md={4}>
            <form className={classes.form}  onSubmit={handleSubmit}>
            <RegularCard
              cardTitle="Verification"
              titleAlign="center"
              customCardTitleClasses={classes.cardTitle}
              customCardClasses={classes.cardClasses}
              content={
                <div>
                  <Field
                    name="code"
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
                          <Fingerprint className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                      placeholder: "Code..."
                    }}
                    component={renderCustomInput}
                  />
                  <div className={classes.center}>
                    <Button round color="primary" type="submit">
                      Verify
                    </Button>
                    <Button round color="primary" onClick={onResend}>
                      Resend
                    </Button>
                  </div>
                  <div className={classes.center}>
                    <Danger>{error}</Danger>
                  </div>
                </div>
              }
            />
            </form>
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

VerificationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default reduxForm({
    form: 'VerificationForm'
})(VerificationForm);



