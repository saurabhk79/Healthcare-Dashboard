import React from "react";
import styles from "../styles/upcomingSchedule.module.css";

const UpcomingScheduleView = ({ schedule }) => {
  return (
    <div className={styles.scheduleWrapper}>
      <h2 className={styles.heading}>The Upcoming Schedule</h2>

      {schedule.map((sch, idx) => (
        <div key={idx}>
          <h4 className={styles.dayLabel}>On {sch.day}</h4>
          <div className={styles.dayBlock}>
            {sch.scheduleList.map((list, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.cardHeader}>
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
