import React from "react";
import {connect} from "react-redux";
import GroupForm from "./GroupForm";
import {SubmissionError} from "redux-form";
import {push} from "react-router-redux";

import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";

const mapDispatch = ({ group: { createGroup, clear } }) => ({
  createGroup, clear
});

class GroupCreate extends React.Component {

  componentDidMount() {
    this.props.clear();
  }

  handleSubmit = async (data) => {
    const { createGroup } = this.props;
    try {
      await createGroup(data);
      push("/groups/list")
    }catch(error){
      throw new SubmissionError({_error: error.message})
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <RegularCard
        cardTitle={'Create Group'}
        titleAlign="center"
        customCardTitleClasses={classes.cardTitle}
        customCardClasses={classes.cardClasses}
        content={
          <GridContainer>
            <ItemGrid xs={12} sm={12} md={12}>
              <GroupForm classes={classes} onSubmit={this.handleSubmit} />
            </ItemGrid>
          </GridContainer>
        }
      />
    );
  }
}
export default connect(null, mapDispatch)(GroupCreate)
