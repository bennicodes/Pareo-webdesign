import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
          {/* <p> */}
          {/* Telefon: <a href="tel:40460571">404 60 571</a> */}
          {/* </p> */}
        </div>

        <div className={styles.center}>
          <p>© {new Date().getFullYear()} Pareo</p>
        </div>

        <div className={styles.right}>
          <a
            href="https://www.linkedin.com/company/pareowebdesign/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon className={styles.linkIcon} icon={faLinkedin} />
            LinkedIn
          </a>
          {/* <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Instagram"
      >
        <FontAwesomeIcon className={styles.linkIcon} icon={faSquareInstagram} />
        Instagram
      </a> */}
          {/* <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Facebook"
      >
        <FontAwesomeIcon className={styles.linkIcon} icon={faSquareFacebook} />
        Facebook
      </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
