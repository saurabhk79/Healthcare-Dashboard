import { Bell, Menu, SearchIcon, User } from "lucide-react";
import React from "react";
import Profile from "./Profile";
import Logo from "./Logo";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.searchBar}>
        <SearchIcon />
        <input type="text" placeholder="Search" className={styles.input} />
        <Bell fill="blue" />
      </div>
      <div className={styles.profile}>
        <Profile />
      </div>
    </div>
  );
};

export default Header;
