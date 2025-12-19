import {
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <p>
            E-post:{" "}
            <a href="mailto:kontaktpareo@gmail.com" className={styles.mail}>
              kontaktpareo@gmail.com
            </a>
          </p>
        </div>

        <div className={styles.center}>
          <p>© {new Date().getFullYear()} Pareo</p>
        </div>

        <div className={styles.right}>
          <a
            href="https://www.linkedin.com/company/pareowebdesign/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} ${styles.linkedin}`}
            data-label="LinkedIn"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon className={styles.linkIcon} icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/pareo_webdesign/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} ${styles.instagram}`}
            data-label="Instagram"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              className={styles.linkIcon}
              icon={faSquareInstagram}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
