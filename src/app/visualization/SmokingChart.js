import React from "react";
import PieChart from "./PieChart";


export default class SmokingChart extends React.Component {
    render() {
        //console.log(this.props.pieChartData)
        return (
            <PieChart
                width={100}
                options={{
                    cutoutPercentage: 50,
                    title: {
                        display: true,
                        text: "Tobacco Use in the United States",
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                    }
                }}
                data={this.props.pieChartData}
            />
        );
    }
}