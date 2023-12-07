"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Corrected import
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';
import fetchNewsData from './api'; 

	@@ -26,10 +27,10 @@ const News = () => {
    return (
        <>
            <Navbar />
                <div className={styles.combinedWrapper} >
                <div className={styles.overlay} >
                <div className={styles.contentContainer} > 
                <h3 className={styles.newsHeading}>Some "Global <span className={styles.highlight}>News</span>"😏</h3>
                        {articles.map((article, index) => (
                            <div key={index} className={styles.newsItem}>
                                <h2>{article.title}</h2>
	@@ -39,7 +40,8 @@ const News = () => {
                        ))}
                    </div>
                </div>
                </div>
            <Footer />
        </>
    );
}
export default News;