import StateAbr from "../../utils/StateAbr.json";
import React from "react";
import axios from "axios";
import Chart from "./BarChart";

export default class DeathByAgeGroup extends React.Component {
  state = {
    chartData: {},
    deathData: {
      labels: [],
      datasets: [
        {
          label: "Death By Age Group",
          data: [],
          backgroundColor: "rgba(54, 162, 235, 0.4)",
        },
      ],
    },
    locationDeathData: {
      labels: [],
      datasets: [
        {
          label: "Death By Age Group",
          data: [],
          backgroundColor: "rgba(54, 162, 235, 0.4)",
        },
      ],
    },
    masterDeathArray: [],
  };

  componentDidMount() {
    axios
      .get(`https://data.cdc.gov/resource/9bhg-hcku.json?$limit=10000`)
      .then((res) => {
        const deathByAgeObj = {
          labels: [],
          datasets: [
            {
              label: [],
              data: [],
              backgroundColor: "rgba(54, 162, 235, 0.4)",
            },
          ],
        };
        //const deathByAgeStateObj = { ...deathByAgeObj }
        this.setState({ masterDeathArray: res.data });

        res.data.forEach((elem) => {
          if (
            elem.state.toLowerCase() === "united states" &&
            elem.sex.toLowerCase() === "all sexes"
          ) {
            deathByAgeObj.labels.push(elem.age_group);
            deathByAgeObj.datasets[0].data.push(elem.covid_19_deaths);
          }
        });
        this.setState({ deathData: deathByAgeObj, chartData: deathByAgeObj });
      });
  }

  componentDidUpdate(prevProps) {
    // console.log("Props", prevProps, this.props);
    // console.log(this.state.chartData);
    // console.log(this.state.masterDeathArray);
    if (
      this.props.selectedLocation === null ||
      this.props.selectedLocation[0] === prevProps.selectedLocation[0]
    ) {
      return;
    }
    const deathByAgeObj = {
      labels: [],
      datasets: [
        {
          label: ["Male"],
          data: [],
          backgroundColor: "rgba(54, 162, 235, 0.4)",
        },
        {
          label: ["Female"],
          data: [],
          backgroundColor: "rgba(255, 99, 132, 0.4)",
        },
      ],
    };
    const ageGroupDeathObj = {};

    this.state.masterDeathArray.forEach((elem) => {
      if (
        elem.state.toLowerCase() ===
        StateAbr[this.props.selectedLocation[0]].toLowerCase()
      ) {
        if (
          elem.age_group &&
          elem.covid_19_deaths &&
          elem.age_group.toLowerCase() !== "male, all ages" &&
          elem.age_group.toLowerCase() !== "female, all ages" &&
          elem.age_group.toLowerCase() !== "all ages"
        ) {
          ageGroupDeathObj[elem.age_group] = {
            ...ageGroupDeathObj[elem.age_group]
          }
          if (elem.sex.toLowerCase() === "male") {
            ageGroupDeathObj[elem.age_group].male = elem.covid_19_deaths;
          } else if ((elem.sex.toLowerCase() === "female")) {
            ageGroupDeathObj[elem.age_group].female = elem.covid_19_deaths;
        }
      }
      }
    });
    console.log(ageGroupDeathObj)
    const orderedAgeGroupKeys = Object.keys(ageGroupDeathObj).sort((a, b) => {
      const aInt = parseInt(a.split("-")[0])
      const bInt = parseInt(b.split("-")[0])
      if (isNaN(aInt)) {
        return -1;
      }
      if (isNaN(bInt)) {
        return 1;
      }
      return aInt - bInt;
    } )
    console.log(orderedAgeGroupKeys)
    const chartData = orderedAgeGroupKeys.reduce(
      (obj, key) => {
        obj.labels.push(key);
        obj.datasets[0].data.push(ageGroupDeathObj[key].male || 0);
        obj.datasets[1].data.push(ageGroupDeathObj[key].female || 0);
        return obj;
      },
      deathByAgeObj
    )
    console.log(chartData)
    this.setState({ chartData: chartData });
  }

  render() {
    return (
      <>
        <Chart
          width={100}
          options={{
            title: {
              display: true,
              text: "Covid-19 Deaths in the United States by Age Group",
              fontSize: 20,
            },
            legend: {
              display: true,
            },
            scales: {
              xAxes: [
                {
                  stacked: true,
                },
              ],
              yAxes: [{
                stacked: true
              },
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
          data={this.state.chartData}
        />
      </>
    );
  }
}
