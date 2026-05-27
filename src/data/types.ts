export interface BilingualText {
  en: string
  ja: string
}

export interface NewsItem {
  title: BilingualText
  body?: BilingualText
  papers?: string[]
  links?: { label: string; href: string }[]
}

export interface NewsMonth {
  date: string
  items: NewsItem[]
}
