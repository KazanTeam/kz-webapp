import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";

import Step1 from "pages/sign-up/Steps/Step1.jsx";
import withStyles from "material-ui/styles/withStyles";
// import Step2 from "./WizardSteps/Step2.jsx";
// import Step3 from "./WizardSteps/Step3.jsx";

class SignUp extends PureComponent {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={8}>
            <Wizard
              validate
              steps={[
                { stepName: "About", stepComponent: Step1, stepId: "about" },
                // { stepName: "Account", stepComponent: Step2, stepId: "account" },
                // { stepName: "Address", stepComponent: Step3, stepId: "address" }
              ]}
              title="Build Your Profile"
              subtitle="This information will let us know more about you."
            />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SignUp;
