import React from "react";
import {connect} from "react-redux";
import GroupForm from "./GroupForm";
import {SubmissionError} from "redux-form";

const mapDispatch = ({group: {groupAsync}}) => ({
  groupAsync
});

class Group extends React.Component {

  handleSubmit = (data) => {
    return this.props.groupAsync(data)
      .catch(error => {
        throw new SubmissionError({_error: error.data})
      });
  };

  render() {
    const {location: {pathname}, match} = this.props;

    return (
      <GroupForm onSubmit={this.handleSubmit} pathName={pathname} match={match}/>
    );
  }
}

export default connect(null, mapDispatch)(Group);
