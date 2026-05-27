import data from './whatsup.json'

export interface WhatsUpItem {
  image: string
  caption: string
}

export interface WhatsUpSeason {
  title: string
  items: WhatsUpItem[]
}

export const whatsUpIntro = data.intro as { en: string; ja: string }
export const whatsUpSeasons = data.seasons as WhatsUpSeason[]
