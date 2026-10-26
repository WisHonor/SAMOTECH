import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <div aria-hidden="true" className={styles.ring} />
      <div data-reveal className={styles.inner}>
        <div className={styles.copy}>
          <h2>Bring clarity and control to your next transformation.</h2>
          <p>Book a free consultation to discuss your portfolio, modernization, or AI adoption goals.</p>
        </div>
        <a href="#contact" className={`btn btn--primary ${styles.button}`}>
          Schedule a Free Consultation
        </a>
      </div>
    </section>
  );
}
