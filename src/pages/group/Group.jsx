import React from "react";
import {connect} from "react-redux";
import GroupForm from "./GroupForm";
import {SubmissionError} from "redux-form";
import {push} from "react-router-redux";

const mapDispatch = ({ group: { createGroup, editGroup } }) => ({
  createGroup,
  editGroup
});

class Group extends React.Component {

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
    const { match: { params: { id } } } = this.props;

    return (
      <GroupForm onSubmit={this.handleSubmit} id={id}/>
    );
  }
}

export default connect(null, mapDispatch)(Group);
