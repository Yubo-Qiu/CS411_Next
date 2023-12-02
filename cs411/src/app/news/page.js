"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Corrected import
import Navbar from '../components/Navbar';
import styles from './page.module.css';
import fetchNewsData from './api'; 


const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await fetchNewsData(); // Use the imported function
                setArticles(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <>
            <Navbar />
            <div className={styles.background}>
                <div className={styles.formWrapper}>
                <h1>BBC News</h1>
                <div className={styles.contentContainer}> {/* Apply the new container here */}
                        {articles.map((article, index) => (
                            <div key={index} className={styles.newsItem}>
                                <h2>{article.title}</h2>
                                <p>{article.description}</p >
                                <p></p >
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default News;