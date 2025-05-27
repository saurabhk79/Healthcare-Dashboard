import React from "react";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      Health<span className={styles.logo_ex}>care.</span>
    </div>
  );
};

export default Logo;
