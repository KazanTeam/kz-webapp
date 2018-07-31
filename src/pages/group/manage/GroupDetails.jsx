import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

import RegularCard from "components/Cards/RegularCard.jsx";
import Heading from "components/Heading/Heading.jsx";
import groupService from 'services/GroupService.js';
import MemberTable from './member/MemberTable'
const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  }
};

class GroupDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      group: groupService.findById(id)
    }
  }

  render() {
    const {group} = this.state;
    const {classes} = this.props;
    return (
      <div>
        <Heading
          textAlign="center"
          title="Management"
          category="Group"
        />
        <RegularCard
          content={
            <div>
              <div className={classes.typo}>
                <div className={classes.note}>Group Name</div>
                <p>
                  {group.name}
                </p>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Telegram Bot Username</div>
                <p>
                  {group.groupNotifyBot}
                </p>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Link join group</div>
                <p>
                  <a href="/groups/list">Link join group</a>
                </p>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Member</div>
                <p>
                  0
                </p>
              </div>
            </div>
          }
        />
        <MemberTable/>
      </div>
    );
  }
}

export default withStyles(style)(GroupDetails);
