import React from 'react';
import axios from 'axios';
// import BarChart from "./BarChart";
import Chart from "./Chart"

export default class DeathBySexState extends React.Component {
  state = {
    deathBySexState: [],
    //bcdata: {dataset: []},
    sexBarData: {
      labels: [],
      datasets: [{
        label: "Total Deaths in the US by Sex",
        data: []
      }],}
  }

  componentDidMount() {
    axios.get(`https://data.cdc.gov/resource/9bhg-hcku.json?$limit=10000`)
      .then(res => {
        const deathBySexStateUnfiltered = res.data;
        
        console.log(res.data)
        
        const deathBySexState = deathBySexStateUnfiltered.filter(elem => elem.sex === "Female Total" || elem.sex === "Male Total");
        const femaleDeaths = deathBySexState.filter(elem => elem.sex === "Female Total");
        const maleDeaths = deathBySexState.filter(elem => elem.sex === "Male Total");
        const deathByStateObj = {};

        res.data.forEach((elem) => {
          if ((elem.sex === "Female Total" || elem.sex === "Male Total") && (!elem.state.includes("United States"))) {
            console.log(elem)
            deathByStateObj[elem.state]={
              ...deathByStateObj[elem.state],
              [elem.sex.replace(" Total", "")] : elem
            }
          }
        })
        console.log(deathByStateObj)
        const chartData = Object.keys(deathByStateObj).reduce((obj, key) => {
            obj.labels.push(key)
            obj.datasets.push({
              backgroundColor: "#ffffff",
              label: key,
              data: [
              parseInt(deathByStateObj[key].Male.covid_19_deaths) || 0,
              parseInt(deathByStateObj[key].Female.covid_19_deaths) || 0,
              ]})
          return obj
        },{
          labels: [],
          datasets: [],
        })
        this.setState({sexBarData: chartData})




        // let dataset = deathBySexState.map((elem, index) => ({
        //   value: elem.covid_19_deaths,
        //   label: elem.state + " " + elem.sex,
        // }))
        // this.setState({ bcdata: {dataset} });


         console.log(deathBySexState)
        console.log(chartData)
      })
  }

  render() {
    return (
      <>
        <Chart
        width={100}
        options={{
            title:{
              display:true,
              text:'Covid-19 Deaths in the United States by Sex',
              fontSize:20
              },
            
            //   scales: {
            //     xAxes: [{
            //         stacked: true
            //     }],
            //     yAxes: [{
            //         stacked: true
            //     }]
            // }
            }}

              data={this.state.sexBarData}/>
        {/* {this.state.bcdata.dataset.length && <BarChart data={this.state.bcdata} size={[1000,10000]} />} */}
        <ul>
          { this.state.deathBySexState.map(uSState => <li>{uSState.state} {uSState.covid_19_deaths} {uSState.sex}</li>)}
        </ul>
      </>
    )
  }
}