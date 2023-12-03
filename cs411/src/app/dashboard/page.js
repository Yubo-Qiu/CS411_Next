"use client"


import Userbar from '../components/Userbar'; 
import Sidebar from '../components/Sidebar';
import styles from './page.module.css'; 

import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import fetchStockData from './api'; 



const Dashboard = () => {

  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchStockData('TSLA'); // Fetch the data
        // Transform the data to fit the chart requirements
        const transformedData = Object.entries(apiData['Time Series (5min)']).map(([date, data]) => { 
          return {
            x: new Date(date), // use 'date' here, which represents the timestamp
            y: parseFloat(data['4. close']) // parse the closing value for the y-axis
          };
        }).reverse();
        setGraphData([{ data: transformedData }]); // Set the transformed data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartOptions = {
    chart: {
      id: 'basic-line',
      type: 'line',
      height: 350,
      toolbar: {
        show: false // Hides the toolbar for more space
      },
    },
    grid: {
      padding: {
        left: 10, // Adjust left padding
        right: 10, // Adjust right padding
        paddingBottom: 20,
      },
    },
    xaxis: {
      labels: {
        formatter: function (val) {
          return new Date(val).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // Formats the date as "Jan 1"
        },
        trim: true, // Trims the labels if they overflow
        rotate: -45, // Rotates labels
        minHeight: 100,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Stock for TSLA for today',
      align: 'center',
    },
    markers: {
      size: 1,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };


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
            {typeof window !== "undefined" && (
              <Chart options={chartOptions} series={graphData} type="line" />
            )}
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
  