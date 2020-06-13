import React from "react";
import axios from "axios";
import Chart from "./BarChart";

export default class DeathBySexState extends React.Component {
  state = {
     deathBySexState: [],
    sexBarData: {
      labels: [],
      datasets: [
        {
          label: "Male",
          data: [],
          backgroundColor: "rgba(54, 162, 235, 0.4)",
        },
        {
          label: "Female",
          data: [],
          backgroundColor: "rgba(255, 99, 132, 0.4)",
        },
      ],
    },
  };

  componentDidMount() {
    axios
      .get(`https://data.cdc.gov/resource/9bhg-hcku.json?$limit=10000`)
      .then((res) => {
        console.log(res)
        const deathByStateObj = {};

        res.data.forEach((elem) => {
          if (
            (elem.sex === "Female" || elem.sex === "Male") && (elem.age_group === "All ages") &&
            !elem.state.includes("United States")
          ) {
            console.log(elem.sex)
            deathByStateObj[elem.state] = {
              ...deathByStateObj[elem.state],
              [elem.sex.replace(" Total", "")]: elem,
            };
          }
        });
        console.log("DBSO" , deathByStateObj);
        const chartData = Object.keys(deathByStateObj).reduce(
          (obj, key) => {
            obj.labels.push(key);

            obj.datasets[0].data.push(
              parseInt(deathByStateObj[key].Male.covid_19_deaths) || 0
            );
            obj.datasets[1].data.push(
              parseInt(deathByStateObj[key].Female.covid_19_deaths) || 0
            );

            return obj;
          },
          {
            ...this.state.sexBarData
          }
        );
        console.log("DBSO" , chartData);
        this.setState({ sexBarData: chartData });
      });
  }

  render() {
    return (
      <>
        <Chart
          width={100}
          options={{
            title: {
              display: true,
              text: "Covid-19 Deaths in the United States by Sex",
              fontSize: 20,
            },
            legend: {
              display: true,
            },
            scales: {
              xAxes: [
                {
                  stacked: false,
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
          data={this.state.sexBarData}
        />

      </>
    );
  }
}
