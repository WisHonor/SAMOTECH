import type { ReactNode } from "react";
import styles from "./Services.module.css";

const services: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "IT Portfolio Governance & PMO",
    body: "Executive oversight of deliverables, risks, dependencies, and milestones across multi-team programs, with integrated roadmaps, RAID management, and dashboards that give leadership a clear view of delivery.",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </>
    ),
  },
  {
    title: "Digital Transformation & Modernization",
    body: "Planning and governance for modernizing legacy platforms and service delivery, informed by benefits delivery, passport, and infrastructure integration programs at national scale.",
    icon: (
      <>
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </>
    ),
  },
  {
    title: "AI & Automation Advisory",
    body: "Practical adoption of Agentic AI and Microsoft Copilot to streamline governance, identify delivery risks early, and automate high-volume workflows.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </>
    ),
  },
  {
    title: "Business Process Optimization",
    body: "BPMN process modelling, workflow analysis, and redesign that reduce operational cost and improve service outcomes, supported by change management and performance monitoring.",
    icon: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      </>
    ),
  },
  {
    title: "Data Architecture & Migration",
    body: "Enterprise data strategy, logical and physical modelling, and migration from legacy systems to scalable Oracle and SQL Server environments, with integrity and security built in.",
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </>
    ),
  },
  {
    title: "Technology Evaluation & Procurement",
    body: "Structured intake, evaluation, and onboarding of business tools, with requirements documents, implementation plans, and compliance and cost-control frameworks.",
    icon: (
      <>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section section--mist">
      <div className="container">
        <div data-reveal className="section-intro">
          <div className="eyebrow">Services</div>
          <h2 className="heading-2">Advisory built on large-scale delivery</h2>
          <p>
            Each engagement draws on direct experience governing, building, and modernizing federal programs that serve
            millions of Canadians.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} data-reveal className={styles.card}>
              <div className={styles.icon}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2479B5"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
