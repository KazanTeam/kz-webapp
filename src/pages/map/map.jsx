import React from "react";
// react plugin for creating vector maps
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Heading from "components/Heading/Heading.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import {cities} from "../../resources/Data";
import worldMap from "../../resources/world-50m";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
};

export default class VectorMaps extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      center: [0,20],
      zoom: 1,
      cities: cities[7]
    }

  }

  handleReInitMarker = (index) => {
    this.setState({
      cities: cities[index]
    })
  };
  render() {
    return(
      <div>
        <Heading
          textAlign="center"
          title="Strategy"
        />
        <GridContainer>
          <ItemGrid xs={12}>
            <RegularCard
              plainCard
              content={
                <div>
                  <div style={wrapperStyles}>
                    <ComposableMap
                      projectionConfig={{
                        scale: 205,
                      }}
                      width={980}
                      height={551}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    >
                      <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
                        <Geographies geography={worldMap}>
                          {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                            <Geography
                              key={i}
                              geography={geography}
                              projection={projection}
                              style={{
                                default: {
                                  fill: "#e0e0e0",
                                  stroke: "#fff",
                                  strokeWidth: 0.5,
                                  outline: "none",
                                },
                                hover: {
                                  fill: "#e0e0e0",
                                  stroke: "#fff",
                                  strokeWidth: 0.5,
                                  outline: "none",
                                },
                                pressed: {
                                  fill: "#FF5722",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.75,
                                  outline: "none",
                                },
                              }}
                            />
                          ))}
                        </Geographies>
                        <Markers>
                          {
                            this.state.cities.map((city, i) => (
                              <Marker key={i} marker={city}>
                                <circle
                                  cx={0}
                                  cy={0}
                                  r={6}
                                  fill="#FF5722"
                                  stroke="#DF3702"
                                />
                              </Marker>
                            ))
                          }
                        </Markers>
                      </ZoomableGroup>
                    </ComposableMap>
                  </div>
                </div>
              }
            />
          </ItemGrid>
        </GridContainer>
      </div>

    )
  }
}
