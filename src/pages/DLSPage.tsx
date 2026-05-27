import { dlsIntro, dlsLectures } from '../data/dls'
import styles from './DLSPage.module.css'

export function DLSPage() {
  return (
    <article className="entry-content">
      <h1 className={styles.pageTitle}>DLS</h1>

      <div className={styles.intro}>
        <p>{dlsIntro.ja}</p>
        <p>{dlsIntro.en}</p>
      </div>

      <hr className={styles.divider} />

      <ul className={styles.lectureList}>
        {dlsLectures.map((lecture) => (
          <li key={lecture}>{lecture}</li>
        ))}
      </ul>
    </article>
  )
}
