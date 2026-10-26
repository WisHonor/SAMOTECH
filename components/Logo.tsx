import { site } from "@/lib/site";
import styles from "./Logo.module.css";

// Renders the logo image once site.logoSrc is set; until then it reserves an empty slot.
export default function Logo({ height }: { height: number }) {
  const alt = `${site.name} — ${site.tagline}`;

  if (site.logoSrc) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={site.logoSrc} alt={alt} className={styles.image} style={{ height }} />;
  }

  return (
    <span className={styles.slot} style={{ height, width: Math.round(height * 3.6) }}>
      <span className="visually-hidden">{site.name}</span>
    </span>
  );
}
