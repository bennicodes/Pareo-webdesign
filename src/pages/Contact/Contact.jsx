import React from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <Helmet>
        <title>Kontakt oss | Pareo</title>
        <meta
          name="description"
          content="Ta kontakt med Pareo for en uforpliktende prat. Vi svarer raskt og hjelper deg gjerne med ditt neste prosjekt."
        />
        <meta property="og:title" content="Kontakt oss | Pareo" />
        <meta
          property="og:description"
          content="Ta kontakt med Pareo for en uforpliktende prat. Vi svarer raskt og hjelper deg gjerne med ditt neste prosjekt."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <meta property="og:image" content="/img/icons/pareo-main-logo.svg" />
      </Helmet>
      {/* ------------------------ */}
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
