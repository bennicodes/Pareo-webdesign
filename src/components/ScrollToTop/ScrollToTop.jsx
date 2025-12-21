import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Appear after 500px of scrolling
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${styles.scrollWrapper} ${isVisible ? styles.visible : ""}`}
    >
      <button className={styles.scrollBtn} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} className={styles.icon} />
        <span>Til toppen</span>
      </button>
    </div>
  );
};

export default ScrollToTop;
