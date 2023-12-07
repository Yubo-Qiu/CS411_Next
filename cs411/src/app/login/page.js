'use client';

import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import styles from './page.module.css'; 
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase'
import { database } from '../firebase';
import { ref, set } from 'firebase/database';

function Login() {
  const router = useRouter();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        writeUserData(user);
        // Handle the successful authentication here
        // You can access user info with result.user
        if (typeof window !== 'undefined') {
          window.location.href = '/dashboard';  
        } 

      })
      .catch((error) => {
        // H rs here
        console.error(error);
      });
  };



  const writeUserData = (user) => {
    set(ref(database, 'users/' + user.uid), {
      name: user.displayName,
      email: user.email,
    })    
    .then(() => {
        alert("User data stored successfully.");
    })
    .catch((error) => {
        alert("Error storing user data:");
        console.error(error);
    });
  };


  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle();

  };



  return (
    <>
      <Navbar />
      <div className={styles.background}>
      <div className={styles.formWrapper}>
        <form method="POST" className={styles.loginForm} action="/dashboard">
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.formLabel}>Username</label>
            <input type="text" id="username" name="username" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>Password</label>
            <input type="password" id="password" name="password" className={styles.input} required />
          </div>
          <div className={styles.formAction}>
            <button type="submit" className={styles.loginButton}>Login</button>
          </div>
          <div className={styles.googleSignIn}>
            <p>or sign in with:</p>
            <div className={styles.iconContainer} onClick = {handleGoogleSignIn}>
              <img src="google.jpg" alt="Sign in with Google" />
            </div>
            <div className={styles.iconContainer} >
              <img src="facebook.jpg" alt="Sign in with Google" />
            </div>
          </div>
        </form>
      </div>
      </div>
      <Footer />
    </>
  );
}



export default Login;