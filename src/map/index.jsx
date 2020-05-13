import React, { useEffect } from "react";
import styles from "./map.module.scss";
import { ReactComponent as USMapSVG } from "./assets/US_map-01.svg";

const Map = (props) => {
  useEffect(() => {
    let map = document.getElementsByTagName("svg");
    let paths = map[0].querySelectorAll("path");

    for (let key of paths.keys()) {
      let bbox = paths[key].getBBox();

      let center = {
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2,
      };

      // changes dynamically based on data provided by dataset
      let size = 10;

      let svgns = "http://www.w3.org/2000/svg";
      let dot = document.createElementNS(svgns, "circle");
      dot.setAttribute("cx", center.x);
      dot.setAttribute("cy", center.y);
      dot.setAttribute("fill", "#ff0000");
      dot.setAttribute("fill-opacity", ".3");
      dot.setAttribute("stroke", "#ff0000");
      dot.setAttribute("stroke-width", "1");
      dot.setAttribute("r", size);
      dot.setAttribute("data-testid", `circle`);

      let title = document.createElement("title");
      title.innerHTML = `circle${key}`;

      dot.appendChild(title);
      map[0].appendChild(dot);
    }
  });

  return (
    <div className={styles.Map}>
      <USMapSVG className={styles.US_map} data-testid="USMapSVG" />
    </div>
  );
};

export default Map;
