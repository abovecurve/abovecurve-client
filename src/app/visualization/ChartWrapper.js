import React from "react";
import GeoChart from "./GeoChart";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import ObesityChart from "./ObesityChart";
import DeathByAgeGroup from "./DeathByAgeGroup";

export default class ChartWrapper extends React.Component {
  state = {
    mapData: [],
    totalTestMapData: [],
    totalDeathMapData: [],
    loading: false,
    selectedLocation: [],
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(`https://covidtracking.com/api/v1/states/current.json`)
      .then((res) => {
        //console.log(res.data);
        this.extractData(res.data);
        this.extractTotalData(res.data);
        this.extractDeathData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }
  extractData(arr) {
    const masterStateArr = [["State", "Covid-19 Positive Cases"]];
    arr.forEach((elem) => {
      masterStateArr.push([elem.state, elem.positive]);
    });
    this.setState({ mapData: masterStateArr });
  }

  extractTotalData(arr) {
    const masterStateArr = [["State", "Covid-19 Total Tests"]];
    arr.forEach((elem) => {
      masterStateArr.push([elem.state, elem.totalTestResults]);
    });
    this.setState({ totalTestMapData: masterStateArr });
  }

  extractDeathData(arr) {
    const masterStateArr = [["State", "Covid-19 Total Deaths"]];
    arr.forEach((elem) => {
      masterStateArr.push([elem.state, elem.death]);
    });
    this.setState({ totalDeathMapData: masterStateArr });
  }

  selectState = ({ chartWrapper }) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();
    if (!selection.length) return;
    const stateData = this.state.mapData[selection[0].row + 1];
    this.setState({ selectedLocation: stateData });
  };

  selectObesityState = ({ chartWrapper }) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();
    if (!selection.length) return;
    const stateData = this.state.mapData[selection[0].row + 1];
    this.props.setSelectObesityState(stateData[0]);
  };

  selectSmokingState = ({ chartWrapper }) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();
    if (!selection.length) return;
    const stateData = this.state.mapData[selection[0].row];
    this.props.setSelectSmokingState(stateData[0]);
  };

  masterSelectState = ({ chartWrapper }) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();
    if (!selection.length) return;
    const stateData = this.state.mapData[selection[0].row + 1];
    this.props.setMasterSelectState(stateData[0]);
  };

  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <DeathByAgeGroup selectedLocation={this.state.selectedLocation} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <GeoChart
              selectState={this.masterSelectState}
              mapData={this.state.mapData}
              colorAxis={{ colors: ["#FFEDEB", "#db5e5e", "#6b0707"] }}
            />

            <Grid item xs={12} sm={12} md={12} lg={6}>
              <ObesityChart chartData={this.props.obesityChartData} />
            </Grid>
          </Grid>

          <GeoChart
            selectState={this.selectState}
            mapData={this.state.totalTestMapData}
            colorAxis={{ colors: ["#DEF2C8", "#9BC1BC", "#5CA4A9"] }}
          />

          <GeoChart
            selectState={this.selectState}
            mapData={this.state.totalDeathMapData}
            colorAxis={{ colors: ["#747C92", "#52154E", "#111344"] }}
          />
        </Grid>
      </>
    );
  }
}
