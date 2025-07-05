import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
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
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.userActions}>
        <Button className={styles.actionButton}>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
