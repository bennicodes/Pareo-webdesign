import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Button from "./components/Button/Button.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <div className={styles.rootContainer}>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1>Vi gjør din visjon virkelig!</h1>
          <h3>
            Limited Designs er et digitalt designbyrå som hjelper deg å bli
            synlig på nettet.
          </h3>
        </div>
        <div className={styles.actionContainer}>
          <Button classname={styles.contactButton}>Kontakt Oss</Button>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              Har du spørsmål? Send en uforpliktende henvendelse. Så tar vi
              kontakt så fort som mulig.
            </p>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.descriptionSection}>
          <h2 className={styles.descriptionTitle}>Hva gjør vi?</h2>
          <p>
            Vi starter med å bli kjent med deg og din bedrift. Dette innebærer :
          </p>
          <ul className={styles.description}>
            <li className={styles.descriptionText}>
              <h3 className={styles.descriptionHeading}>
                Strategi og innsikt:
              </h3>
              <p>
                Vi setter oss inn i dine mål, utfordringer og visjoner. Sammen
                definerer vi hva nettsiden skal oppnå og hvem målgruppen er. Så
                lager vi en realistisk plan som passer din tidsramme.
              </p>
            </li>
            <li
              className={`${styles.descriptionText} ${styles.middleDescription}`}
            >
              <h3 className={styles.descriptionHeading}>
                Design og utvikling:
              </h3>
              <p>
                Vi skaper en nettside som både ser bra ut og fungerer optimalt.
                Designet reflekterer din merkevare og gir en helhetlig visuell
                identitet. Vi prioriterer enkel navigasjon, mobilvennlig design
                og en god opplevelse for kundene dine.
              </p>
            </li>
            <li className={styles.descriptionText}>
              <h3 className={styles.descriptionHeading}>Teknisk utvikling:</h3>
              <p>
                Nettsiden bygges på en moderne plattform som sikrer rask
                lastetid, stabilitet og god sikkerhet. Dette gjør det enkelt å
                videreutvikle og oppgradere nettsiden hvis det trengs.
              </p>
            </li>
          </ul>
        </section>
        {/* ---------------------------- */}
        <section className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Kontakt Oss</h2>
          <p className={styles.contactDescription}>
            Har du spørsmål? Send en uforpliktende henvendelse. Så tar vi
            kontakt så fort som mulig.
          </p>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
