import React from "react";
import FloatInSection from "../FloatIn/FloatIn";
import styles from "./Description.module.css";

const Description = () => {
  return (
    <ul className={styles.description}>
      <li className={`${styles.descriptionText} reveal`}>
        <h3 className={styles.descriptionHeading}>Strategi og innsikt</h3>
        <p>
          Vi setter oss inn i dine mål, utfordringer og visjoner. Sammen
          definerer vi hva nettsiden skal oppnå og hvem målgruppen er. Så lager
          vi en realistisk plan som passer din tidsramme.
        </p>
      </li>
      <li className={`${styles.descriptionText} reveal`}>
        <h3 className={styles.descriptionHeading}>
          Design og utvikling av bedriftssider
        </h3>
        <p>
          Vi skaper en nettside som både ser bra ut og fungerer optimalt.
          Designet reflekterer din merkevare og gir en helhetlig visuell
          identitet. Vi prioriterer enkel navigasjon, mobilvennlig design og en
          god opplevelse for kundene dine.
        </p>
      </li>
      <li className={`${styles.descriptionText} reveal`}>
        <h3 className={styles.descriptionHeading}>
          Teknisk utvikling av webdesign
        </h3>
        <p>
          Nettsiden bygges på en moderne plattform som sikrer rask lastetid,
          stabilitet og god sikkerhet. Dette gjør det enkelt å videreutvikle og
          oppgradere nettsiden hvis det trengs.
        </p>
      </li>
    </ul>
  );
};

export default Description;
