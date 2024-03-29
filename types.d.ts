interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo'
  address: string
  backgroundInformation: string
  email: string
  role: string
  heroImage: Image
  name: string
  profilePic: Image
}

export interface Skill extends SanityBody {
  _type: 'skill'
  image: Image
  progress: number
  title: string
}

export interface Experience extends SanityBody {
  _type: 'experience'
  company: string
  companyImage: Image
  jobTitle: string
  dateStarted: date
  dateEnded: date
  isCurrentlyWorkingHere: boolean
  points: string[]
  technologies: Skill[]
}

export interface Project extends SanityBody {
  _type: 'project'
  title: string
  image: Image
  linkToProjectPage: string
  summary: string
  technologies: Skill[]
  isSideProject: boolean
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  link: string
}
