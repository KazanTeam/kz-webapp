import React from "react";
import {connect} from "react-redux";
import GroupForm from "./GroupForm";
import {select} from '@rematch/select'

const mapStateToProps = state => ({
  initialValues: select.group.getGroup(state)
});

const mapDispatch = ({ group: { groupAsync }}) => ({
  groupAsync
});

class GroupPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (data) => {
    return this.props.groupAsync(data);
  };

  render() {
    // console.log(this/.props);
    return (
      <GroupForm onSubmit={this.handleSubmit} initialValues={this.props.initialValues}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatch)(GroupPage);
