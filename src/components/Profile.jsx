import { Menu, User } from "lucide-react";
import styles from "../styles/profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.user_icon}>
        <User />
      </div>
      <div className={styles.plus_icon}>+</div>
    </div>
  );
};

export default Profile;
