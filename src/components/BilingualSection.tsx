import type { ReactNode } from 'react'
import contentStyles from './Content.module.css'

interface BilingualSectionProps {
  title: string
  en: string | string[]
  ja: string | string[]
  children?: ReactNode
}

function renderContent(text: string | string[]) {
  if (Array.isArray(text)) {
    return (
      <ul>
        {text.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return <p>{text}</p>
}

/** Bilingual block: English first, then Japanese — matches iis-lab.org layout */
export function BilingualSection({ title, en, ja, children }: BilingualSectionProps) {
  return (
    <section className={contentStyles.section}>
      <h2 className={contentStyles.sectionTitle}>{title}</h2>
      {children}
      <div className={contentStyles.bilingual}>
        <div className={contentStyles.langBlock}>{renderContent(en)}</div>
        <div className={contentStyles.langBlock}>{renderContent(ja)}</div>
      </div>
    </section>
  )
}
