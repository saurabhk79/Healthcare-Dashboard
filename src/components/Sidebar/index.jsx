import React from "react";
import Logo from "../Logo";
import styles from "./sidebar.module.css";
import {
  ArrowDownUp,
  CalendarDays,
  LayoutGrid,
  MessageCircleMore,
  Phone,
  Settings,
  SquarePlus,
} from "lucide-react";

const Sidebar = () => {
  const sidebarData = [
    {
      title: "General",
      options: [
        {
          title: "Dashboard",
          icon: <LayoutGrid />,
        },
        {
          title: "History",
          icon: <ArrowDownUp />,
        },
        {
          title: "Calendar",
          icon: <CalendarDays />,
        },
        {
          title: "Appointments",
          icon: <SquarePlus />,
        },
        {
          title: "Statistics",
          icon: <SquarePlus />,
        },
      ],
    },
    {
      title: "Tools",
      options: [
        {
          title: "Chat",
          icon: <MessageCircleMore />,
        },
        {
          title: "Support",
          icon: <Phone />,
        },
      ],
    },
  ];
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
                    <li key={index} className={`${op.title === 'Dashboard' ? styles.selected : ''}`}>
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
