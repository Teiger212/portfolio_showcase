import { Experience } from '../../types'

export type ExperienceProps = {
  experience: Experience
}

export type TechnologyProps = Pick<Experience, 'technologies'>

export type EmploymentProps = Pick<
  Experience,
  'dateEnded' | 'dateStarted' | 'isCurrentlyWorkingHere'
>

export type CardImageProps = Pick<Experience, 'company' | 'companyImage'>
