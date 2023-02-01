import { EmploymentProps } from '../components/WorkExperience/experience.d'

export function getEmploymentDates({
  dateStarted,
  dateEnded,
  isCurrentlyWorkingHere,
}: EmploymentProps): string {
  const start = formatEmploymentDates(dateStarted)
  const end =
    isCurrentlyWorkingHere || !dateEnded
      ? 'Current'
      : formatEmploymentDates(dateEnded)

  return `${start} - ${end}`
}

function formatEmploymentDates(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  }

  return new Date(date).toLocaleDateString('en-EN', options)
}
