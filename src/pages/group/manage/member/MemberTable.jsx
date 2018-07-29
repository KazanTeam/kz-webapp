import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import {push} from "react-router-redux";
import {dispatch} from '@rematch/core';
import Button from "components/CustomButtons/Button.jsx";
import groupTableStyle from "assets/jss/material-dashboard-pro-react/page/groupTableStyle.jsx";
import withStyles from "material-ui/styles/withStyles";
import userService from 'services/UserService.js';
import update from 'immutability-helper';
import SweetAlert from "react-bootstrap-sweetalert";

class MemberTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      alert: null
    }
  }

  handleEdit = group => {
    this.props.history.push(`/groups/edit/${group.id}`);
  };

  handleDelete = group => {
    // let data = this.state.groups;
    // groupService.deleteGroup(group.id).then(resp => {
    //   if (resp.status === 204) {
    //     data.find((o, i) => {
    //       if (o.id === group.id) {
    //         data.splice(i, 1);
    //         return true;
    //       }
    //       return false;
    //     });
    //
    //     this.props.setGroups(
    //       this.props.groups.filter(item => item.id !== group.id)
    //     );
    //
    //     this.setState({data: data});
    //   }
    // });
  };

  warningWithConfirmAndCancelMessage = (group) => {
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{display: "block", marginTop: "-100px"}}
          title="Are you sure?"
          onConfirm={() => this.successDelete(group)}
          onCancel={() => this.cancelDelete()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
          cancelBtnCssClass={
            this.props.classes.button + " " + this.props.classes.danger
          }
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
        </SweetAlert>
      )
    });
  };

  successDelete = (group) => {
    this.handleDelete(group);
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{display: "block", marginTop: "-100px"}}
          title="Deleted!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          Group has been deleted.
        </SweetAlert>
      )
    });
  };

  cancelDelete = () => {
    this.setState({
      alert: (
        <SweetAlert
          danger
          style={{display: "block", marginTop: "-100px"}}
          title="Cancelled"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          Group is safe :)
        </SweetAlert>
      )
    });
  };

  hideAlert = () => {
    this.setState({
      alert: null
    });
  };


  componentDidMount() {
    const {match} = this.props;
    userService.list().then(users => {
      // this.props.setUsers(groups);
      const convertUsers = users.map((user, key) => {
        return ({
          id: user.id ? user.id : key,
          username: user.username,
          status: user.status,
          enabled: user.enabled ? "ENABLED" : "DISABLED",
          firstName: user.firstName,
          lastName: user.lastName,
          actions: (
            <div className="actions-right">
              <IconButton
                onClick={() => this.handleEdit(user)}
                color="successNoBackground"
                customClass="edit">
                <Edit/>
              </IconButton>{" "}

              <IconButton
                onClick={() => this.warningWithConfirmAndCancelMessage(user)}
                color="dangerNoBackground"
                customClass="remove">
                <Close/>
              </IconButton>{" "}
            </div>
          )
        })
      });
      this.setState(prevState => update(prevState, {users: {$set: convertUsers}}))
    })
  }

  render() {
    const {classes} = this.props;
    return (
      <GridContainer>
        {this.state.alert}
        <ItemGrid xs={12}>
          <IconCard
            icon={Assignment}
            title="Members"
            content={
              <GridContainer>
                <ItemGrid xs={12}>
                  <Button color="primary" customClass={classes.right}
                          onClick={() => {
                            dispatch(push('/groups/create'))
                          }
                          }>
                    Add Member
                  </Button>
                </ItemGrid>
                <ItemGrid xs={12}> <ReactTable
                  data={this.state.users}
                  filterable
                  columns={[
                    {
                      Header: "User name",
                      accessor: "username",
                    },
                    {
                      Header: "Status",
                      accessor: "status"
                    },
                    {
                      Header: "Enabled",
                      accessor: "enabled"
                    },
                    {
                      Header: "First Name",
                      accessor: "firstName"
                    },
                    {
                      Header: "Last Name",
                      accessor: "lastName"
                    },
                    {
                      Header: "Actions",
                      accessor: "actions",
                      sortable: false,
                      filterable: false,
                    }
                  ]}
                  defaultPageSize={5}
                  showPaginationBottom
                  className="-striped -highlight"
                /></ItemGrid>
              </GridContainer>
            }
          />
        </ItemGrid>
      </GridContainer>
    );
  }
}

export default withStyles(groupTableStyle)(MemberTable);
