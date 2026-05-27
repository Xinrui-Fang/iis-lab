export interface NavItem {
  label: string
  path: string
  external?: boolean
}

export const mainNav: NavItem[] = [
  { label: 'IIS Lab', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Publications', path: '/publications' },
  { label: 'Members', path: '/members' },
  { label: 'DLS', path: '/dls' },
  { label: "What's up?", path: '/whats-up' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Join Us!', path: '/join' },
]
