import React from "react";
import styles from "./map.module.scss";
import { ReactComponent as USMapSVG } from "./assets/US_map-01.svg";
import MapMenu from "../mapMenu";

const Map = (props) => {
  return (
    <div className={styles.Map}>
      <USMapSVG className={styles.US_map} data-testid="USMapSVG" />
      <MapMenu />
    </div>
  );
};

export default Map;
