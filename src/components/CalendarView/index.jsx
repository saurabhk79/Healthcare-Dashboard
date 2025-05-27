import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./calendarView.module.css";
import React from "react";

const CalendarView = () => {
  const calendar = [
    {
      day: "Mon",
      date: "25",
      selected: false,
      slots: [
        {
          time: "10:00",
          status: "open",
        },
        {
          time: "11:00",
          status: "open",
        },
        {
          time: "12:00",
          status: "open",
        },
      ],
    },
    {
      day: "Tue",
      date: "26",
      selected: true,
      slots: [
        {
          time: "08:00",
          status: "open",
        },
        {
          time: "09:00",
          status: "booked",
        },
        {
          time: "10:00",
          status: "open",
        },
      ],
    },
    {
      day: "Wed",
      date: "27",
      selected: false,
      slots: [
        {
          time: "12:00",
          status: "open",
        },
        {
          time: "-",
          status: "closed",
        },
        {
          time: "13:00",
          status: "open",
        },
      ],
    },
    {
      day: "Thurs",
      date: "28",
      selected: false,
      slots: [
        {
          time: "10:00",
          status: "open",
        },
        {
          time: "11:00",
          status: "booked",
        },
        {
          time: "-",
          status: "closed",
        },
      ],
    },
    {
      day: "Fri",
      date: "29",
      selected: false,
      slots: [
        {
          time: "-",
          status: "closed",
        },
        {
          time: "14:00",
          status: "open",
        },
        {
          time: "16:00",
          status: "open",
        },
      ],
    },
    {
      day: "Sat",
      date: "30",
      selected: false,
      slots: [
        {
          time: "12:00",
          status: "booked",
        },
        {
          time: "14:00",
          status: "open",
        },
        {
          time: "15:00",
          status: "open",
        },
      ],
    },
    {
      day: "Sun",
      date: "31",
      selected: false,
      slots: [
        {
          time: "09:00",
          status: "booked",
        },
        {
          time: "10:00",
          status: "open",
        },
        {
          time: "11:00",
          status: "open",
        },
      ],
    },
  ];
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
                <>
                <li key={i} className={`${slot.status === 'booked' ? styles.booked : ''}`}>{slot.status === "closed" ? "--" : slot.time}</li>
              </>))}
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
