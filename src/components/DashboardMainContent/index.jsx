import styles from "./dashboardMainContent.module.css";
import Header from "../Header";
import { ChevronDown } from "lucide-react";
import Anatomical from "../Anatomical";
import UpcomingScheduleView from "../UpcomingScheduleView";
import CalendarView from "../CalendarView";
import Profile from "../Profile";
// import ActivityChart from "../ActivityChart";

const DashboardMainContent = () => {
  const healthCards = [
    {
      title: "Lungs",
      icon: "🫁",
      date: "26 Oct 2021",
      progress: "",
      progressPaint: "#b44e4f",
    },
    {
      title: "Teeth",
      icon: "🦷",
      date: "26 Oct 2021",
      progress: "",
      progressPaint: "#7ed1c2",
    },
    {
      title: "Bone",
      icon: "🦴",
      date: "26 Oct 2021",
      progress: "",
      progressPaint: "#ff7e5f",
    },
  ];

  return (
    <div className={styles.dashboardContent}>
      <div className={styles.diagrams}>
        <Header />
        <div className={styles.dashboardTitle}>
          <h2>Dashboard</h2>
          <small>
            This week <ChevronDown size={16} />
          </small>
        </div>

        <div className={styles.dashboardDiagram}>
          <Anatomical />
          <div className={styles.cardWrapper}>
            {healthCards.map((card, idx) => {
              return (
                <div className={styles.card} key={idx}>
                  <div>
                    <div className={styles.header}>
                      <span className={styles.icon}>{card.icon}</span>
                      <span className={styles.title}>{card.title}</span>
                    </div>
                    <p className={styles.date}>Date: {card.date}</p>
                  </div>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progress}
                      style={{ background: card.progressPaint }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <ActivityChart /> */}
      </div>
      <div className={styles.dateTiming}>
        <div className={styles.profile}>
          <Profile />
        </div>
        <CalendarView />
        <UpcomingScheduleView />
      </div>
    </div>
  );
};

export default DashboardMainContent;
