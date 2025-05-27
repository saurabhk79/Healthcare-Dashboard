import React from "react";
import styles from "./activityChart.module.css";

const chartData = [
  [
    { status: "opened" },
    { status: "bot_booked" },
    { status: "top_booked" },
    { status: "opened" },
  ],
  [
    { status: "bot_booked" },
    { status: "opened" },
    { status: "top_booked" },
    { status: "bot_booked" },
  ],
  [
    { status: "top_booked" },
    { status: "top_booked" },
    { status: "opened" },
    { status: "bot_booked" },
  ],
  [
    { status: "opened" },
    { status: "bot_booked" },
    { status: "top_booked" },
    { status: "opened" },
  ],
  [
    { status: "bot_booked" },
    { status: "opened" },
    { status: "top_booked" },
    { status: "bot_booked" },
  ],
  [
    { status: "top_booked" },
    { status: "top_booked" },
    { status: "opened" },
    { status: "bot_booked" },
  ],
  [
    { status: "opened" },
    { status: "bot_booked" },
    { status: "top_booked" },
    { status: "opened" },
  ],
  [
    { status: "bot_booked" },
    { status: "opened" },
    { status: "top_booked" },
    { status: "bot_booked" },
  ],
];

// const CustomActivityChart = () => {
//   return (
//     <div className={styles.chartWrapper}>
//       {chartData.map((group, i) => (
//         <div key={i} className={styles.barGroup}>
//           <div className={styles.topBottom}>
//             <div
//               className={`${styles.bar} ${
//                 group[0].status === "top_booked" ? styles.colored : ""
//               }`}
//             ></div>
//             <div
//               className={`${styles.bar} ${
//                 group[0].status === "bot_booked" ? styles.colored : ""
//               }`}
//             ></div>
//           </div>

//           {/* Second block: centered */}
//           <div className={styles.middleOne}>
//             <div
//               className={`${styles.bar} ${
//                 group[1].status !== "opened" ? styles.colored : ""
//               }`}
//             ></div>
//           </div>

//           {/* Third block: lower middle + top+bottom */}
//           <div className={styles.middleTwo}>
//             <div
//               className={`${styles.bar} ${
//                 group[2].status === "top_booked" ? styles.colored : ""
//               }`}
//             ></div>
//             <div
//               className={`${styles.bar} ${
//                 group[2].status === "bot_booked" ? styles.colored : ""
//               }`}
//             ></div>
//           </div>

//           <div className={styles.bottomOne}>
//             <div
//               className={`${styles.bar} ${
//                 group[3].status !== "opened" ? styles.colored : ""
//               }`}
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CustomActivityChart;

const activityChart = () => {
  return (
    <div className={styles.chartWrapper}>

      {chartData.map((ch, idx) => (
        <div key={idx}>
          <div className={styles.topBottom}>
            
          </div>
        </div>
      ))}
    </div>
  )
}