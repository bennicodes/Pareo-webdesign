import React from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <input type="text" name="name" placeholder="Navn" />
      <input type="email" name="email" placeholder="E-post" />
      <textarea
        name="message"
        placeholder="Maximum 300 tegn"
        maxLength="300"
        rows={8}
      />
      <Button classname={styles.submitButton} type="submit">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
