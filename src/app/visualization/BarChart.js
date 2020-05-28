import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';


class BarChart extends Component {
   constructor(props){
      super(props)
   }
   getMaxY(data){
      return data.reduce((max, b) => Math.max(max, b.value), data[0].value);
    }
   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart = () => {
      const node = this.node
      const dataMax = this.getMaxY(this.props.data.dataset)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])
   select(node)
      .selectAll('rect')
      .data(this.props.data.dataset)
      .enter("")
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(this.props.dataset)
      .exit()
      .remove()
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25)
   }
render() {
      return <svg ref={node => this.node = node}
      width={1000} height={1000}>
      </svg>
   }
}
export default BarChart