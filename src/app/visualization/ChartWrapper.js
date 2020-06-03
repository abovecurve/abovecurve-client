import React from "react";
import GeoChart from "./GeoChart";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class ChartWrapper extends React.Component {
  state = {
    mapData: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(`https://covidtracking.com/api/v1/states/current.json`)
      .then((res) => {
        this.extractData(res.data);
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

  selectState = ({ chartWrapper }) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();
    if (!selection.length) return;
    const stateData = this.state.mapData[selection[0].row + 1];
    console.log(stateData[0]);
  };
  render() {
    return this.state.loading ? <CircularProgress size={400} /> : <GeoChart selectState={this.selectState} mapData={this.state.mapData} />;
  }
}
