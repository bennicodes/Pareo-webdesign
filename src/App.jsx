import styles from "./App.module.css";
import Button from "./components/Button/Button.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

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
        <div>
          Har du spørsmål? Vi har rask responstid og er alltid tilgjengelig
          for å svare på dine spørsmål. Send oss en henvendelse via skjemaet,
          eller ring oss på telefon
        </div>
      </main>
    </div>
  );
}

export default App;
