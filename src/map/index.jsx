import React, { useEffect } from "react";
import styles from "./map.module.scss";
import { ReactComponent as USMapSVG } from "./assets/US_map-01.svg";

const Map = (props) => {
  useEffect(() => {
    let map = document.getElementsByTagName("svg");
    let paths = map[0].querySelectorAll("path");

    paths.forEach((path) => {
      let bboxRec = path.getBBox();
      console.log(bboxRec);
    });
  });

  return (
    <div className={styles.Map}>
      <USMapSVG className={styles.US_map} data-testid="USMapSVG" />
    </div>
  );
};

export default Map;
