import React from "react";
import {connect} from "react-redux";
import GroupForm from "./GroupForm";
import { select } from '@rematch/select'

const mapStateToProps = state => ({
  isCreated: select.group.getIsCreated(state)
});

//mapping dispatch
const mapDispatch = ({ group: { groupAsync }}) => ({
  groupAsync
});

class GroupPage extends React.Component {
  handleSubmit = (data) => {
    console.log(data);
    return this.props.groupAsync(data);
  };

  render() {
    console.log(this.props);
    return (
      <GroupForm onSubmit={this.handleSubmit} isCreated={this.props.isCreated}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatch)(GroupPage);
