import React from "react";
import styles from "./map.module.scss";

import USMap from "./assets/Blank_US_Map.png";
import MapMenu from "../mapMenu";

const Map = (props) => {
  return (
    <div className={styles.Landing}>
      <img
        src={USMap}
        alt="Map of the United States "
        className={styles.US_map}
      />
      <MapMenu />
    </div>
  );
};

export default Map;
