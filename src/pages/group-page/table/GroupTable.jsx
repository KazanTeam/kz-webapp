import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import { dataTable } from "variables/general.jsx";
import {push} from "react-router-redux";
import { dispatch } from '@rematch/core';
import Button from "components/CustomButtons/Button.jsx";

import buttonsStyle from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.jsx";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from 'prop-types';
import { select } from '@rematch/select'
import {connect} from "react-redux";

const mapStateToProps = state => ({
  groups: select.group.getGroups(state)
});

const mapDispatch = ({group: {updateGroup}}) => ({
  updateGroup
});

class GroupTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      groups: this.props.groups.map((group, key) => {
        return ({
          id: group.id ? group.id : key,
          name: group.name,
          groupNotifyBot: group.groupNotifyBot,
          groupAlertBot: group.groupAlertBot,
          creator: group.creator,
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              { /* use this button to add a edit kind of action */ }
              <IconButton
                onClick={() => {
                  let obj = this.state.groups.find(o => o.id === group.id);
                  this.props.updateGroup(obj);
                  dispatch(push("/groups/create"))
                }}
                color="warningNoBackground"
                customClass="edit">
                <Dvr />
              </IconButton>{" "}
              { /* use this button to remove the data row */ }
              <IconButton
                onClick={() => {
                  var data = this.state.data;
                  data.find((o,i) => {
                    if(o.id === key){
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i,1);
                      return true;
                    }
                    return false;
                  });
                  this.setState({data: data});
                }}
                color="dangerNoBackground"
                customClass="remove">
                <Close />
              </IconButton>{" "}
            </div>
          )
        })
      })
    }
  }
  render(){
    console.log(this.props);
    const {classes} = this.props;
    return (
      <GridContainer>
        <ItemGrid xs={12}>
          <IconCard
            icon={Assignment}
            title="Group Table"
            content={
              <GridContainer>
                <ItemGrid xs={12}>
                  <Button color="primary" customClass={classes.right}
                          onClick={() => {
                              dispatch(push('/groups/create'))
                           }} >Create Group
                  </Button>
                </ItemGrid>
                <ItemGrid xs={12}> <ReactTable
                  data={this.state.groups}
                  filterable
                  columns={[
                    {
                      Header: "Name",
                      accessor: "name",
                    },
                    {
                      Header: "Notify Bot",
                      accessor: "groupNotifyBot"
                    },
                    {
                      Header: "Alert Bot",
                      accessor: "groupAlertBot"
                    },
                    {
                      Header: "Link Join Group",
                      accessor: "creator"
                    },
                    {
                      Header: "Actions",
                      accessor: "actions",
                      sortable: false,
                      filterable: false,
                    }
                  ]}
                  defaultPageSize={5}
                  // showPaginationTop
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
GroupTable.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatch)(withStyles(buttonsStyle)(GroupTable));
