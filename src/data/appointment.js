export const calendar = [
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

export const schedule = [
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
