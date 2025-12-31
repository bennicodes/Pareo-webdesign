import {
  faClock,
  faEnvelope,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import FloatIn from "../../components/FloatIn/FloatIn";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useTheme } from "../../Context/ThemeContext";
import { usePageTitle } from "../../hooks/usePageTitles";
import useScrollToTop from "../../hooks/useScrollToTop";
import styles from "./Contact.module.css";

const Contact = () => {
  usePageTitle("Kontakt oss – Pareo");
  const { theme, toggleTheme } = useTheme();

  useScrollToTop();

  return (
    <div className={styles.pageWrapper} data-theme={theme}>
      <Navbar isDarkMode={theme} setIsDarkMode={toggleTheme} />
      <ScrollToTop />

      {/* --- HERO SECTION --- */}
      <header className={styles.header}>
        <FloatIn>
          <div className={styles.heroContent}>
            <h1 className="reveal">Kontakt oss</h1>
            <p className={`${styles.heroDescription} reveal`}>
              Har du spørsmål, ideer eller ønsker å samarbeide? Vi svarer så
              fort vi kan.
            </p>
          </div>
        </FloatIn>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className={styles.contactMain}>
        <FloatIn>
          <div className={styles.splitLayout}>
            {/* VENSTRE SIDE: SKJEMA */}
            <section className={styles.openFormSection}>
              <div className={styles.formHeader}>
                <h2>Send en henvendelse</h2>
                <p>
                  Fyll inn skjemaet så tar vi kontakt med deg så raskt som
                  mulig.
                </p>
              </div>
              <div className={styles.formWrapper}>
                <ContactForm />
              </div>
            </section>

            {/* HØYRE SIDE: SIDEBAR */}
            <aside className={styles.detailsSidebar}>
              <h2>Direkte kontakt</h2>

              {/* E-post blokk */}
              <div className={styles.infoBlock}>
                <div className={styles.iconCircle}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={styles.infoText}>
                  <span>E-post</span>
                  <a href="mailto:kontaktpareo@gmail.com">
                    kontaktpareo@gmail.com
                  </a>
                </div>
              </div>

              {/* Lokasjon blokk */}
              <div className={`${styles.infoBlock} reveal`}>
                <div className={styles.iconCircle}>
                  <FontAwesomeIcon icon={faMapPin} />
                </div>
                <div className={styles.infoText}>
                  <span>Lokasjon</span>
                  <a
                    href="https://maps.google.com/?cid=9120458160059129498&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Oslo, Norge
                  </a>
                  <br />
                  <a
                    href="https://maps.google.com/?cid=636855213640583995&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Eidsvoll, Norge
                  </a>
                </div>
              </div>

              {/* Tilgjengelighet blokk */}
              <div className={`${styles.infoBlock} reveal`}>
                <div className={styles.iconCircle}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className={styles.infoText}>
                  <span>Tilgjengelighet</span>
                  <p>Digitalt hele uken</p>
                  <p>08:00 - 20:00</p>
                </div>
              </div>
            </aside>
          </div>
        </FloatIn>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
