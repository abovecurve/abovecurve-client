import React from "react";
import logo from "./assets/ac_logo_24.png";

// <footer/> was originally BottomNavigation component, was causing a test error so removed until BottomNavigationAction can be implemented
// import BottomNavigation from "@material-ui/core/BottomNavigation";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <img src={logo} alt="Above Curve" data-testid="ac-footer-logo"></img>
    </footer>
  );
}
