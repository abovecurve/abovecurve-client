import React from "react";
import styles from "./landing.module.scss";

import USMap from "../assets/Blank_US_Map.png";

const Landing = (props) => {
  return (
    <div className={styles.Landing}>
      <img src={USMap} alt="" className={styles.US_map} />
    </div>
  );
};

export default Landing;
