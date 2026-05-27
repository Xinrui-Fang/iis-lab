import { ResearchGrid } from '../components/ResearchGrid'
import { researchProjects } from '../data/research'
import styles from './MembersPage.module.css'

export function ResearchPage() {
  return (
    <article className="entry-content">
      <h1 className={styles.pageTitle}>Research</h1>
      <ResearchGrid projects={researchProjects} />
    </article>
  )
}
