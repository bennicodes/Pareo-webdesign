import React from "react";
import { useNavigate } from "react-router";
import Accordion from "../../components/Accordion/Accordion";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Services.module.css";

const servicesList = [
  {
    title: "Skreddersydde og responsive nettsider",
    content:
      "Vi utvikler moderne og skreddersydde nettsider som tilpasser seg sømløst til alle skjermstørrelser – fra mobil til desktop. Med fokus på estetikk, brukervennlighet og høy ytelse sørger vi for at ditt førsteinntrykk på nett blir både profesjonelt og minneverdig. Vi designer med konvertering i tankene, og bygger med rene, vedlikeholdsvennlige kodestrukturer.",
  },
  {
    title: "Designsystemer og komponentbiblioteker",
    content:
      "Et godt designsystem gir struktur, konsistens og effektivitet i både små og store prosjekter. Vi bygger skalerbare designsystemer og fleksible komponentbiblioteker som gjør det enkelt å opprettholde visuell helhet og akselerere utviklingstiden. Dette gir en solid teknisk grunnmur for vekst over tid.",
  },
  {
    title: "Interaktive apper med React",
    content:
      "Vi utvikler raske, interaktive og brukervennlige webapplikasjoner ved hjelp av React og moderne frontend-teknologier. Med fokus på funksjonalitet, ytelse og visuell kvalitet leverer vi løsninger som engasjerer brukerne og gir verdi til din virksomhet – enten det er en kundeportal, et dashbord eller et internt verktøy.",
  },
  {
    title: "SEO og ytelsesoptimalisering",
    content:
      "En rask og godt strukturert nettside er avgjørende for både brukeropplevelse og synlighet i søkemotorer. Vi optimaliserer lastetider, tilgjengelighet og kodestruktur, samtidig som vi implementerer SEO-best practices som gir deg bedre rangering i Google. Resultatet er mer trafikk, lavere fluktfrekvens og høyere konvertering.",
  },
  {
    title: "Vedlikehold og forbedringer av eksisterende løsninger",
    content:
      "Har du en eksisterende nettside eller app som trenger forbedring? Vi hjelper deg med å rydde opp i kodebasen, rette feil, forbedre design og implementere nye funksjoner. Enten det handler om utdatert kode, ytelsesproblemer eller et ønske om videreutvikling, sørger vi for at løsningen din forblir robust og fremtidsrettet.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/kontakt");
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
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
          <Accordion items={servicesList} />
        </section>

        <section className={styles.cta}>
          <h2>Klar for neste steg?</h2>
          <p>
            Har du en idé, et prosjekt, eller bare lyst til å prate om
            muligheter? Vi tar gjerne en uforpliktende prat – over en kaffe,
            digitalt eller fysisk.
          </p>
          <button onClick={navigateToContact}>Kontakt oss</button>
        </section>
      </main>
    </div>
  );
};

export default Services;
