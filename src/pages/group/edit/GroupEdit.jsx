import React from "react";
import {connect} from "react-redux";
import {SubmissionError} from "redux-form";
import {push} from "react-router-redux";
import groupService from 'services/GroupService.js';
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import PropTypes from "prop-types";
import GroupFormEdit from "./GroupFormEdit";

const mapDispatch = ({ group: { editGroup } }) => ({
  editGroup
});

class GroupEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: groupService.findById(this.props.id)
    }
  }

  handleSubmit = async (data) => {
    const { editGroup } = this.props;
    try {
      await editGroup(data);
      push("/groups/list")
    }catch(error){
      throw new SubmissionError({_error: error.message})
    }
  };

  render() {
    console.log("render");
    const { classes, id } = this.props;

    return (
      <RegularCard
        cardTitle={'Edit Group'}
        titleAlign="center"
        customCardTitleClasses={classes.cardTitle}
        customCardClasses={classes.cardClasses}
        content={
          <GridContainer>
            <ItemGrid xs={12} sm={12} md={12}>
              <GroupFormEdit classes={classes} onSubmit={this.handleSubmit} group={this.state.group} id={id}/>
            </ItemGrid>
          </GridContainer>
        }
      />
    );
  }
}

GroupEdit.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default connect(null, mapDispatch)(GroupEdit)
