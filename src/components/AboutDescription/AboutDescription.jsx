import FloatInSection from "../FloatInSection/FloatInSection";
import styles from "./AboutDescription.module.css";

const AboutDescription = () => {
  return (
    <FloatInSection>
      <ul className={styles.servicesList}>
        <li className={`${styles.serviceBox} reveal`}>
          <h3 className={styles.serviceHeading}>Responsive nettsider</h3>
          <p>
            Vi bygger moderne, mobilvennlige nettsider som fungerer sømløst på
            alle enheter.
          </p>
        </li>
        <li className={`${styles.serviceBox} ${styles.middleBox} reveal`}>
          <h3 className={styles.serviceHeading}>Design og brukeropplevelse</h3>
          <p>
            Vi skaper design som både er visuelt tiltalende og enkelt å bruke,
            med fokus på god navigasjon og målrettede brukerreiser.
          </p>
        </li>
        <li className={`${styles.serviceBox} reveal`}>
          <h3 className={styles.serviceHeading}>Skreddersydde løsninger</h3>
          <p>
            Vi tilpasser løsningen til dine behov – alt fra funksjonalitet og
            integrasjoner til fremtidig skalering.
          </p>
        </li>
      </ul>
    </FloatInSection>
  );
};

export default AboutDescription;
