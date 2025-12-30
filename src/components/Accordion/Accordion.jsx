import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <ul className={styles.accordion}>
      {items.map((item, index) => (
        <li key={index} className={`${styles.accordionItem} reveal`}>
          <button
            className={styles.accordionTitle}
            onClick={() => toggle(index)}
          >
            {item.title}
            <span className={styles.icon}>
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          <div
            className={`${styles.accordionContent} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            {item.content}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
