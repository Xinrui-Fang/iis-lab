import { WhatsUpGallery } from '../components/WhatsUpGallery'
import { whatsUpIntro, whatsUpSeasons } from '../data/whatsup'
import styles from './WhatsUpPage.module.css'

export function WhatsUpPage() {
  return (
    <article className="entry-content">
      <h1 className={styles.pageTitle}>What&apos;s up?</h1>

      <div className={styles.intro}>
        <p>{whatsUpIntro.en}</p>
        <p>{whatsUpIntro.ja}</p>
      </div>

      <WhatsUpGallery seasons={whatsUpSeasons} />
    </article>
  )
}
