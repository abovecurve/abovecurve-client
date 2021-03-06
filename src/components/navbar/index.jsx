import React from "react";
import styles from "./navbar.module.scss";
import logo_512 from "./assets/ac_logo_512.png";

import { connect } from "react-redux";
import { actionsToggleMenu } from "../../actions";
import PropTypes from "prop-types";

let Navbar = (props) => {
  let menuButtonClicked = () => {
    return props.dispatchToggleMenu(!props.menuOpen);
  };

  return (
    <nav className={styles.Navbar} data-testid="navbar">
      <img src={logo_512} alt="Above Curve" data-testid="ac-logo" />
      <div
        className={styles.menuButton}
        aria-label="Menu"
        role="button"
        onClick={menuButtonClicked}
      >
        {!props.menuOpen ? (
          <>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </>
        ) : (
          <div className={styles.x} data-testid="xBtn" />
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menuOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchToggleMenu: (bool) => {
      return dispatch(actionsToggleMenu(bool));
    },
  };
};

Navbar.propTypes = {
  menuOpen: PropTypes.bool,
};

export default Navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);
