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
import GroupEdit from "./GroupEdit";

const mapDispatch = ({ group: { createGroup, editGroup } }) => ({
  createGroup,
  editGroup
});

class Group extends React.Component {

  componentDidMount() {
    if(this.props.id) {
      this.props.initialize( groupService.findById(this.props.id))
    } else {
      this.props.clear();
    }
  }

  handleSubmit = async (data) => {
    const { match: { params: { id } }, editGroup, createGroup } = this.props;
    try {
      if(id) {
        await editGroup(data)
      }else {
        await createGroup(data)
      }
      push("/groups/list")
    }catch(error){
      throw new SubmissionError({_error: error.message})
    }
  };

  render() {
    const { match: { params: { id } }, classes, error } = this.props;

    return (
      <div className={classes.center}>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={6} md={5}>
            {
              id ? <GroupEdit /> : <GroupCreate />
            }
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

export default connect(null, mapDispatch)(withStyles(registerPageStyle, Group));
