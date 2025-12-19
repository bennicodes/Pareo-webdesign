import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button/Button.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Description from "./components/Description/Description.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import { usePageTitle } from "./hooks/usePageTitles.js";
import useScrollToTop from "./hooks/useScrollToTop.js";

function App() {
  const contactSectionRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  usePageTitle("Pareo – Nettsider som gjør inntrykk og konverterer");

  const scrollToContactSection = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useScrollToTop();

  return (
    <div className={styles.rootContainer} data-theme={theme}>
      <div className={styles.navbarContainer}>
        <Navbar isDarkMode={theme} setIsDarkMode={toggleTheme} />
        <ScrollToTop />
      </div>
      <Header>
        <div className={styles.headerContainer}>
          <h1>Webdesign og nettsider for bedrifter i Norge</h1>
          <p>
            Pareo er et webbyrå som lager skreddersydde nettsider for bedrifter
            i Norge. Vi tilbyr moderne, brukervennlig webdesign som øker
            synlighet, tillit og konverteringer.
          </p>

          <Button
            classname={styles.contactButton}
            onClick={scrollToContactSection}
          >
            Kontakt oss
          </Button>
          <div className={styles.headerDescription}>
            <p className={styles.description}>
              Klar for å ta neste steg? Send oss en uforpliktende henvendelse –
              vi svarer raskt.
            </p>
          </div>
        </div>
      </Header>
      {/* </header> */}
      {/* ---------------------------- */}
      <main className={styles.main}>
        <section className={styles.descriptionSection}>
          <h2 className={styles.descriptionTitle}>Hva gjør vi?</h2>
          <p>
            Vi starter med å bli kjent med deg og din bedrift. Dette innebærer:
          </p>
          <Description />
        </section>
        {/* ---------------------------- */}
        {/* --- Contact Section --- */}
        <section className={styles.contactSection} ref={contactSectionRef}>
          <div className={styles.contactInfo}>
            <h2 className={styles.contactTitle}>Kontakt Oss</h2>
            <p className={styles.contactDescription}>
              Klar for en ny nettside? Slik går vi frem når du sender en
              henvendelse:
            </p>

            <ol className={styles.recipeList}>
              <li>
                <div>
                  <strong>Send henvendelse</strong>
                  <p>
                    Fyll ut skjemaet med navn, e-post og en kort beskrivelse av
                    prosjektet.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Uforpliktende prat</strong>
                  <p>
                    Vi tar kontakt innen 24 timer for å avtale en kort samtale
                    om dine behov.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Løsningsforslag</strong>
                  <p>
                    Vi sender deg et konkret tilbud og en plan for din nye
                    nettside.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className={styles.contactFormContainer}>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
