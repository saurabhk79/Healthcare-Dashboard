import { BicepsFlexed, Heart, ZoomIn } from "lucide-react";
import React from "react";
import styles from '../styles/anatomical.module.css';

const Anatomical = () => {
  return (
    <div className={styles.anatomicalWrapper}>
      <img src="anatomical.png" alt="anamtomical" />
      <ZoomIn className={styles.zoomin} />

      <div className={styles.anatomicalCardA}>
        ❤️ Healthy Heart
      </div>
      <div className={styles.anatomicalCardB}>
        💪🏻 Healthy Leg
      </div>
    </div>
  );
};

export default Anatomical;
