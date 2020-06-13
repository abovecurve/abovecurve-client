import React from 'react';
import { Doughnut } from 'react-chartjs-2';


export default class PieChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }
   
    componentDidMount() {
      //console.log(this.chartRef); // returns a Chart.js instance reference
      
    }
    
    render() {
      return (<Doughnut ref={this.chartRef} data={this.props.data} options={this.props.options} />)
    }
}