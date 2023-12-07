import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import Userbar from '../components/Userbar'; 
import Sidebarbar from '../components/Userbar'; 
import dynamic from 'next/dynamic';
import { UserAuth } from "../context/AuthContext";
import Sidebar from '../components/Sidebar';
import styles from './page.module.css'; 

const Dashboard = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Sidebar />
        <Userbar />
        <main className={styles.main}>
          <div className={styles.infoRectangle}>
            <div className={styles.infoSection}>
              <div>Expected Gains:</div>
              <div>Margin of Errors:</div>
            </div>
            <div className={styles.infoSection}>
              <div>Capital Gains:</div>
              <div>Today's:</div>
            </div>          
            <div className={styles.infoSection}><span className={styles.highlight}>Position Size:</span></div>
          </div>  
          <div className={styles.graphRectangle}>
            {/* Your graph content goes here */}
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.actionButton}>Trade History</button>
            <button className={styles.actionButton}>Trade!</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
  