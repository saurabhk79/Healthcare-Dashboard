import React from "react";
import styles from "./upcomingSchedule.module.css";

const UpcomingScheduleView = () => {
  const schedule = [
    {
      day: "Thursday",
      scheduleList: [
        {
          title: "Health Checkup Complete",
          icon: "💉",
          timing: "11:00 AM",
        },
        {
          title: "Ophthalmologist",
          icon: "👁️",
          timing: "14:00 PM",
        },
      ],
    },
    {
      day: "Saturday",
      scheduleList: [
        {
          title: "Cardiologist",
          icon: "❤️",
          timing: "12:00 AM",
        },
        {
          title: "Neurologist",
          icon: "👨‍⚕️",
          timing: "16:00 PM",
        },
      ],
    },
  ];
  return (
    <div className={styles.scheduleWrapper}>
      <h2 className={styles.heading}>The Upcoming Schedule</h2>

      {schedule.map((sch, idx) => (
        <>
          <h4 className={styles.dayLabel}>On {sch.day}</h4>
          <div className={styles.dayBlock}>
            {sch.scheduleList.map((list, index) => (
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h4>{list.title}</h4>
                  <div>{list.icon}</div>
                </div>
                <small>{list.timing}</small>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default UpcomingScheduleView;
