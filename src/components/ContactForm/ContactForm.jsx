import React from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <fieldset className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Navn</label>
          <input type="text" name="name" />
        </div>
        {/* -------------------- */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        {/* -------------------- */}
        <div className={styles.inputGroup}>
          <label htmlFor="message">Hendvendelse</label>
          <textarea name="message" maxLength="300" />
        </div>
        <p className={styles.characterCount}></p>
        <p className={styles.message}></p>
        <Button classname={styles.submitButton} type="submit">
          Send
        </Button>
      </form>
    </fieldset>
  );
};

export default ContactForm;
