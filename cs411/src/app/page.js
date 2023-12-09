import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import styles from './page.module.css'; 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daddy's Stock</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.intro}>
          <h1 className={styles.logoTitle}>
            Welcome to <span className={styles.highlight}>Daddy's Stock</span>! 😈
          </h1>
          <p className={styles.textContent}>
          At Daddy's Stock, we are dedicated to bringing you the latest and most comprehensive global news coverage. Our 
          platform is designed to keep you informed about the world's events, with a special focus on insightful analysis and 
          diverse perspectives.
          </p>
          <p className={styles.textContent}>
          But that's not all! For finance enthusiasts and investors, we offer a specialized feature that allows you to track 
          Tesla's stock price in real-time. Our intuitive stock chart provides a detailed view of Tesla's stock performance, 
          helping you make informed decisions.
          </p>
          <p className={styles.textContent}>
          Whether you're keeping up with international headlines or monitoring the fluctuations in the stock market, Daddy's Stock 
          is your reliable source for up-to-date information. Stay informed, stay ahead!
          </p>
          
          <Link legacyBehavior href={"/login"} >
            <a className={styles.blueButton}>Let's Go 💫</a>
          </Link>
        </section>
        <section className={styles.fullWidthImageSection}>
          <Image src="/back.png" alt="Descriptive Image Text" width={1100} height={619} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
