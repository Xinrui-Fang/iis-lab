import type { WhatsUpSeason } from '../data/whatsup'
import styles from './WhatsUpGallery.module.css'

interface WhatsUpGalleryProps {
  seasons: WhatsUpSeason[]
}

function PlaceholderIcon() {
  return (
    <svg
      className={styles.placeholderIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" fill="currentColor" stroke="none" />
      <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2.12 0L7 17" />
    </svg>
  )
}

export function WhatsUpGallery({ seasons }: WhatsUpGalleryProps) {
  return (
    <>
      {seasons.map((season) => (
          <section key={season.title} className={styles.season}>
            <h2 className={styles.seasonTitle}>{season.title}</h2>
            <ul className={styles.gallery}>
              {season.items.map((item, index) => (
                <li key={`${season.title}-${index}`} className={styles.item}>
                  <figure className={styles.figure}>
                    <div className={styles.placeholder} role="img" aria-label={item.caption}>
                      <PlaceholderIcon />
                    </div>
                    <figcaption className={styles.caption}>{item.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
      ))}
    </>
  )
}
