import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import {
  ArrowDownUp,
  CalendarDays,
  LayoutGrid,
  MessageCircleMore,
  Phone,
  Settings,
  SquarePlus,
} from "lucide-react";

const App = () => {
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
    <div style={{ display: "flex" }}>
      <Sidebar sidebarData={sidebarData} />
      <DashboardMainContent />
    </div>
  );
};

export default App;
