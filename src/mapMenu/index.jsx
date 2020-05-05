import React from "react";
import styles from "./mapMenu.module.scss";

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

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menuOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default MapMenu = connect(mapStateToProps, mapDispatchToProps)(MapMenu);
