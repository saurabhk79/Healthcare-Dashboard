import React from "react";
import styles from "./upcomingSchedule.module.css";

const UpcomingScheduleView = () => {
  return (
    <div className={styles.scheduleWrapper}>
      <h2 className={styles.heading}>The Upcoming Schedule</h2>

          <h4 className={styles.dayLabel}>On Thursday</h4>
        <div className={styles.dayBlock}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h4>Health checkup complete</h4>
              <div>🩺</div>
            </div>
            <small>11:00AM</small>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h4>Ophthalmologist</h4>
              <div>👁️</div>
            </div>
            <small>14:00PM</small>
          </div>
        </div>

          <h4 className={styles.dayLabel}>On Saturday</h4>
        <div className={styles.dayBlock}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h4>Cardiologist</h4>
              <div>❤️</div>
            </div>
            <small>12:00AM</small>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h4>Neurologist</h4>
              <div>🧠</div>
            </div>
            <small>16:00PM</small>
          </div>
        </div>
    </div>
  );
};

export default UpcomingScheduleView;
