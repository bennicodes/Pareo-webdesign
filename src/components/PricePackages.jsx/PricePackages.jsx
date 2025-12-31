import React from "react";
import Button from "../Button/Button";
import FloatIn from "../FloatIn/FloatIn";
import styles from "./PricePackages.module.css";

const pricingData = [
  {
    name: "Basis",
    price: "12 900,-",
    description: "Perfekt for nyoppstartede bedrifter.",
    features: [
      "Enkeltside",
      "Moderne design",
      "Kontaktskjema",
      "SEO-oppsett",
      "Rask lasting",
    ],
    popular: false,
  },
  {
    name: "Bedrift",
    price: "24 900,-",
    description: "Vår mest populære pakke for vekst.",
    features: [
      "Inntil 5 sider",
      "Skreddersydd konsept",
      "Avansert SEO",
      "Google Maps",
      "Sikkerhetstest",
    ],
    popular: true,
  },
  {
    name: "Egendefinert",
    price: "Kontakt oss",
    description: "For komplekse webapper og større behov.",
    features: [
      "Ubegrenset sider",
      "React-funksjonalitet",
      "Designsystem",
      "API-integrasjoner",
      "UX-analyse",
    ],
    popular: false,
  },
];

const PricePackages = ({ onSelect }) => {
  return (
    <FloatIn>
      <section className={styles.pricingWrapper}>
        <h2 className="reveal">Prispakker</h2>
        <div className={styles.pricingGrid}>
          {pricingData.map((pkg, index) => (
            <div
              key={index}
              className={`${styles.priceCard}  ${
                pkg.popular ? styles.popular : ""
              }`}
            >
              {pkg.popular && <div className={styles.badge}>Mest Populær</div>}
              <h3>{pkg.name}</h3>
              <div className={styles.price}>{pkg.price}</div>
              <p>{pkg.description}</p>
              <ul className={styles.featureList}>
                {" "}
                {pkg.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <Button onClick={() => onSelect(pkg.name)}>
                Velg {pkg.name}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </FloatIn>
  );
};

export default PricePackages;
