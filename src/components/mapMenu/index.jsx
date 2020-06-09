import React from "react";
import styles from "./mapMenu.module.scss";
import { PropTypes } from "prop-types";

import { connect } from "react-redux";

let MapMenu = (props) => {
  if (!props.menuOpen) {
    return null;
  }

  return (
    <div className={styles.MapMenu} data-testid="MapMenu">
      <h2>DATASETS</h2>
      <form className={styles.datasets_form}>
        {props.allDatasets &&
          props.allDatasets.map((ph, index) => {
            return (
              <label className={styles.datasets_label} key={index}>
                <input type="checkbox" name={index + "_" + ph} id={index} />
                <div className={styles.datasets_styledCheckbox} />
                {ph}
              </label>
            );
          })}
      </form>
    </div>
  );
};

MapMenu.propTypes = {
  datasets: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menuOpen,
    allDatasets: state.allDatasets,
  };
};

export default MapMenu = connect(mapStateToProps, null)(MapMenu);
