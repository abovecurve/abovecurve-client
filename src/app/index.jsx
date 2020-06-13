import React, { Component } from "react";
import DeathBySexState from "./visualization/DeathBySexState";
import "./app.css";
import ChartWrapper from "./visualization/ChartWrapper";
import ObesityChart from "./visualization/ObesityChart";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import SmokingChart from "./visualization/SmokingChart";

// NOTE: "UA-164204874-2" Is the tracking ID for Above Curve lcoalhost
// open this app in incognito for it to register in the GA dashboard
// when testing locally.
//const GATRACKING = process.env.REACT_APP_GATRACKING || "UA-164204874-2";

/* 
  When using React Router see this guide for
  impmelemting Google Analytics
  https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
*/

class App extends Component {
  state = {
    data: {},
    selectedState: "",
    singleObesityChartData: this.getSkeletonObesityChartData(),
    masterObesityArray: [],
    masterSmokingArray: [],

    selectedObesityState: "",
    obesityData: this.getSkeletonObesityChartData(),
    singleStateData: this.getSkeletonObesityChartData(),
    allObesityData: {},

    selectedSmokingState: "",
    smokingData: this.getSkeletonPieData(),
    singleSmokingStateData: this.getSkeletonPieData(),
    allSmokingData: {},
  };

  selectObesityState = (state) => {
    const selectedState = this.state.allObesityData[state];
    const singleStateData = this.getSkeletonObesityChartData();
    singleStateData.labels.push(selectedState.stateName);
    singleStateData.datasets[0].data.push(selectedState.percentage);

    this.setState({
      selectedObesityState: state,
      singleStateData: singleStateData,
    });
  };

  masterSelectState = (state) => {
    const obesityData = this.state.allObesityData[state];
    this.extractSmokingData(state, this.state.masterSmokingArray);


    const singleObesityChartData = this.getSkeletonObesityChartData();
    singleObesityChartData.labels.push(obesityData.stateName);
    singleObesityChartData.datasets[0].data.push(obesityData.percentage);

    this.setState({
      selectedState: state,
      singleObesityChartData: singleObesityChartData,
    });
  };

  getSkeletonObesityChartData() {
    return {
      labels: [],
      datasets: [
        {
          label: "Total Obesity Percentage",
          data: [],
          backgroundColor: "rgba(54, 162, 235, 0.4)",
        },
      ],
    };
  }

  selectSmokingState = (state) => {
    const selectedState = this.state.allSmokingData[state];
    const singleSmokingStateData = this.getSkeletonPieData();
    singleSmokingStateData.labels.push(selectedState.stateName);
    singleSmokingStateData.datasets[0].data.push(selectedState.percentage);

    this.setState({
      selectedSmokingState: state,
      singleSmokingStateData: singleSmokingStateData,
    });
  };

  getSkeletonPieData() {
    return {
      title: "Tobacco Use Amongst Adults in the United States",
      labels: [],
      datasets: [
        {
          label: "Tobacco Use in Adults",
          data: [],
          backgroundColor: [
            "rgba(161, 134, 148, 0.6)",
            "rgba(33, 131, 128, 0.6)",
            "rgba(107, 7, 7, 0.6)",
            "rgba(207, 209, 26, 0.6)",
            "rgba(242, 233, 220, 0.6)",
          ],
        },
      ],
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  // componentDidMount = async () => {
  //   // custom axios uses env specific base path
  //   // LOCAL_API="http://localhost:4000"
  //   // REACT_APP_API_URL="http://api.abovecurve.com" (production)
  //   // REACT_APP_API_URL="http://api.abovecurve.dev" (development)

  //   // Call the custom axios using the below example
  //   const { data } = await fetchData("/ping");
  //   this.setState({ data });

  //   // Google Analytics initialization
  //   initGA(GATRACKING);
  //   // Trigger a Google Analytics Page View for this page (app.js)
  //   PageView();
  // };

  obesityDataFilter(location) {
    const obesityObj = this.getSkeletonObesityChartData();
    const stateObesityObj = {};
    this.state.masterObesityArray.forEach((elem) => {
      if (
        elem.total &&
        elem.question ===
          "Percent of adults aged 18 years and older who have obesity" &&
        elem.locationabbr === location
      ) {
        obesityObj.labels.push(elem.locationdesc);
        obesityObj.datasets[0].data.push(elem.data_value);
        stateObesityObj[elem.locationabbr] = {
          abbr: elem.locationabbr,
          percentage: elem.data_value,
          stateName: elem.locationdesc,
        };
      }
    });
    return obesityObj;
  }

  extractSmokingData(state = "US", data) {
    const smokingObj = this.getSkeletonPieData();
    const stateSmokingObj = {};
    data
      .filter(
        (elem) =>
          elem.locationabbr == state &&
          (elem.measuredesc ===
            "Percent of Former Smokers Among Ever Smokers" ||
            elem.measuredesc === "Current Use" ||
            elem.measuredesc === "CurrentSmoking")
      )
      .forEach((elem) => {
        smokingObj.labels.push(elem.topicdesc.replace(" (Adults)", ""));
        smokingObj.datasets[0].data.push(elem.data_value);

        stateSmokingObj[elem.locationabbr] = {
          abbr: elem.locationabbr,
          percentage: elem.data_value,
          stateName: elem.locationdesc,
        };
        console.log(smokingObj);
      });
    const nonSmoker =
      Math.round(
        (100 -
          smokingObj.datasets[0].data.map(Number).reduce((a, b) => a + b, 0)) *
          100
      ) / 100;
    smokingObj.labels.push("Nonsmoker or Unknown");
    smokingObj.datasets[0].data.push(nonSmoker);

    console.log("Nonsmoker", nonSmoker);

    this.setState({
      smokingData: smokingObj,
      allSmokingData: stateSmokingObj,
    });
    console.log(state);
  }

  componentDidMount() {
    axios
      .get(`https://chronicdata.cdc.gov/resource/hn4x-zwk7.json?$limit=10000`)
      .then((res) => {
        this.setState({ masterObesityArray: res.data });
        const obesityObj = this.getSkeletonObesityChartData();
        const stateObesityObj = {};
        res.data.forEach((elem) => {
          if (
            elem.total &&
            elem.question ===
              "Percent of adults aged 18 years and older who have obesity" &&
            elem.yearstart === "2018" &&
            elem.locationabbr !== "VI" &&
            elem.locationabbr !== "GU" &&
            elem.locationabbr !== "US"
          ) {
            obesityObj.labels.push(elem.locationdesc);
            obesityObj.datasets[0].data.push(elem.data_value);
            stateObesityObj[elem.locationabbr] = {
              abbr: elem.locationabbr,
              percentage: elem.data_value,
              stateName: elem.locationdesc,
            };
          }
        });
        this.setState({
          obesityData: obesityObj,
          allObesityData: stateObesityObj,
        });
        console.log(obesityObj);
      });

    axios
      .get(
        `https://chronicdata.cdc.gov/resource/wsas-xwh5.json?year=2018&gender=Overall&race=All Races&Age=All Ages`
      )
      .then((res) => {
        console.log(res.data);
        this.extractSmokingData("US", res.data);
        this.setState({ masterSmokingArray: res.data });
      });
  }

  render() {
    return (
      <>
        <Grid container>
          <Grid item>
            <SmokingChart
              pieChartData={this.state.smokingData}
              selectedState={this.state.selectedState}
            />
            <ObesityChart chartData={this.state.obesityData} />
            <ChartWrapper
              obesityChartData={this.state.singleObesityChartData}
              setMasterSelectState={this.masterSelectState}
            />
            <DeathBySexState />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default App;
