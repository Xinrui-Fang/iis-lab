import { JoinContent } from '../components/JoinContent'
import { joinBlocks } from '../data/join'
import styles from './ContactPage.module.css'

export function JoinPage() {
  return (
    <article className="entry-content">
      <h1 className={styles.pageTitle}>Join Us!</h1>
      <JoinContent blocks={joinBlocks} />
    </article>
  )
}
