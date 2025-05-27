import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "../styles/calendarView.module.css";
import React from "react";

const CalendarView = ({calendar}) => {
  return (
    <div className={styles.container}>
      <div className={styles.calendarbar}>
        <h4>October 2023</h4>
        <div className={styles.icons}>
          <ArrowLeft size={16} />
          <ArrowRight size={16} />
        </div>
      </div>

      <div className={styles.calendarview}>
        {calendar.map((cal, idx) => (
          <div
            key={idx}
            className={`${styles.dayCard} ${
              cal.selected ? styles.selected : ""
            }`}
          >
            <small>{cal.day}</small>
            <h2>{cal.date}</h2>
            <ul>
              {cal.slots.map((slot, i) => (
                <li
                  key={i}
                  className={`${slot.status === "booked" ? styles.booked : ""}`}
                >
                  {slot.status === "closed" ? "--" : slot.time}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.appointments}>
        <div className={`${styles.appointment} ${styles.selectedAppointment}`}>
          <div className={styles.appointmentTop}>
            <h4>Dentist</h4>
            <div>🦷</div>
          </div>
          <small>09:00-11:00</small>
          <p>Dr. Cameron Williamson</p>
        </div>
        <div className={styles.appointment}>
          <div className={styles.appointmentTop}>
            <h4>Physiotherapy Appointment</h4>
            <div>💪🏻</div>
          </div>
          <small>11:00-12:00</small>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
