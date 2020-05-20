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
      Map Menu
    </div>
  );
};

MapMenu.propTypes = {
  datasets: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menuOpen,
  };
};

export default MapMenu = connect(mapStateToProps, null)(MapMenu);
