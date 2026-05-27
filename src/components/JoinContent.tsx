import { Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { JoinBlock, JoinListItem } from '../data/join'
import styles from './JoinContent.module.css'

interface JoinContentProps {
  blocks: JoinBlock[]
}

function RichText({ text }: { text: string }) {
  const lines = text.split('\n')
  if (lines.length <= 1) {
    return <JoinInlineText text={text} />
  }
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          <JoinInlineText text={line} />
        </Fragment>
      ))}
    </>
  )
}

function JoinLink({ href, children }: { href: string; children: string }) {
  if (href.startsWith('/') && !href.startsWith('//')) {
    return <Link to={href}>{children}</Link>
  }
  if (href.startsWith('#')) {
    return <a href={href}>{children}</a>
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

/** Like PublicationText but uses client-side routing for internal paths. */
function JoinInlineText({ text }: { text: string }) {
  const parts: ReactNode[] = []
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const token = match[0]
    if (token.startsWith('**')) {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>)
    } else {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/)
      if (linkMatch) {
        parts.push(
          <JoinLink key={key++} href={linkMatch[2]}>
            {linkMatch[1]}
          </JoinLink>,
        )
      }
    }
    lastIndex = match.index + token.length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}

function ListItem({ item }: { item: JoinListItem }) {
  return (
    <li>
      <JoinInlineText text={item.text} />
      {item.children && item.children.length > 0 && (
        <ul>
          {item.children.map((child, index) => (
            <ListItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function JoinContent({ blocks }: JoinContentProps) {
  return (
    <div className={styles.content}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={index}>
                <RichText text={block.text} />
              </p>
            )
          case 'heading':
            return (
              <h3
                key={index}
                id={block.id}
                className={block.id ? styles.anchorHeading : undefined}
              >
                {block.text}
              </h3>
            )
          case 'hr':
            return <hr key={index} className={styles.divider} />
          case 'list':
            return (
              <ul key={index} className={styles.list}>
                {block.items.map((item, i) => (
                  <ListItem key={i} item={item} />
                ))}
              </ul>
            )
          case 'nav':
            return (
              <ul key={index} className={styles.nav}>
                {block.items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
