import React from "react";
import styles from "./dataOptions.module.scss";
import { PropTypes } from "prop-types";

import Map from "../map";
import MapMenu from "../mapMenu";

const DataOptions = (props) => {
  return (
    <div className={styles.DataOptions}>
      <Map />
      <MapMenu datasets={props.datasets} />
    </div>
  );
};

DataOptions.propTypes = {
  datasets: PropTypes.array,
  chartType: PropTypes.string,
};

export default DataOptions;
