import React from "react";
import styles from "../styles/upcomingSchedule.module.css";

const UpcomingScheduleView = ({ schedule }) => {
  return (
    <div className={styles.scheduleWrapper}>
      <h2 className={styles.scheduleHeading}>The Upcoming Schedule</h2>
      {schedule.map((sch, idx) => (
        <div key={idx}>
          <div className={styles.scheduleDay}>On {sch.day}</div>
          <div className={styles.cardWrapper}>
            {sch.scheduleList.map((list, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.cardTop}>
                  <h4>{list.title}</h4>
                  <div>{list.icon}</div>
                </div>
                <small>{list.timing}</small>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingScheduleView;
