import { useRef } from "react";
import styles from "./App.module.css";
import Button from "./components/Button/Button.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Description from "./components/Description/Description.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  const contactSectionRef = useRef(null);

  const scrollToContactSection = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      {/* <header className={styles.header}> */}
      <Header>
        <div className={styles.headerContainer}>
          <h1>Vi gjør din visjon virkelig!</h1>
          <h4>
            Limited Designs er et digitalt designbyrå som hjelper deg å bli
            synlig på nettet.
          </h4>

          <Button
            classname={styles.contactButton}
            onClick={scrollToContactSection}
          >
            Kontakt oss
          </Button>
          <div className={styles.headerDescription}>
            <p className={styles.description}>
              Har du spørsmål? Send en uforpliktende henvendelse. Så tar vi
              kontakt så fort som mulig.
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
          <p></p>
          <Description />
        </section>
        {/* ---------------------------- */}
        <section className={styles.contactSection} ref={contactSectionRef}>
          <h2 className={styles.contactTitle}>Kontakt Oss</h2>
          <p className={styles.contactDescription}>
            Har du spørsmål? Send en uforpliktende henvendelse. Så tar vi
            kontakt så fort som mulig.
          </p>
          <div className={styles.contactFormContainer}>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
