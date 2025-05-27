import React from "react";
import styles from "../styles/activityChart.module.css";


const ActivityChart = ({chartData}) => {
  const colored = (status) => {
    let result = "";

    switch (status) {
      case "bot_booked":
        result = "#00c6f2";
        break;
      case "top_booked":
        result = "#292c69";
        break;
      default:
        result = "#e8ebfb";
    }

    return result;
  };
  return (
    <div className={styles.activityChart}>
      <div className={styles.titleBar}>
        <h2>Activity</h2>
        <small>3 appointment on this week</small>
      </div>
      <div className={styles.chartWrapper}>
        {chartData.map((group, idx) => (
          <div className={styles.container}>
            <div className={styles.line1Container}>
              <div
                className={`${styles.line} ${styles.line1Segment}`}
                style={{ background: colored(group[0].statusA) }}
              ></div>
              <div
                className={`${styles.line} ${styles.line1Segment}`}
                style={{ background: colored(group[0].statusB) }}
              ></div>
            </div>

            <div
              className={`${styles.line} ${styles.line2}`}
              style={{ background: colored(group[1].status) }}
            ></div>

            <div className={styles.line3Container}>
              <div
                className={`${styles.line} ${styles.line3Segment}`}
                style={{ background: colored(group[2].statusA) }}
              ></div>
              <div
                className={`${styles.line} ${styles.line3Segment}`}
                style={{ background: colored(group[2].statusB) }}
              ></div>
            </div>

            <div
              className={`${styles.line} ${styles.line4}`}
              style={{ background: colored(group[3].status) }}
            ></div>
          </div>
        ))}
      </div>

      <ul className={styles.days}>
        {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, idx) => (
          <li key={idx}>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityChart;
