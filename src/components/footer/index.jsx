import React from "react";
import logo from "./assets/ac_logo_24.png";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import styles from "./footer.module.scss";


export default function Footer() {


  return (
    <BottomNavigation className={styles.Footer} showLabels>
      <img src={logo} alt="Above Curve" data-testid="ac-footer-logo"></img>
    </BottomNavigation>
  );
}