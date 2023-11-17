import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';


const Sidebar = () => {
    return (
      <aside className={styles.sidebar}>
        <ul>
          <li>
            <Link href="/login">
              <button className={styles.logoutButton}>Log out</button>
            </Link>
          </li>
          {/* Add your other sidebar items here */}
        </ul>
      </aside>
    );
  }
  
  export default Sidebar;