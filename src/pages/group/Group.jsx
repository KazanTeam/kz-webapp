import React from "react";
import {connect} from "react-redux";
import GroupForm from "./GroupForm";
import {select} from '@rematch/select';
import {SubmissionError} from "redux-form";

const mapStateToProps = state => ({
  initialValues: select.group.getGroup(state)
});

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
    const {location: {pathname}} = this.props;
    return (
      <GroupForm onSubmit={this.handleSubmit} pathName={pathname}/>
    );
  }
}

export default connect(null, mapDispatch)(Group);
