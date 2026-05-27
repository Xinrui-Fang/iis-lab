import type { ResearchProject } from '../data/research'
import styles from './ResearchGrid.module.css'

interface ResearchGridProps {
  projects: ResearchProject[]
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

function displayTitles(project: ResearchProject) {
  const primary = project.titleEn || project.titleJa
  const secondary =
    project.titleJa && project.titleEn && project.titleJa !== project.titleEn
      ? project.titleJa
      : ''

  return { primary, secondary }
}

export function ResearchGrid({ projects }: ResearchGridProps) {
  return (
    <ul className={styles.grid}>
      {projects.map((project) => {
        const { primary, secondary } = displayTitles(project)
        return (
          <li key={project.href} className={styles.item}>
            <a
              href={project.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={styles.placeholder}
                role="img"
                aria-label={primary}
              >
                <PlaceholderIcon />
              </div>
              <hr className={styles.divider} />
              <div className={styles.text}>
                <h2 className={styles.title}>{primary}</h2>
                {secondary && <p className={styles.subtitle}>{secondary}</p>}
              </div>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
