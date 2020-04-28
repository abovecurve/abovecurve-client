import React from "react";
import styles from "./navbar.module.scss";
import logo_512 from "./assets/ac_logo_512.png";

const Navbar = (props) => {
  return (
    <div className={styles.Navbar}>
      <img src={logo_512} alt="Above Curve" />
      <div className={styles.menuButton} aria-label="Menu">
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default Navbar;
