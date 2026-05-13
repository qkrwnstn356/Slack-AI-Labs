export interface NavItem {
  label: string
  to: string
  subItems?: NavSubItem[]
}

export interface NavSubItem {
  label: string
  to: string
  description: string
}

export interface ProgramCard {
  title: string
  description?: string
  tag?: string
  items?: string[]
  note?: string
}

export interface RoadmapItem {
  phase: string
  description: string
}
