import { site } from "@/lib/site";
import styles from "./About.module.css";

const credentials = ["B.Sc. Computer Science", "PRINCE2® Foundation", "English & French"];

export default function About() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.grid}`}>
        <div data-reveal className={styles.portrait}>
          <div aria-hidden="true" className={styles.frame} />
          <div className={styles.photo}>
            {site.founderPhotoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.founderPhotoSrc} alt="Portrait of Mouhamed Elmasry, Founder of SAMOTECH Services Inc." />
            ) : (
              <div className={styles.placeholder} role="img" aria-label="Founder photo placeholder">
                Founder photo: Mouhamed Elmasry
              </div>
            )}
          </div>
        </div>

        <div data-reveal className={styles.copy}>
          <div className="eyebrow">About the Founder</div>
          <h2 className={styles.name}>Mouhamed Elmasry</h2>
          <div className={styles.role}>Founder &amp; Principal Consultant</div>
          <div className={styles.divider} />
          <div className={styles.bio}>
            <p>
              Mouhamed Elmasry is a senior IM/IT leader with 25 years of experience at Employment and Social
              Development Canada (ESDC), where his career has progressed from web development and enterprise data
              architecture to director-level portfolio governance. He founded SAMOTECH Services Inc. to bring that depth
              of public-sector delivery experience to organizations facing complex modernization, governance, and AI
              adoption challenges.
            </p>
            <p>
              As IM/IT Director in ESDC&apos;s Portfolio Management Office, he provides strategic oversight of the
              Benefits Delivery Modernization portfolio, one of the Government of Canada&apos;s largest digital
              transformation initiatives, covering Old Age Security, Employment Insurance, and Canada Pension Plan
              benefits. He advises the Deputy CIO and senior leadership through executive dashboards, forecasting, and
              data-driven recommendations, and led the IT Branch resource plan behind a $103.9M Treasury Board
              submission approved in June 2026.
            </p>
            <p>
              Earlier, he led the migration of 800 employees and critical systems into ESDC under compressed timelines
              during COVID-19, and designed a mobile service toolkit for remote and Indigenous communities that earned
              the Deputy Minister Award for Innovation and Excellence. Today he applies Agentic AI and Microsoft Copilot
              to strengthen governance and decision-making, working fluently in English and French.
            </p>
          </div>
          <div className={styles.pills}>
            {credentials.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
