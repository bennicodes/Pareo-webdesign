import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Name</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.userActions}>
        <button className={styles.actionButton}>Login</button>
        <button className={styles.actionButton}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
