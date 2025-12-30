import React from "react";
import { useNavigate } from "react-router";
import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import FloatInSection from "../../components/FloatInSection/FloatInSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useTheme } from "../../Context/ThemeContext";
import { usePageTitle } from "../../hooks/usePageTitles";
import useScrollToTop from "../../hooks/useScrollToTop";
import styles from "./Services.module.css";

const servicesList = [
  {
    title: "Skreddersydde og responsive nettsider",
    content:
      "Vi utvikler moderne og skreddersydde nettsider for bedrifter som tilpasser seg sømløst til alle skjermstørrelser – fra mobil til desktop. Vi fokuserer på estetikk, brukervennlighet og høy ytelse sørger vi for at ditt førsteinntrykk på nett blir både profesjonelt og minneverdig. Designet vårt er optimalisert for konvertering og vedlikeholdsvennlig kode.",
  },
  {
    title: "Designsystemer og komponentbiblioteker",
    content:
      "Et godt design- og komponentbibliotek sikrer konsistens og effektivitet i nettsider og webapplikasjoner for både små og store bedrifter. Vi bygger skalerbare designsystemer som gjør det enkelt å opprettholde visuell helhet, akselerere utvikling og sikre en solid teknisk grunnmur for fremtidig vekst.",
  },
  {
    title: "Interaktive apper med React",
    content:
      "Vi utvikler raske, interaktive og brukervennlige webapplikasjoner med React og moderne frontend-teknologier. Våre løsninger gir høy ytelse og engasjerende brukeropplevelser for kundeportaler, dashbord eller interne verktøy for bedrifter i Norge.",
  },
  {
    title: "SEO og ytelsesoptimalisering",
    content:
      "Vi optimaliserer nettsidens hastighet, tilgjengelighet og kodestruktur for bedre brukeropplevelse og høyere rangering i Google. Vår SEO og ytelsesoptimalisering gir mer trafikk, lavere fluktfrekvens og bedre konverteringer for bedrifter som ønsker synlighet på nett.",
  },
  {
    title: "Vedlikehold og forbedringer av eksisterende løsninger",
    content:
      "Har du en eksisterende nettside eller app som trenger forbedring? Vi hjelper norske bedrifter med å rydde opp i kodebasen, rette feil, forbedre design og implementere nye funksjoner. Enten det gjelder utdatert kode, ytelsesproblemer eller videreutvikling, sørger vi for at løsningen forblir robust og fremtidsrettet.",
  },
];

const Services = () => {
  usePageTitle("Tjenester – Pareo");
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/kontakt");
  };

  const { theme, toggleTheme } = useTheme();

  useScrollToTop();

  return (
    <div className={styles.pageContainer} data-theme={theme}>
      <header className={styles.header}>
        <Navbar isDarkMode={theme} setIsDarkMode={toggleTheme} />
        <ScrollToTop />

        {/* HERO */}
        <FloatInSection>
          <section className={styles.hero}>
            <h1 className="reveal">Våre Tjenester</h1>
            <p className="reveal">
              Vi hjelper deg med å realisere dine digitale ideer – fra elegante
              nettsider og webdesign for bedrifter til kraftfulle
              webapplikasjoner.
            </p>
          </section>
        </FloatInSection>
      </header>

      <main>
        <FloatInSection>
          <section className={styles.services}>
            <h2 className="reveal">Dette kan vi gjøre for deg</h2>
            <p className="reveal">
              Vi tilbyr moderne frontend-utvikling med fokus på
              brukervennlighet, ytelse og visuell kvalitet.
            </p>
            <Accordion items={servicesList} />
          </section>
        </FloatInSection>

        <section className={styles.cta}>
          <h2>Klar for neste steg?</h2>
          <p>
            Har du en idé, et prosjekt, eller bare lyst til å prate om
            muligheter? Vi tar gjerne en uforpliktende prat – over en kaffe,
            digitalt eller fysisk.
          </p>
          <Button onClick={navigateToContact}>Kontakt oss</Button>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Services;
