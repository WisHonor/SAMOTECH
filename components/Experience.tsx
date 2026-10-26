import Stats from "./Stats";
import styles from "./Experience.module.css";

const career = [
  {
    period: "2025 – PRESENT",
    title: "IM/IT Director, Portfolio Management Office",
    body: "Strategic oversight of Benefits Delivery Modernization governance for OAS, EI, and CPP. Reduced investigator workload by 60% through AI-enabled solutions and secured executive endorsement and funding for a Labour Program backlog strategy.",
  },
  {
    period: "2022 – 2025",
    title: "IM/IT Director, Engagement & Ancillary Management Tools",
    body: "Directed intake and approval of more than 100 IT tools valued at over $10M, and delivery of 30+ business requirements documents enabling approximately $3M in projects.",
  },
  {
    period: "2018 – 2022",
    title: "IM/IT Manager, Enterprise Solutions",
    body: "Led infrastructure integration and Passport Program Modernization support, migrating 800 employees and critical systems. Delivered a mobile service toolkit reaching 20+ remote communities, recognized with the Deputy Minister Award for Innovation and Excellence.",
  },
  {
    period: "2017 – 2018",
    title: "Business Process Architect, BPM Centre of Excellence",
    body: "Led process transformation for OAS, CPP, and EI service delivery using BPMN and iGrafx.",
  },
  {
    period: "2011 – 2017",
    title: "Data Architect, Data Management Services",
    body: "Designed and governed enterprise data architecture and led legacy migration to Oracle and SQL Server.",
  },
  {
    period: "2005 – 2011",
    title: "IM/IT Team Lead, Service Delivery Network & Channels",
    body: "Led national citizen service platforms including 1-800-O-Canada, the Service Canada Intranet, and CRM solutions.",
  },
  {
    period: "2001 – 2006",
    title: "Web Developer, National Secretariat on Homelessness",
    body: "Developed enterprise web applications for federal homelessness programs, including IMIS, SFRPHI, and HIFIS.",
  },
];

const programs = [
  "Old Age Security",
  "Employment Insurance",
  "Canada Pension Plan",
  "Passport Program",
  "Service Canada",
  "Labour Program",
  "Homelessness Initiatives",
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div data-reveal className={`section-intro ${styles.intro}`}>
          <div className="eyebrow">Experience &amp; Credentials</div>
          <h2 className="heading-2">25 years inside Government of Canada IT</h2>
          <p>
            A career at Employment and Social Development Canada spanning development, data, process, and portfolio
            leadership.
          </p>
        </div>

        <Stats />

        <div className={styles.columns}>
          <div className={styles.career}>
            <div className={styles.careerLabel}>CAREER · EMPLOYMENT AND SOCIAL DEVELOPMENT CANADA</div>
            <ol className={styles.timeline}>
              {career.map((role, i) => (
                <li key={role.title} data-reveal>
                  <span aria-hidden="true" className={`${styles.dot} ${i === 0 ? styles.dotCurrent : ""}`} />
                  <div className={styles.period}>{role.period}</div>
                  <h3>{role.title}</h3>
                  <p>{role.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside data-reveal className={styles.aside}>
            <div>
              <div className={styles.asideLabel}>EDUCATION</div>
              <div className={styles.asideStrong}>Bachelor&apos;s degree in Computer Science</div>
              <div className={styles.asideMuted}>University of Quebec in Hull</div>
            </div>
            <div className={styles.asideRule} />
            <div>
              <div className={styles.asideLabel}>CERTIFICATIONS &amp; TRAINING</div>
              <div className={styles.asideStrong}>PRINCE2® Foundation</div>
              <div className={styles.asideMuted}>BPMN · Data Management · Cybersecurity</div>
            </div>
            <div className={styles.asideRule} />
            <div>
              <div className={styles.asideLabel}>RECOGNITION</div>
              <div className={styles.asideStrong}>Deputy Minister Award for Innovation and Excellence</div>
            </div>
            <div className={styles.asideRule} />
            <div>
              <div className={`${styles.asideLabel} ${styles.asideLabelWide}`}>PROGRAMS SERVED</div>
              <div className={styles.tags}>
                {programs.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </div>
            <div className={styles.asideRule} />
            <div>
              <div className={styles.asideLabel}>TOOLS &amp; TECHNOLOGY</div>
              <div className={styles.asideBody}>
                Agentic AI · Microsoft Copilot (M365, Teams) · Azure DevOps · Visio · iGrafx · SQL / PL-SQL
              </div>
            </div>
            <div className={styles.asideRule} />
            <div>
              <div className={styles.asideLabel}>LANGUAGES</div>
              <div className={styles.asideStrong}>English · French</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
