"use client";

import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: send the form data to an email service or API route; for now it only shows the confirmation.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div role="status" className={styles.success}>
        <div className={styles.successIcon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2479B5"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3>Thank you. Your message has been sent.</h3>
        <p>We will be in touch shortly to arrange a time to talk.</p>
        <button type="button" className={styles.reset} onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label>
        Full name *
        <input name="name" type="text" required autoComplete="name" placeholder="Jane Smith" />
      </label>
      <label>
        Email *
        <input name="email" type="email" required autoComplete="email" placeholder="jane@organization.ca" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-5555" />
      </label>
      <label>
        Company
        <input name="company" type="text" autoComplete="organization" placeholder="Organization name" />
      </label>
      <label className={styles.full}>
        Message *
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Briefly describe your goals or the challenge you are facing."
        />
      </label>
      <div className={`${styles.full} ${styles.footer}`}>
        <span>* Required fields</span>
        <button type="submit" className={`btn ${styles.submit}`}>
          Send Message
        </button>
      </div>
    </form>
  );
}
