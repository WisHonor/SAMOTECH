import styles from "./WhySamotech.module.css";

const pillars = [
  {
    n: "01",
    title: "Experience",
    accent: "var(--navy)",
    body: "25 years delivering IM/IT inside the Government of Canada, from hands-on development and data architecture to director-level portfolio governance.",
  },
  {
    n: "02",
    title: "Vision",
    accent: "var(--blue)",
    body: "A forward-looking approach that puts Agentic AI and Microsoft Copilot to work on planning, risk identification, and executive decision support.",
  },
  {
    n: "03",
    title: "Impact",
    accent: "var(--blue-bright)",
    body: "Results measured in outcomes, including a 60% reduction in investigator workload through AI-enabled solutions and funding secured for critical modernization work.",
  },
];

export default function WhySamotech() {
  return (
    <section id="why" className="section section--mist">
      <div className="container">
        <div data-reveal className="section-intro">
          <div className="eyebrow">Why SAMOTECH</div>
          <h2 className={`heading-2 ${styles.heading}`}>Experience. Vision. Impact.</h2>
        </div>
        <div className={styles.grid}>
          {pillars.map((p) => (
            <div key={p.n} data-reveal className={styles.card} style={{ borderTopColor: p.accent }}>
              <div className={styles.number}>{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
        <p data-reveal className={styles.note}>
          All services are available in English and French.
        </p>
      </div>
    </section>
  );
}
