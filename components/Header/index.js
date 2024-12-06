import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header({ isLoggedIn, logoutUserFunction }) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.headerTitle}>Users and Auth</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {isLoggedIn && (
            <>
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li className={styles.navItem}>
                <a
                  className={`${styles.navLink} ${styles["navLink--button"]}`}
                  onClick={logoutUserFunction}
                >
                  Log Out
                </a>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <>
              <li className={styles.navItem}>
                <Link href="/login" className={styles.navLink}>
                  Login
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/createUser" className={styles.navLink}>
                  Create User
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
