import type { PublicationBlock, PublicationSection } from '../lib/parsePublications'
import { PublicationText } from './PublicationText'
import styles from './PublicationsList.module.css'

function BlockRenderer({ block }: { block: PublicationBlock }) {
  if (block.type === 'paragraph') {
    return (
      <p className={styles.paragraph}>
        <PublicationText text={block.text} />
      </p>
    )
  }

  if (block.type === 'year-list') {
    return (
      <>
        {block.year && <h5 className={styles.yearLabel}>{block.year}</h5>}
        <ul className={styles.list}>
          {block.items.map((item) => (
            <li key={item.slice(0, 80)}>
              <PublicationText text={item} />
            </li>
          ))}
        </ul>
      </>
    )
  }

  return (
    <>
      <h4 className={styles.thesisYearLabel}>{block.year}</h4>
      <div className={styles.thesisBlock}>
        {block.lines.map((line, index) => (
          <p key={`${index}-${line.slice(0, 40)}`} className={styles.thesisLine}>
            <PublicationText text={line} />
          </p>
        ))}
      </div>
    </>
  )
}

interface PublicationsListProps {
  sections: PublicationSection[]
}

export function PublicationsList({ sections }: PublicationsListProps) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title} className={styles.section} id={slugify(section.title)}>
          <h2>{section.title}</h2>
          {section.blocks.map((block, index) => (
            <BlockRenderer key={`${section.title}-${index}`} block={block} />
          ))}
        </section>
      ))}
    </>
  )
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\u3040-\u30ff\u4e00-\u9faf]+/g, '-')
    .replace(/^-|-$/g, '')
}
