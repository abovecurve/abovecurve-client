import React from "react";
import axios from "axios";
import Chart from "./Chart";

export default class ObesityChart extends React.Component {
  render() {
    return (
      <Chart
        width={100}
        options={{
          title: {
            display: true,
            text: "Obesity in the United States",
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
        data={this.props.chartData}
      />
    );
  }
}
