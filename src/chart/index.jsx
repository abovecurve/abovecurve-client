import React from "react";
import styles from "./chart.module.scss";
import { PropTypes } from "prop-types";

import DataOptions from "../dataOptions";

const Chart = (props) => {
  return (
    <div className={styles.Chart} data-testid="chart">
      <DataOptions datasets={props.datasets} chartType={props.chartType} />
    </div>
  );
};

Chart.propTypes = {
  datasets: PropTypes.array,
  chartType: PropTypes.string,
};

export default Chart;
