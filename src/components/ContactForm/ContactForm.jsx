import React from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h2>Kontakt Oss</h2>

      <p className={styles.successMessageS}>
        Takk for din henvendelse! Vi tar kontakt snart.
      </p>

      <form className={styles.form}>
        <input type="text" name="name" placeholder="Navn" />
        <input type="email" name="email" placeholder="E-post" />
        <textarea
          name="message"
          placeholder="Maximum 300 characters"
          maxLength="300"
        />
        <Button classname={styles.submitButton} type="submit">
          Send
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
