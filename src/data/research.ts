import data from './research.json'

export interface ResearchProject {
  href: string
  image: string
  titleEn: string
  titleJa: string
}

export const researchProjects = data as ResearchProject[]
