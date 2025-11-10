import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { usePageTitle } from "../../hooks/usePageTitles";
import useScrollToTop from "../../hooks/useScrollToTop";
import styles from "./Contact.module.css";

const Contact = () => {
  usePageTitle("Kontakt oss – Pareo");

  useScrollToTop();

  return (
    <div className={styles.contactContainer}>
      <Navbar />

      <Header>
        <div className={styles.headerContent}>
          <h1>Kontakt oss</h1>
          <p>
            Har du spørsmål, ideer eller ønsker å samarbeide? Vi svarer så fort
            vi kan.
          </p>
        </div>
      </Header>

      <main className={styles.mainContent}>
        <section className={styles.formSection}>
          <h2>Send en henvendelse</h2>
          <p>Fyll inn skjemaet så tar vi kontakt med deg så raskt som mulig.</p>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
        </section>

        <section className={styles.infoSection}>
          <h2>Andre måter å nå oss på</h2>
          <ul>
            <li>
              📧{" "}
              <a href="mailto:kontaktpareo@gmail.com">kontaktpareo@gmail.com</a>
            </li>
            <li>📍 Oslo, Norge</li>
            <li>⏰ Vi er tilgjengelige digitalt hele uken</li>
          </ul>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
