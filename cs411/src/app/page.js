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
            Dive into the universe through Astro Blog, where we explore the wonders of space, 
            unravel the mysteries of the cosmos, and share insights on the latest astronomical 
            discoveries. Whether you're a seasoned astronomer or just starting out, 
            there's something here for everyone. Join us on this stellar journey.
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
