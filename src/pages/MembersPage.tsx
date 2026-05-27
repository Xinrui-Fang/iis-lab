import { MembersTable } from '../components/MembersTable'
import { memberSections, membersIntro } from '../data/members'
import styles from './MembersPage.module.css'

export function MembersPage() {
  return (
    <article className="entry-content">
      <h1 className={styles.pageTitle}>Members</h1>

      <div className={styles.intro}>
        <p>{membersIntro.ja}</p>
        <p>{membersIntro.en}</p>
      </div>

      <MembersTable sections={memberSections} />
    </article>
  )
}
