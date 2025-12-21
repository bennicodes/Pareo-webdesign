import React from "react";
import { useNavigate } from "react-router";
import AboutDescription from "../../components/AboutDescription/AboutDescription";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useTheme } from "../../Context/ThemeContext";
import { usePageTitle } from "../../hooks/usePageTitles";
import useScrollToTop from "../../hooks/useScrollToTop";
import styles from "./About.module.css";

const About = () => {
  const navigate = useNavigate();
  usePageTitle("Om oss – Pareo");

  const navigateToContact = () => {
    navigate("/kontakt");
  };

  const navigateToServices = () => {
    navigate("/tjenester");
  };

  const { theme, toggleTheme } = useTheme();

  useScrollToTop();

  return (
    <div className={styles.pageContainer} data-theme={theme}>
      <header className={styles.header}>
        <Navbar isDarkMode={theme} setIsDarkMode={toggleTheme} />
        <section className={styles.hero}>
          <h1>To utviklere. Ett lag. Én visjon.</h1>
          <p>
            Vi bygger moderne nettsider og digitale løsninger for norske
            bedrifter med presisjon, lidenskap og samarbeid i sentrum.
          </p>
          <Button onClick={navigateToServices}>Se hva vi tilbyr</Button>
        </section>
      </header>

      <main>
        <section className={styles.intro}>
          <h2>Hvem er vi?</h2>
          <p>
            Vi er to tidligere fotballspillere som tok steget inn i tech-verden
            sammen. Nå bygger vi løsninger som er like solide som samspillet
            vårt.
          </p>
        </section>

        <section className={styles.story}>
          <h2>Vår reise</h2>
          <p>
            Vår reise begynte ikke foran en skjerm, men på fotballbanen. Som
            lagkamerater utviklet vi en sterk relasjon basert på samarbeid,
            kommunikasjon og vilje til å yte det lille ekstra – verdier vi i dag
            tar med oss inn i arbeidslivet som frontend-utviklere. Etter flere
            år som dedikerte fotballspillere, valgte vi å følge en ny lidenskap
            sammen og startet på studiet Frontend-utvikling ved Høyskolen
            Kristiania.
            <br />
            <br />
            Med målrettet innsats og ekte engasjement kastet vi oss inn i koden
            – og fant raskt ut at vi både trivdes og presterte. Vi jobbet
            strukturert og støttet hverandre gjennom hele studietiden, noe som
            kulminerte i toppkarakterer og solide sluttprosjekter. Nå er vi
            klare for å bygge videre – ikke bare nettsider, men verdifulle
            løsninger og sterke samarbeid.
          </p>
        </section>

        {/* TODO: Fix hover effect to something functional.*/}

        <section className={styles.services}>
          <h2>Dette kan vi hjelpe deg med</h2>
          <AboutDescription />
        </section>

        <section className={styles.cta}>
          <h2>La oss skape noe sammen</h2>
          <p>
            Vi er alltid åpne for nye samarbeid og spennende prosjekter. Kontakt
            oss gjerne for en uformell prat!
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

export default About;
