import React, { useState } from "react";
import styles from "./ServiceAccordion.module.css";

const servicesList = [
  {
    title: "✅ Skreddersydde og responsive nettsider",
    content:
      "Vi utvikler nettsider som tilpasser seg alle skjermstørrelser, med fokus på ytelse og god brukeropplevelse.",
  },
  {
    title: "✅ Designsystemer og komponentbiblioteker",
    content:
      "Vi bygger gjenbrukbare komponenter og strukturerte designsystemer som sikrer skalerbarhet og konsistens.",
  },
  {
    title: "✅ Interaktive apper med React",
    content:
      "Vi skaper dynamiske og brukervennlige grensesnitt med moderne React-verktøy og best practices.",
  },
  {
    title: "✅ SEO og ytelsesoptimalisering",
    content:
      "Vi forbedrer lastetid, struktur og tilgjengelighet – og sørger for at nettsiden blir funnet i søkemotorer.",
  },
  {
    title: "✅ Vedlikehold og forbedringer av eksisterende løsninger",
    content:
      "Vi tar over eksisterende prosjekter, rydder opp i kodebaser og gjør kontinuerlige forbedringer.",
  },
];

const ServiceAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <ul className={styles.accordion}>
      {servicesList.map((item, index) => (
        <li key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionTitle}
            onClick={() => toggle(index)}
          >
            {item.title}
            <span className={styles.icon}>
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ServiceAccordion;
