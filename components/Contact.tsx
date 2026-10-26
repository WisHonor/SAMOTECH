import { site } from "@/lib/site";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
  const { email, phone, location, linkedin } = site.contact;

  return (
    <section id="contact" className="section">
      <div className={`container ${styles.layout}`}>
        <div data-reveal className={styles.info}>
          <div className="eyebrow">Contact</div>
          <h2 className="heading-2">Start the conversation</h2>
          <p className={styles.intro}>
            Tell us about your organization and the challenge in front of you. We will follow up to arrange a
            consultation.
          </p>
          <dl className={styles.details}>
            <div>
              <dt>EMAIL</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </div>
            <div>
              <dt>PHONE</dt>
              <dd>
                <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
              </dd>
            </div>
            <div>
              <dt>LOCATION</dt>
              <dd className={styles.plain}>{location}</dd>
            </div>
            <div>
              <dt>LINKEDIN</dt>
              <dd>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  {linkedin}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div data-reveal className={styles.card}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
