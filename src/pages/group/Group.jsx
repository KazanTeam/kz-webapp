import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import GroupEdit from "./edit/GroupEdit";
import GroupCreate from "./create/GroupCreate";
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";

class Group extends React.Component {
  render() {
    const { match: { params: { id } }, classes } = this.props;

    return (
      <div className={classes.center}>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={6} md={5}>
            {
              id ? <GroupEdit classes={classes} id={id}/> : <GroupCreate classes={classes}/>
            }
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

GroupCreate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(registerPageStyle)(Group)
