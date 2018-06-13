import React from "react";
import {connect} from "react-redux";
import GroupForm from "./GroupForm";
import {SubmissionError} from "redux-form";

const mapDispatch = ({ group: { createGroup, editGroup } }) => ({
  createGroup,
  editGroup
});

class Group extends React.Component {

  handleSubmit = (data) => {
    const { match: { params: { id } }, editGroup, createGroup } = this.props;
    try {
      if(id) {
        editGroup(data)
      }else {
        createGroup(data)
      }
    }catch(error){
      throw new SubmissionError({_error: error.data})
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
