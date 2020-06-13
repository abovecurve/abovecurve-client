import React from 'react';
import { Bar } from 'react-chartjs-2';


class Chart extends React.Component {
    constructor(props) {
      super(props);
      this.chartReference = React.createRef();
    }
   
    componentDidMount() {
      console.log(this.chartReference); // returns a Chart.js instance reference
    }
   
    render() {
      return (<Bar ref={this.chartReference} data={this.props.data} options={this.props.options} />)
    }
  }

export default Chart;