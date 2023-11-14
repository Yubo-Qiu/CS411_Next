// pages/login.js
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar'; // Update the import path as necessary
import Footer from '../components/Footer'; // Update the import path as necessary
import styles from './login.module.css'; // Update the import path as necessary
//import { signInWithGoogle } from '../firebaseAuth'; // Adjust this path if necessary

export default function Login() {
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  return (
    <>
      <Head>
        <title>Login - Daddy's Stock</title>
      </Head>
      <Navbar />
      <div className={styles.formWrapper}>
        <form method="POST" className={styles.loginForm} action="/dashboard">
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className={styles.formAction}>
            <button type="submit" className={styles.loginButton}>Login</button>
          </div>
          <div className={styles.googleSignIn}>
            <p>or sign in with:</p>
            <button onClick={handleGoogleSignIn} className={styles.googleButton} id="googleSignInButton">
              <div className={styles.iconContainer}>
                <Image src="/google.jpg" alt="Sign in with Google" width={50} height={50} />
              </div>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
