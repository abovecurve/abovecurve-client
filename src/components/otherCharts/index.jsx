import React from "react";
import styles from "./otherCharts.module.scss";
import { connect } from "react-redux";

let OtherCharts = (props) => {
  return (
    <div className={styles.OtherCharts} data-testid="otherCharts-div">
      {props.state}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.state,
  };
};

export default OtherCharts = connect(mapStateToProps, null)(OtherCharts);
