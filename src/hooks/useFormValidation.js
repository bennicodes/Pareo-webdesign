import { useState } from "react";

export default function useContactFormValidation() {
  const [errors, setErrors] = useState({});
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^\d{8}$/; // Regex for 8-digit phone number

  const validate = (formData) => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vennligst fyll inn navn";
    }
    // ------------------
    if (!formData.email.trim()) {
      newErrors.email = "Vennligst fyll inn e-mail";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Ugyldig e-postadresse";
    }
    // ------------------
    if (!formData.phone.trim()) {
      newErrors.phone = "Vennligst fyll inn telefonnummer";
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      newErrors.phone = "Vennligst fyll inn et gyldig telefonnummer.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Telefonnummeret må være 8 siffer";
    }
    // ------------------
    if (!formData.message.trim()) {
      newErrors.message = "Vennligst fyll inn meldingsfeltet";
    } else if (formData.message.trim().length > 300) {
      newErrors.message = "Meldingen kan ikke være lengre enn 300 tegn";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateField = (name, value) => {
    let message = "";

    if (name === "name") {
      if (!value.trim()) message = "Vennligst fyll inn navn.";
    }

    if (name === "email") {
      if (!value.trim()) message = "Vennligst fyll inn e-post.";
      else if (!emailRegex.test(value.trim()))
        message = "Ugyldig e-postadresse.";
    }

    if (name === "phone") {
      if (!value.trim()) message = "Vennligst fyll inn telefonnummer.";
      else if (!/^\d+$/.test(value.trim()))
        message = "Vennligst fyll inn et gyldig telefonnummer.";
      else if (!phoneRegex.test(value.trim()))
        message = "Telefonnummeret må være 8 siffer.";
    }

    if (name === "message") {
      if (!value.trim()) message = "Vennligst fyll inn meldingsfeltet.";
      else if (value.trim().length > 300)
        message = "Meldingen kan ikke være lengre enn 300 tegn.";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  return {
    errors,
    validate,
    validateField,
  };
}
