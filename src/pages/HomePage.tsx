import { Link } from 'react-router-dom'
import { BilingualSection } from '../components/BilingualSection'
import { NewsSection } from '../components/NewsSection'
import contentStyles from '../components/Content.module.css'
import * as home from '../data/homeContent'

export function HomePage() {
  return (
    <article className="entry-content">
      <BilingualSection title="IIS Lab" en={home.welcome.en} ja={home.welcome.ja} />

      <BilingualSection
        title="Mission Statement / IIS Labのミッション"
        en={home.mission.en}
        ja={home.mission.ja}
      />

      <BilingualSection
        title="Research domains / 研究領域"
        en={home.researchIntro.en}
        ja={home.researchIntro.ja}
      >
        <p>
          <Link to="/join">Join Us!</Link>
        </p>
      </BilingualSection>

      <section className={contentStyles.section}>
        <ul>
          {home.researchTopics.en.map((topic, i) => (
            <li key={topic}>
              {topic}
              <br />
              <span className={contentStyles.topicJa}>{home.researchTopics.ja[i]}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={contentStyles.section}>
        <h2 className={contentStyles.sectionTitle}>IIS Lab Philosophy</h2>
        <blockquote className={contentStyles.quote}>{home.philosophy.quote.en}</blockquote>
        <p>{home.philosophy.en}</p>
        <blockquote className={contentStyles.quote}>{home.philosophy.quote.ja}</blockquote>
        <p>{home.philosophy.ja}</p>
      </section>

      <hr className={contentStyles.contentDivider} />

      <NewsSection />
    </article>
  )
}
