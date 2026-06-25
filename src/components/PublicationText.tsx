import type { ReactNode } from 'react'
import { assetUrl } from '../lib/assets'

function formatLinkLabel(label: string): string {
  if (label === 'paper' || label === 'video') {
    return `(${label})`
  }
  return label
}

/** Inline **bold**, _italic_, [text](url) */
export function PublicationText({ text }: { text: string }) {
  const parts: ReactNode[] = []
  const pattern = /(\*\*[^*]+\*\*|_[^_]+_|\[[^\]]+\]\([^)]+\))/g
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
    } else if (token.startsWith('_')) {
      parts.push(<em key={key++}>{token.slice(1, -1)}</em>)
    } else {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/)
      if (linkMatch) {
        parts.push(
          <a
            key={key++}
            href={assetUrl(linkMatch[2])}
            target="_blank"
            rel="noopener noreferrer"
          >
            {formatLinkLabel(linkMatch[1])}
          </a>,
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
