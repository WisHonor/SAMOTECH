import { navLinks, site } from "@/lib/site";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  const { email, phone, location, linkedin } = site.contact;

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.logoBox}>
            <Logo height={60} />
          </div>
        </div>
        <div>
          <div className={styles.heading}>QUICK LINKS</div>
          <div className={styles.list}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.heading}>CONTACT</div>
          <div className={styles.list}>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
            <span>{location}</span>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} {site.name} All rights reserved.
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
