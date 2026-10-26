import styles from "./Hero.module.css";

const practiceAreas = [
  "IT Portfolio Governance",
  "Digital Transformation",
  "AI & Automation Advisory",
  "Process & Data Architecture",
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div aria-hidden="true" className={styles.gradient} />
      <div aria-hidden="true" className={`${styles.ring} ${styles.ringOuter}`} />
      <div aria-hidden="true" className={`${styles.ring} ${styles.ringInner}`} />

      <div className={styles.inner}>
        <div data-reveal className={styles.copy}>
          <div className={styles.kicker}>
            <span className={styles.rule} />
            <span>EXPERIENCE. VISION. IMPACT.</span>
          </div>
          <h1 className={styles.title}>Strategic IT leadership for complex digital transformation.</h1>
          <p className={styles.lede}>
            Portfolio governance, modernization, and AI-enabled delivery, led by a Government of Canada IM/IT
            executive with 25 years of experience.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn btn--primary">
              Book a Consultation
            </a>
            <a href="#services" className="btn btn--outline">
              Our Services
            </a>
          </div>
        </div>

        <div data-reveal className={styles.panel}>
          <div className={styles.panelLabel}>AREAS OF PRACTICE</div>
          <div className={styles.panelList}>
            {practiceAreas.map((area) => (
              <a key={area} href="#services" className={styles.panelLink}>
                {area}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <svg aria-hidden="true" viewBox="0 0 1440 120" preserveAspectRatio="none" className={styles.wave}>
        <path
          d="M0,62 C380,0 940,-6 1440,84"
          fill="none"
          stroke="#2E8BC9"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          opacity="0.8"
        />
        <path d="M0,120 L0,78 C380,16 940,10 1440,100 L1440,120 Z" fill="#FFFFFF" />
      </svg>
    </section>
  );
}
