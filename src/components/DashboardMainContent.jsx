import styles from "../styles/dashboardMainContent.module.css";
import Header from "./Header";
import { ArrowRight, ChevronDown } from "lucide-react";
import Anatomical from "./Anatomical";
import UpcomingScheduleView from "./UpcomingScheduleView";
import CalendarView from "./CalendarView";
import Profile from "./Profile";
import ActivityChart from "./ActivityChart";

import { calendar, schedule } from "../data/appointment";
import { healthCards, chartData } from "../data/healthData";

const DashboardMainContent = () => {
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
          <div>
            <div className={styles.healthCardWrapper}>
              {healthCards.map((card, idx) => {
                return (
                  <div className={styles.healthCard} key={idx}>
                    <div>
                      <div className={styles.header}>
                        <span>{card.icon}</span>
                        <span className={styles.title}>{card.title}</span>
                      </div>
                      <p className={styles.date}>Date: {card.date}</p>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressDone}
                        style={{ background: card.progressPaint }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: "right", fontSize: "12px" }}>
              Details <ArrowRight size={12} />
            </div>
          </div>
        </div>
        <ActivityChart chartData={chartData} />
      </div>
      <div className={styles.dateTiming}>
        <div className={styles.profile}>
          <Profile />
        </div>
        <CalendarView calendar={calendar} />
        <UpcomingScheduleView schedule={schedule} />
      </div>
    </div>
  );
};

export default DashboardMainContent;
