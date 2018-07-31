import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

// core components
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import ChartCard from "components/Cards/ChartCard.jsx";
import IconCard from "components/Cards/IconCard.jsx";

import {
  roundedLineChart,
  straightLinesChart,
  simpleBarChart,
  colouredLineChart,
  multipleBarsChart,
  colouredLinesChart,
  pieChart
} from "variables/charts.jsx";

import chartsStyle from "assets/jss/material-dashboard-pro-react/views/chartsStyle.jsx";

class BarChart extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Heading
          textAlign="center"
          title="React Chartist"
        />
        <GridContainer>

          <ItemGrid xs={12} sm={12} md={12}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={simpleBarChart.data}
                  type="Bar"
                  options={simpleBarChart.options}
                  responsiveOptions={simpleBarChart.responsiveOptions}
                  listener={simpleBarChart.animation}
                />
              }
              chartColor="blue"
              title="Simple Bar Chart"
              text="Bar Chart"
            />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(chartsStyle)(BarChart);
