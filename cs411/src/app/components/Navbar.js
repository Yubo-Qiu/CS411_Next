import Link from 'next/link';
import styles from './Navbar.module.css'; // Adjust the import path as needed

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link legacyBehavior href={"/"} >
            <a className={styles.navLink}>Daddy's Stock</a>
          </Link>
        </h1>
        <ul className={styles.navbarUL}>
          <li className={styles.navbarItem}>
            <Link legacyBehavior href={"/"} > 
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>

          <li className={styles.navbarItem}>
            <Link legacyBehavior href={"/news"} >
              <a className={styles.navLink}>News</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
