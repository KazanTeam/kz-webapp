import React from "react";
import {connect} from "react-redux";
import GroupForm from "./GroupForm";
import {SubmissionError} from "redux-form";
import {push} from "react-router-redux";

import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import Danger from "components/Typography/Danger";

import withStyles from "material-ui/styles/withStyles";
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

import groupService from 'services/GroupService.js';

const mapDispatch = ({ group: { editGroup } }) => ({
  editGroup
});

class GroupEdit extends React.Component {

  handleSubmit = async (data) => {
    const { editGroup } = this.props;
    try {
      await editGroup(data)
      push("/groups/list")
    }catch(error){
      throw new SubmissionError({_error: error.message})
    }
  };

  render() {
    const { classes, error } = this.props;

    return (
      <RegularCard
        cardTitle={'Edit Group'}
        titleAlign="center"
        customCardTitleClasses={classes.cardTitle}
        customCardClasses={classes.cardClasses}
        content={
          <GridContainer>
            <ItemGrid xs={12} sm={12} md={12}>
              <div className={classes.center}>
                <Danger>{error}</Danger>
              </div>
              <GroupForm classes={classes} onSubmit={this.handleSubmit} />
            </ItemGrid>
          </GridContainer>
        }
      />
    );
  }
}

export default connect(null, mapDispatch)(GroupEdit);
