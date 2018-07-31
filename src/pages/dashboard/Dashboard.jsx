import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

import VectorMaps from "../map/map";
import {Bar} from 'react-chartjs-2';
import {cities} from "../../resources/Data";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", "September", "October"],
  datasets: [
    {
      label: 'Strategy',
      backgroundColor: '#1bacc0',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: '#1bacc0',
      data: [20, 25, 15, 40, 35, 30, 15, 28, 40, 15, 20, 100]
    }
  ]
};

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleHover = (event, elements)=> {
    if(elements.length > 0) {
      const {0: {_index}} = elements;
      this.refs.map.handleReInitMarker(_index)
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <VectorMaps ref="map"/>
        <div>
          <h2>Strategy</h2>
          <Bar
            data={data}
            width={200}
            height={80}
            options={{
              maintainAspectRatio: false,
              onHover: this.handleHover,
              intersect: true
            }}
          />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
