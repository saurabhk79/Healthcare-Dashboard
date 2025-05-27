import React from "react";
import Logo from "./Logo";
import styles from "../styles/sidebar.module.css";
import { Settings } from "lucide-react";

const Sidebar = ({ sidebarData }) => {
  return (
    <div className={styles.sidemenu}>
      <div className={styles.sideoptions}>
        <Logo />
        {sidebarData.map((side, idx) => {
          return (
            <div key={idx}>
              <small>{side.title}</small>

              <ul>
                {side.options.map((op, index) => {
                  return (
                    <li
                      key={index}
                      className={`${
                        op.title === "Dashboard" ? styles.selected : ""
                      }`}
                    >
                      {op.icon} &nbsp;{op.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className={styles.settings}>
        <Settings /> &nbsp;Settings
      </div>
    </div>
  );
};

export default Sidebar;
