import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Services.module.css";
import ServiceAccordion from "../../components/ServiceAccordion./ServiceAccordion";

const Services = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>

      <section className={styles.hero}>
        <h1>Våre Tjenester</h1>
        <p>
          Vi hjelper deg med å realisere dine digitale ideer – fra elegante
          nettsider til kraftfulle webapplikasjoner.
        </p>
      </section>

      <section className={styles.services}>
        <h2>Dette kan vi gjøre for deg</h2>
        <p>
          Vi tilbyr moderne frontend-utvikling med fokus på brukervennlighet,
          ytelse og visuell kvalitet.
        </p>
        <ServiceAccordion />
      </section>

      <section className={styles.cta}>
        <h2>Klar for neste steg?</h2>
        <p>
          Har du en idé, et prosjekt, eller bare lyst til å prate om muligheter?
          Vi tar gjerne en uforpliktende prat – over en kaffe, digitalt eller
          fysisk.
        </p>
        <button>Kontakt oss</button>
      </section>
    </div>
  );
};

export default Services;
