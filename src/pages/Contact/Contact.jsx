import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
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
      {/* The Header now contains both the Nav and the Hero branding */}
      <header className={styles.heroHeader}>
        <Navbar isDarkMode={theme} setIsDarkMode={toggleTheme} />

        <div className={styles.heroContent}>
          <h1>Kontakt oss</h1>
          <p className={styles.heroDescription}>
            Har du spørsmål, ideer eller ønsker å samarbeide? Vi svarer så fort
            vi kan.
          </p>
        </div>
      </header>

      <main className={styles.contactMain}>
        <div className={styles.splitLayout}>
          <section className={styles.openFormSection}>
            <div className={styles.formHeader}>
              <h2>Send en henvendelse</h2>
              <p>
                Fyll inn skjemaet så tar vi kontakt med deg så raskt som mulig.
              </p>
            </div>
            <div className={styles.formWrapper}>
              <ContactForm />
            </div>
          </section>

          {/* Sidebar stays as a solid anchor */}
          <aside className={styles.detailsSidebar}>
            <h2>Direkte kontakt</h2>
            {/* Email Block */}
            <div className={styles.infoBlock}>
              <div className={styles.iconCircle}>📧</div>
              <div className={styles.infoText}>
                <span>E-post</span>
                <a href="mailto:kontaktpareo@gmail.com">
                  kontaktpareo@gmail.com
                </a>
              </div>
            </div>

            {/* Location Block */}
            <div className={styles.infoBlock}>
              <div className={styles.iconCircle}>📍</div>
              <div className={styles.infoText}>
                <span>Lokasjon</span>
                <p>Oslo, Norge</p>
              </div>
            </div>

            {/* Availability Block */}
            <div className={styles.infoBlock}>
              <div className={styles.iconCircle}>⏰</div>
              <div className={styles.infoText}>
                <span>Tilgjengelighet</span>
                <p>Digitalt hele uken</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
