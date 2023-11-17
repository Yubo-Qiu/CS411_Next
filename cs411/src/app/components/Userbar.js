'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useContext, useState } from 'react';
import { getAuth } from "firebase/auth";

import styles from './Userbar.module.css';

const Userbar = () => {

    const auth = getAuth();
    const [loading, setLoading] = useState(true);
    const user = auth.currentUser;
    const username = user?.displayName || "Guest";
    console.log("Current User: ", auth.currentUser);                                   

    return (
      <aside className={styles.sidebar}>
        <div className={styles.profileContainer}>
          <img src="icon.png" alt="Profile Image" className={styles.profileImage} />
        </div>
        <div className={styles.username}>{username}</div>
        <div className={styles.info}>
          <p className={styles.infoLine}>Deposit:</p>
          <p className={styles.infoLine}>Friends:</p>
          <div className={styles.friends}>
            <div className={styles.friendCard}>Friend 1</div>
            <div className={styles.friendCard}>Friend 2</div>
            <div className={styles.friendCard}>Friend 3</div>
          </div>
        </div>
      </aside>
    );
  }
  
  export default Userbar;