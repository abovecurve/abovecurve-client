import * as React from "react";
import { Chart } from "react-google-charts";


export default class GeoChart extends React.Component {
  render() {
    return (
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: this.props.selectState,
          },
        ]}
        width={"750px"}
        height={"450px"}
        chartType="GeoChart"
        data={this.props.mapData}
        options={{
          region: "US",
          resolution: "provinces",
          colorAxis: this.props.colorAxis,
          enableRegionInteractivity: true,
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="REACT_APP_MAPS_API_KEY"
        rootProps={{ "data-testid": "1" }}
      />
    );
  }
}
