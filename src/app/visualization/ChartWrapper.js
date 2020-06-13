import React from "react";
import GeoChart from "./GeoChart";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import ObesityChart from "./ObesityChart";
import DeathByAgeGroup from "./DeathByAgeGroup";
import Radio from '@material-ui/core/Radio';


export default class ChartWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1",
      mapData: [],
      totalTestMapData: [],
      totalDeathMapData: [],
      selectedLocation: [],
      isHidden: true,
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange = (changeEvent) => {
    this.setState({ selectedOption: changeEvent.target.value }, () => {
      console.log(this.state.selectedOption)
    });
  };

  componentDidMount() {
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

  // selectState = ({ chartWrapper }) => {
  //   const chart = chartWrapper.getChart();
  //   const selection = chart.getSelection();
  //   if (!selection.length) return;
  //   const stateData = this.state.mapData[selection[0].row + 1];
  //   this.setState({ selectedLocation: stateData });
  // };

  // selectObesityState = ({ chartWrapper }) => {
  //   const chart = chartWrapper.getChart();
  //   const selection = chart.getSelection();
  //   if (!selection.length) return;
  //   const stateData = this.state.mapData[selection[0].row + 1];
  //   this.props.setSelectObesityState(stateData[0]);
  // };

  // selectSmokingState = ({ chartWrapper }) => {
  //   const chart = chartWrapper.getChart();
  //   const selection = chart.getSelection();
  //   if (!selection.length) return;
  //   const stateData = this.state.mapData[selection[0].row];
  //   this.props.setSelectSmokingState(stateData[0]);
  // };

  masterSelectState = ({ chartWrapper }) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();
    if (!selection.length) return;
    const stateData = this.state.mapData[selection[0].row + 1];
    this.props.setMasterSelectState(stateData[0]);
    this.setState({ selectedLocation: stateData });
  };

  

  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <DeathByAgeGroup selectedLocation={this.state.selectedLocation} />
          </Grid>

          <form>
            <div className="form-check">
              <label>
                <Radio
                  type="radio"
                  name="react-tips"
                  value="option1"
                  checked={this.state.selectedOption === "option1"}
                  onChange={this.handleOptionChange}
                  className="form-check-input"
                />
                Confirmed Cases
              </label>
            </div>

            <div className="form-check">
              <label>
                <Radio
                  type="radio"
                  name="react-tips"
                  value="option2"
                  checked={this.state.selectedOption === "option2"}
                  onChange={this.handleOptionChange}
                  className="form-check-input"
                />
                Total Tests
              </label>
            </div>

            <div className="form-check">
              <label>
                <Radio
                  type="radio"
                  name="react-tips"
                  value="option3"
                  checked={this.state.selectedOption === "option3"}
                  onChange={this.handleOptionChange}
                  className="form-check-input"
                />
                Total Deaths
              </label>
            </div>
          </form>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            {this.state.selectedOption === "option1" ? (
              <GeoChart
                selectState={this.masterSelectState}
                mapData={this.state.mapData}
                colorAxis={{ colors: ["#FFEDEB", "#db5e5e", "#6b0707"] }}
              />
            ) : null}

            {this.state.selectedOption === "option2" ? (
              <GeoChart
                selectState={this.masterSelectState}
                mapData={this.state.totalTestMapData}
                colorAxis={{ colors: ["#DEF2C8", "#9BC1BC", "#5CA4A9"] }}
              />
            ) : null}

            {this.state.selectedOption === "option3" ? (
              <GeoChart
                selectState={this.masterSelectState}
                mapData={this.state.totalDeathMapData}
                colorAxis={{ colors: ["#747C92", "#52154E", "#111344"] }}
              />
            ) : null}
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <ObesityChart chartData={this.props.obesityChartData} />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}
