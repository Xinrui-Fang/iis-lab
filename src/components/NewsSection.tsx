import { newsItems } from '../data/news'
import styles from './News.module.css'

export function NewsSection() {
  return (
    <section className={styles.newsSection} id="news">
      <h2>News</h2>
      {newsItems.map((month) => (
        <div key={month.date} className={styles.monthGroup}>
          <h3 className={styles.monthLabel}>{month.date}</h3>
          {month.items.map((item, index) => (
            <article key={`${month.date}-${index}`} className={styles.newsItem}>
              <h3>{item.title.en}</h3>
              {item.body && (
                <>
                  <p>{item.body.en}</p>
                  {item.body.ja !== item.body.en && <p>{item.body.ja}</p>}
                </>
              )}
              {item.papers && item.papers.length > 0 && (
                <ul className={styles.paperList}>
                  {item.papers.map((paper) => (
                    <li key={paper}>{paper}</li>
                  ))}
                </ul>
              )}
              {item.links?.map((link) => (
                <p key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </p>
              ))}
            </article>
          ))}
        </div>
      ))}
      <p className={styles.olderNews}>
        以前のニュースはこちらにあります． Older news is available on the{' '}
        <a href="https://iis-lab.org/" target="_blank" rel="noopener noreferrer">
          original site
        </a>
        .
      </p>
    </section>
  )
}
